import {createContext, useContext} from "react";

import {
  action,
  autorun,
  computed,
  observable,
  reaction,
  runInAction,
  when,
} from "mobx";
import {
  AnyModel,
  createContext as createMobxContext,
  idProp,
  Model,
  model,
  modelAction,
  ModelClass,
  modelFlow,
  ObjectMap,
  objectMap,
  prop,
  _async,
  _await,
} from "mobx-keystone";

import {
  RawIntrospectionResult,
  introspectionQuery,
} from "@edgedb/common/schemaData/queries";
import {
  buildTypesGraph,
  SchemaType,
  SchemaObjectType,
  SchemaScalarType,
  SchemaFunction,
  SchemaConstraint,
  SchemaPointer,
  SchemaAbstractAnnotation,
  SchemaExtension,
  SchemaAlias,
  SchemaGlobal,
} from "@edgedb/common/schemaData";

import {fetchSchemaData, storeSchemaData} from "../idbStore";

import {instanceCtx} from "./instance";
import {connCtx, Connection} from "./connection";

export const dbCtx = createMobxContext<DatabaseState>();

const SCHEMA_DATA_VERSION = 2;

export interface SchemaData {
  schemaDataVersion: number;
  migrationId: string | null;
  sdl: string;
  objects: Map<string, SchemaObjectType>;
  objectsByName: Map<string, SchemaObjectType>;
  functions: Map<string, SchemaFunction>;
  constraints: Map<string, SchemaConstraint>;
  scalars: Map<string, SchemaScalarType>;
  types: Map<string, SchemaType>;
  pointers: Map<string, SchemaPointer>;
  aliases: Map<string, SchemaAlias>;
  globals: Map<string, SchemaGlobal>;
  annotations: Map<string, SchemaAbstractAnnotation>;
  extensions: SchemaExtension[];
  shortNamesByModule: Map<string, Set<string>>;
}

@model("DatabaseState")
export class DatabaseState extends Model({
  $modelId: idProp,
  name: prop<string>(),

  connection: prop<Connection>(null!).withSetter(),
  tabStates: prop<ObjectMap<AnyModel>>(),
}) {
  @observable.ref
  schemaData: SchemaData | null = null;

  @observable
  fetchingSchemaData = false;

  @observable
  currentRole: string | null = null;

  @observable
  loadingTabs = new Map<string, boolean>();

  @action
  setLoadingTab(stateClass: ModelClass<any>, loading: boolean) {
    this.loadingTabs.set(stateClass.name, loading);
  }

  @observable
  migrationId: string | null | undefined = undefined;

  @observable
  objectCount: number | null = null;

  onInit() {
    dbCtx.set(this, this);
    connCtx.setComputed(this, () => this.connection);
  }

  onAttachedToRootStore() {
    const instanceState = instanceCtx.get(this)!;

    const fetchSchemaDisposer = when(
      () => this.connection !== null,
      () => this.fetchSchemaData()
    );

    const roleUpdateDisposer = autorun(() => {
      if (instanceState.authUsername) {
        runInAction(() => (this.currentRole = instanceState.authUsername));
      } else {
        const roles = instanceState.roles;
        if (roles && !roles.includes(this.currentRole!)) {
          runInAction(() => (this.currentRole = roles[0]));
        }
      }
    });

    const connectionDisposer = autorun(() => {
      if (this.currentRole) {
        this.setConnection(
          new Connection({
            config: {
              serverUrl: instanceState.serverUrl,
              authToken: instanceState.authToken!,
              database: this.name,
              user: this.currentRole,
            },
          })
        );
      }
    });

    return () => {
      fetchSchemaDisposer();
      roleUpdateDisposer();
      connectionDisposer();
    };
  }

  async updateObjectCount() {
    const {result} = await this.connection.query(`select count(std::Object)`);
    if (result) {
      runInAction(() => {
        this.objectCount = Number(result[0]);
      });
    }
  }

  private async _fetchSchemaDataFromStore() {
    if (!this.schemaData) {
      const instanceState = instanceCtx.get(this)!;

      const schemaData = await fetchSchemaData(
        this.name,
        instanceState.instanceName!
      );
      return schemaData;
    }
  }

  @modelFlow
  fetchSchemaData = _async(function* (this: DatabaseState) {
    const conn = this.connection;

    const [migrationId, schemaData] = yield* _await(
      Promise.all([
        conn
          .query(
            `SELECT (
              SELECT schema::Migration {
                children := .<parents[IS schema::Migration]
              } FILTER NOT EXISTS .children
            ).id;`
          )
          .then(({result}) => (result?.[0] ?? null) as string | null),
        this._fetchSchemaDataFromStore(),
      ])
    );

    this.migrationId = migrationId;

    if (
      schemaData &&
      schemaData.migrationId === migrationId &&
      schemaData.schemaDataVersion === SCHEMA_DATA_VERSION
    ) {
      console.log("fetched schema from cache");
      this.schemaData = schemaData;
    } else {
      this.fetchingSchemaData = true;

      try {
        const [sdl, rawTypes] = yield* _await(
          Promise.all([
            conn.query(`describe schema as sdl`).then(({result, duration}) => {
              // console.log("describe", duration);
              return result![0] as string;
            }),
            conn.query(introspectionQuery).then(({result, duration}) => {
              // console.log("types", duration);
              return result![0] as RawIntrospectionResult;
            }),
          ])
        );

        const {
          types,
          pointers,
          functions,
          constraints,
          annotations,
          aliases,
          globals,
          extensions,
        } = buildTypesGraph(rawTypes);

        const schemaData: SchemaData = {
          schemaDataVersion: SCHEMA_DATA_VERSION,
          migrationId,
          sdl,
          objects: new Map(
            [...types.values()]
              .filter((t) => t.schemaType === "Object")
              .map((t) => [t.id, t as SchemaObjectType])
          ),
          objectsByName: new Map(
            [...types.values()]
              .filter((t) => t.schemaType === "Object")
              .map((t) => [t.name, t as SchemaObjectType])
          ),
          functions,
          constraints,
          scalars: new Map(
            [...types.values()]
              .filter((t) => t.schemaType === "Scalar")
              .map((t) => [t.name, t as SchemaScalarType])
          ),
          types,
          pointers,
          annotations,
          aliases,
          globals,
          extensions,
          shortNamesByModule: [
            ...([...types.values()].filter(
              (t) => t.schemaType === "Object" || t.schemaType === "Scalar"
            ) as (SchemaObjectType | SchemaScalarType)[]),
            ...[...pointers.values()].filter((p) => p.abstract),
            ...functions.values(),
            ...constraints.values(),
            ...annotations.values(),
            ...aliases.values(),
            ...globals.values(),
          ].reduce((modules, item) => {
            if (!modules.has(item.module)) {
              modules.set(item.module, new Set());
            }
            modules.get(item.module)!.add(item.shortName);
            return modules;
          }, new Map<string, Set<string>>()),
        };

        const instanceState = instanceCtx.get(this)!;

        storeSchemaData(this.name, instanceState.instanceName!, schemaData);

        this.schemaData = schemaData;
      } finally {
        this.fetchingSchemaData = false;
        console.log("fetched schema");
      }
    }
  });
}

export const DatabaseStateContext = createContext<DatabaseState>(null!);

export function useDatabaseState() {
  return useContext(DatabaseStateContext);
}
