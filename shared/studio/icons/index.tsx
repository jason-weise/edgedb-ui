type IconProps = React.SVGProps<SVGSVGElement>;

type ActiveItem = {
  active?: boolean;
};

const activeColor1 = "#74A6FC";
const activeColor2 = "#B199F2";
const activeColor3 = "#E5AAA5";
const activeColor4 = "#8EA1F7";

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 12 12">
      <path d="M 4 2 L 9 6 L 4 10" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      width="14"
      height="7"
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 1L7 6L1 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.35881 13.6412C0.837222 14.1196 1.61288 14.1196 2.09129 13.6412L7 8.73248L11.9087 13.6412C12.3871 14.1196 13.1628 14.1196 13.6412 13.6412C14.1196 13.1628 14.1196 12.3871 13.6412 11.9087L8.73249 7L13.6412 2.09129C14.1196 1.61288 14.1196 0.837222 13.6412 0.35881C13.1628 -0.119603 12.3871 -0.119603 11.9087 0.35881L7 5.26751L2.09129 0.35881C1.61288 -0.119603 0.837222 -0.119603 0.35881 0.35881C-0.119603 0.837222 -0.119602 1.61288 0.35881 2.09129L5.26752 7L0.358809 11.9087C-0.119604 12.3871 -0.119603 13.1628 0.35881 13.6412Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeaderInstanceIcon() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6H3C2.44772 6 2 6.44772 2 7V17C2 17.5523 2.44772 18 3 18H13C13.5523 18 14 17.5523 14 17V7C14 6.44772 13.5523 6 13 6ZM3 4C1.34315 4 0 5.34315 0 7V17C0 18.6569 1.34315 20 3 20H13C14.6569 20 16 18.6569 16 17V7C16 5.34315 14.6569 4 13 4H3Z"
      />
      <path d="M6 9C6 9.55228 5.55228 10 5 10C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8C5.55228 8 6 8.44772 6 9Z" />
      <path d="M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15Z" />
    </svg>
  );
}

export function HeaderDatabaseIcon() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16V12V8C16 5.79102 12.418 4 8 4C3.58203 4 0 5.79102 0 8V12V16C0 18.209 3.58203 20 8 20C12.418 20 16 18.209 16 16ZM2.00098 10.6464V12.0093L2.00128 12.0109C2.00248 12.0168 2.00555 12.0291 2.01352 12.0486C2.02968 12.0881 2.06834 12.1621 2.15562 12.2653C2.33804 12.4809 2.68039 12.761 3.23757 13.0396C4.35305 13.5973 6.03403 14 8 14C9.96597 14 11.6469 13.5973 12.7624 13.0396C13.3196 12.761 13.662 12.4809 13.8444 12.2653C13.9317 12.1621 13.9703 12.0881 13.9865 12.0486C13.9945 12.0291 13.9975 12.0168 13.9987 12.0109L13.999 12.0093V10.6464C12.5332 11.4765 10.3889 12 8 12C5.61115 12 3.46684 11.4765 2.00098 10.6464ZM14 8L13.9993 8.00778L13.9987 8.01088C13.9975 8.01679 13.9945 8.02913 13.9865 8.04861C13.9703 8.0881 13.9317 8.16211 13.8444 8.2653C13.662 8.48094 13.3196 8.76098 12.7624 9.03957C11.6469 9.59731 9.96597 10 8 10C6.03403 10 4.35305 9.59731 3.23757 9.03957C2.68039 8.76098 2.33804 8.48094 2.15562 8.2653C2.06834 8.16211 2.02968 8.0881 2.01352 8.04861C2.00555 8.02913 2.00248 8.01679 2.00128 8.01088L2.00071 8.00777L2 8L2.00098 7.98926L2.01367 7.95117C2.0293 7.91211 2.06836 7.83789 2.15527 7.73486C2.33789 7.51904 2.68066 7.23926 3.2373 6.96045C3.75391 6.70215 4.3916 6.47705 5.12207 6.31006C5.9707 6.11621 6.94434 6 8 6C9.96582 6 11.6465 6.40283 12.7627 6.96045C13.3193 7.23926 13.6621 7.51904 13.8447 7.73486C13.9316 7.83789 13.9707 7.91211 13.9863 7.95117L13.999 7.98926L14 8ZM2.00098 15.9893V14.6464C3.46684 15.4765 5.61115 16 8 16C10.3889 16 12.5332 15.4765 13.999 14.6464V15.9893L14 16L13.999 16.0107L13.9863 16.0488C13.9766 16.0723 13.959 16.1079 13.9277 16.1543C13.9072 16.186 13.8799 16.2231 13.8447 16.2651C13.7305 16.4004 13.5527 16.5605 13.2998 16.73C13.1484 16.8311 12.9707 16.9355 12.7627 17.0396C11.6465 17.5972 9.96582 18 8 18C7.7334 18 7.47266 17.9927 7.21777 17.9785C6.9834 17.9653 6.75488 17.9468 6.53125 17.9229C5.88477 17.8535 5.28516 17.7407 4.74414 17.5957C4.16992 17.4419 3.66211 17.252 3.2373 17.0396C2.68066 16.7607 2.33789 16.481 2.15527 16.2651C2.06836 16.1621 2.0293 16.0879 2.01367 16.0488L2.00098 16.0107L2 16L2.00098 15.9893Z"
      />
    </svg>
  );
}

export function TabDashboardIcon(props: ActiveItem) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="-1 -1 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2V10H10V2H2ZM1 0C0.447715 0 0 0.447715 0 1V11C0 11.5523 0.447715 12 1 12H11C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0H1Z"
        fill={props && props.active ? activeColor1 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16V24H10V16H2ZM1 14C0.447715 14 0 14.4477 0 15V25C0 25.5523 0.447715 26 1 26H11C11.5523 26 12 25.5523 12 25V15C12 14.4477 11.5523 14 11 14H1Z"
        fill={props && props.active ? activeColor4 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2V10H24V2H16ZM15 0C14.4477 0 14 0.447715 14 1V11C14 11.5523 14.4477 12 15 12H25C25.5523 12 26 11.5523 26 11V1C26 0.447715 25.5523 0 25 0H15Z"
        fill={props && props.active ? activeColor2 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16V24H24V16H16ZM15 14C14.4477 14 14 14.4477 14 15V25C14 25.5523 14.4477 26 15 26H25C25.5523 26 26 25.5523 26 25V15C26 14.4477 25.5523 14 25 14H15Z"
        fill={props && props.active ? activeColor3 : undefined}
      />
    </svg>
  );
}

export function TabReplIcon(props: ActiveItem) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.70711 5.29289C4.31658 4.90237 3.68342 4.90237 3.29289 5.29289C2.90237 5.68342 2.90237 6.31658 3.29289 6.70711L9.58579 13L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L11.7071 13.7071C12.0976 13.3166 12.0976 12.6834 11.7071 12.2929L4.70711 5.29289Z"
        fill={props && props.active ? activeColor1 : undefined}
      />
      <path
        d="M15 19C14.4477 19 14 19.4477 14 20C14 20.5523 14.4477 21 15 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H15Z"
        fill={props && props.active ? activeColor3 : undefined}
      />
    </svg>
  );
}

export function TabSchemaIcon(props: ActiveItem) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2V10H10V2H2ZM1 0C0.447715 0 0 0.447715 0 1V11C0 11.5523 0.447715 12 1 12H11C11.5523 12 12 11.5523 12 11V1C12 0.447715 11.5523 0 11 0H1Z"
        fill={props && props.active ? activeColor1 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16V24H24V16H16ZM15 14C14.4477 14 14 14.4477 14 15V25C14 25.5523 14.4477 26 15 26H25C25.5523 26 26 25.5523 26 25V15C26 14.4477 25.5523 14 25 14H15Z"
        fill={props && props.active ? activeColor2 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 12H7V17.9999C7 18.3514 7.0898 18.5956 7.20572 18.7348C7.29491 18.8418 7.49048 18.9999 8 18.9999H13.9992L13.9999 20.9999H8C7.00952 20.9999 6.20509 20.6581 5.66928 20.0151C5.1602 19.4042 5 18.6485 5 17.9999V12Z"
        fill={props && props.active ? activeColor3 : undefined}
      />
    </svg>
  );
}

export function TabDataExplorerIcon(props: ActiveItem) {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 11V14H24V11H10ZM9 9C8.44772 9 8 9.44772 8 10V15C8 15.5523 8.44772 16 9 16H25C25.5523 16 26 15.5523 26 15V10C26 9.44772 25.5523 9 25 9H9Z"
        fill={props && props.active ? activeColor1 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 20V23H20V20H2ZM1 18C0.447715 18 0 18.4477 0 19V24C0 24.5523 0.447716 25 1 25H21C21.5523 25 22 24.5523 22 24V19C22 18.4477 21.5523 18 21 18H1Z"
        fill={props && props.active ? activeColor2 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2V5H20V2H2ZM1 0C0.447715 0 0 0.447715 0 1V6C0 6.55228 0.447716 7 1 7H21C21.5523 7 22 6.55228 22 6V1C22 0.447715 21.5523 0 21 0H1Z"
        fill={props && props.active ? activeColor3 : undefined}
      />
    </svg>
  );
}

export function TabGraphQlIcon(props: ActiveItem) {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3.29469L4 8.91969V20.0803L14 25.7053L24 20.0803V8.91969L14 3.29469ZM26 7.75L14 1L2 7.75V21.25L14 28L26 21.25V7.75Z"
        fill={props?.active ? activeColor3 : undefined}
      />
      <circle
        cx="14"
        cy="3"
        r="3"
        fill={props?.active ? activeColor1 : undefined}
      />
      <circle
        cx="14"
        cy="26"
        r="3"
        fill={props?.active ? activeColor2 : undefined}
      />
      <circle
        cx="3"
        cy="21"
        r="3"
        fill={props?.active ? activeColor1 : undefined}
      />
      <circle
        cx="25"
        cy="21"
        r="3"
        fill={props?.active ? activeColor1 : undefined}
      />
      <circle
        cx="3"
        cy="8"
        r="3"
        fill={props?.active ? activeColor2 : undefined}
      />
      <circle
        cx="25"
        cy="8"
        r="3"
        fill={props?.active ? activeColor2 : undefined}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2C14.3484 2 14.6716 2.1813 14.8533 2.47855L25.8533 20.4785C26.0419 20.7872 26.0491 21.1737 25.8722 21.4892C25.6953 21.8047 25.3617 22 25 22H3C2.63827 22 2.30475 21.8047 2.1278 21.4892C1.95086 21.1737 1.9581 20.7872 2.14672 20.4785L13.1467 2.47855C13.3284 2.1813 13.6516 2 14 2ZM4.78306 20H23.2169L14 4.91773L4.78306 20Z"
        fill={props?.active ? activeColor1 : undefined}
      />
    </svg>
  );
}

export function TabSettingsIcon(props: ActiveItem) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.31509 1.581L7.89825 3.51171L8.35975 0.318907C9.20555 0.110533 10.0899 0 11 0C11.9101 0 12.7944 0.110533 13.6403 0.318907L14.1017 3.51171L16.6849 1.581C18.2115 2.50439 19.4956 3.78845 20.419 5.31508L18.4883 7.89825L21.6811 8.35975C21.8895 9.20555 22 10.0899 22 11C22 11.9101 21.8895 12.7944 21.6811 13.6403L18.4883 14.1017L20.419 16.6849C19.4956 18.2115 18.2115 19.4956 16.6849 20.419L14.1017 18.4883L13.6403 21.6811C12.7944 21.8895 11.9101 22 11 22C10.0899 22 9.20555 21.8895 8.35975 21.6811L7.89825 18.4883L5.31508 20.419C3.78845 19.4956 2.50439 18.2115 1.581 16.6849L3.51171 14.1017L0.318907 13.6403C0.110533 12.7944 0 11.9101 0 11C0 10.0899 0.110533 9.20555 0.318907 8.35975L3.51171 7.89825L1.581 5.31509C2.50439 3.78845 3.78845 2.50439 5.31509 1.581ZM11 2C10.7067 2 10.417 2.01397 10.1316 2.04122L9.39629 7.12829L5.27963 4.05141C4.83196 4.42047 4.42047 4.83196 4.05141 5.27963L7.12829 9.39629L2.04122 10.1316C2.01397 10.417 2 10.7067 2 11C2 11.2933 2.01397 11.583 2.04122 11.8684L7.12829 12.6037L4.05141 16.7204C4.42047 17.168 4.83195 17.5795 5.27963 17.9486L9.39629 14.8717L10.1316 19.9588C10.417 19.986 10.7067 20 11 20C11.2933 20 11.583 19.986 11.8684 19.9588L12.6037 14.8717L16.7204 17.9486C17.168 17.5795 17.5795 17.168 17.9486 16.7204L14.8717 12.6037L19.9588 11.8684C19.986 11.583 20 11.2933 20 11C20 10.7067 19.986 10.417 19.9588 10.1316L14.8717 9.39629L17.9486 5.27963C17.5795 4.83195 17.168 4.42047 16.7204 4.05141L12.6037 7.12829L11.8684 2.04122C11.583 2.01397 11.2933 2 11 2Z"
        fill={props && props.active ? activeColor1 : undefined}
      />
      <path
        d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
        fill={props && props.active ? activeColor3 : undefined}
      />
    </svg>
  );
}

export function ThemeSwitcherIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 1C8.99951 0.447715 9.44723 0 9.99951 0C10.5518 0 10.9995 0.447715 10.9995 1V2C10.9995 2.55228 10.5518 3 9.99951 3C9.44723 3 8.99951 2.55228 8.99951 2V1ZM9.99951 13C11.6564 13 12.9995 11.6569 12.9995 10C12.9995 8.34315 11.6564 7 9.99951 7C8.34266 7 6.99951 8.34315 6.99951 10C6.99951 11.6569 8.34266 13 9.99951 13ZM9.99951 16C13.3132 16 15.9995 13.3137 15.9995 10C15.9995 6.68629 13.3132 4 9.99951 4C6.6858 4 3.99951 6.68629 3.99951 10C3.99951 13.3137 6.6858 16 9.99951 16ZM9.99951 17C9.44723 17 8.99951 17.4477 8.99951 18V19C8.99951 19.5523 9.44723 20 9.99951 20C10.5518 20 10.9995 19.5523 10.9995 19V18C10.9995 17.4477 10.5518 17 9.99951 17ZM15.6567 2.92879C16.0472 2.53826 16.6804 2.53826 17.0709 2.92879C17.4614 3.31931 17.4614 3.95248 17.0709 4.343L16.3638 5.05011C15.9732 5.44063 15.3401 5.44063 14.9496 5.05011C14.559 4.65958 14.559 4.02642 14.9496 3.63589L15.6567 2.92879ZM5.04988 14.9498C4.65936 14.5593 4.02619 14.5593 3.63567 14.9498L2.92856 15.6569C2.53804 16.0474 2.53804 16.6806 2.92856 17.0711C3.31908 17.4616 3.95225 17.4616 4.34277 17.0711L5.04988 16.364C5.4404 15.9735 5.4404 15.3403 5.04988 14.9498ZM19 9C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18C17.4477 11 17 10.5523 17 10C17 9.44771 17.4477 9 18 9H19ZM3 10C3 9.44772 2.55228 9 2 9H1C0.447715 9 0 9.44771 0 10C0 10.5523 0.447715 11 1 11H2C2.55228 11 3 10.5523 3 10ZM17.0712 17.0709C16.6807 17.4614 16.0475 17.4614 15.657 17.0709L14.9499 16.3638C14.5594 15.9732 14.5594 15.3401 14.9499 14.9496C15.3404 14.559 15.9736 14.559 16.3641 14.9496L17.0712 15.6567C17.4617 16.0472 17.4617 16.6804 17.0712 17.0709ZM5.05022 5.05037C5.44074 4.65984 5.44074 4.02668 5.05022 3.63615L4.34311 2.92905C3.95259 2.53852 3.31942 2.53852 2.9289 2.92905C2.53837 3.31957 2.53837 3.95274 2.9289 4.34326L3.636 5.05037C4.02653 5.44089 4.65969 5.44089 5.05022 5.05037Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.96967 2.46967C7.11032 2.32902 7.30109 2.25 7.5 2.25H10.5C10.6989 2.25 10.8897 2.32902 11.0303 2.46967C11.171 2.61032 11.25 2.80109 11.25 3V3.75H6.75V3C6.75 2.80109 6.82902 2.61032 6.96967 2.46967ZM5.25 3.75V3C5.25 2.40326 5.48705 1.83097 5.90901 1.40901C6.33097 0.987053 6.90326 0.75 7.5 0.75H10.5C11.0967 0.75 11.669 0.987053 12.091 1.40901C12.5129 1.83097 12.75 2.40326 12.75 3V3.75H14.25H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H15V15C15 15.5967 14.7629 16.169 14.341 16.591C13.919 17.0129 13.3467 17.25 12.75 17.25H5.25C4.65326 17.25 4.08097 17.0129 3.65901 16.591C3.23705 16.169 3 15.5967 3 15V5.25H2.25C1.83579 5.25 1.5 4.91421 1.5 4.5C1.5 4.08579 1.83579 3.75 2.25 3.75H3.75H5.25ZM4.5 5.25V15C4.5 15.1989 4.57902 15.3897 4.71967 15.5303C4.86032 15.671 5.05109 15.75 5.25 15.75H12.75C12.9489 15.75 13.1397 15.671 13.2803 15.5303C13.421 15.3897 13.5 15.1989 13.5 15V5.25H12H6H4.5ZM7.5 7.5C7.91421 7.5 8.25 7.83579 8.25 8.25V12.75C8.25 13.1642 7.91421 13.5 7.5 13.5C7.08579 13.5 6.75 13.1642 6.75 12.75V8.25C6.75 7.83579 7.08579 7.5 7.5 7.5ZM11.25 8.25C11.25 7.83579 10.9142 7.5 10.5 7.5C10.0858 7.5 9.75 7.83579 9.75 8.25V12.75C9.75 13.1642 10.0858 13.5 10.5 13.5C10.9142 13.5 11.25 13.1642 11.25 12.75V8.25Z"
      />
    </svg>
  );
}

export function UndeleteIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.96967 2.46967C7.11032 2.32902 7.30109 2.25 7.5 2.25H10.5C10.6989 2.25 10.8897 2.32902 11.0303 2.46967C11.171 2.61032 11.25 2.80109 11.25 3V3.75H6.75V3C6.75 2.80109 6.82902 2.61032 6.96967 2.46967ZM5.25 3.75V3C5.25 2.40326 5.48705 1.83097 5.90901 1.40901C6.33097 0.987053 6.90326 0.75 7.5 0.75H10.5C11.0967 0.75 11.669 0.987053 12.091 1.40901C12.4875 1.80556 12.7208 2.33489 12.7474 2.89249L10.5583 5.25H6H4.5V11.7743L3 13.3897V5.25H2.25C1.83579 5.25 1.5 4.91421 1.5 4.5C1.5 4.08579 1.83579 3.75 2.25 3.75H3.75H5.25ZM15.3346 5.25L16.3917 4.11155C16.4604 4.22485 16.5 4.3578 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H15.3346ZM13.5 7.22568L15 5.6103V15C15 15.5967 14.7629 16.169 14.341 16.591C13.919 17.0129 13.3467 17.25 12.75 17.25H5.25C4.9415 17.25 4.63954 17.1866 4.3615 17.0671L5.58456 15.75H12.75C12.9489 15.75 13.1397 15.671 13.2803 15.5303C13.421 15.3897 13.5 15.1989 13.5 15V7.22568ZM8.23609 12.8945C8.18142 13.1746 7.9709 13.3989 7.6985 13.4734L8.23609 12.8945ZM7.5 7.5C7.76973 7.5 8.00621 7.64239 8.13836 7.85611L6.75 9.35127V8.25C6.75 7.83579 7.08579 7.5 7.5 7.5ZM9.75 12.75V11.2641L11.25 9.64876V12.75C11.25 13.1642 10.9142 13.5 10.5 13.5C10.0858 13.5 9.75 13.1642 9.75 12.75ZM16.0496 3.01034C16.3314 2.70681 16.3139 2.23226 16.0103 1.9504C15.7068 1.66855 15.2323 1.68613 14.9504 1.98966L1.9504 15.9897C1.66855 16.2932 1.68613 16.7677 1.98966 17.0496C2.29319 17.3314 2.76774 17.3139 3.0496 17.0103L16.0496 3.01034Z"
      />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.27014L0.109289 0.954545C-0.201233 0.530303 0.18692 0 0.807962 0H9.19204C9.81308 0 10.2012 0.530304 9.89071 0.954547L6 6.27014V9L4 11V6.27014Z"
      />
    </svg>
  );
}

export function EmptySetIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C7.55228 0 8 0.447715 8 1C8 1.55228 7.55228 2 7 2H5C4.44772 2 4 2.44772 4 3V8C4 8.26522 3.89464 8.51957 3.70711 8.70711L2.41421 10L3.70711 11.2929C3.89464 11.4804 4 11.7348 4 12V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20H5C3.34315 20 2 18.6569 2 17V12.4142L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289L2 7.58579V3C2 1.34315 3.34315 0 5 0H7ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H15C15.5523 2 16 2.44772 16 3V8C16 8.26522 16.1054 8.51957 16.2929 8.70711L17.5858 10L16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12V17C16 17.5523 15.5523 18 15 18H13C12.4477 18 12 18.4477 12 19C12 19.5523 12.4477 20 13 20H15C16.6569 20 18 18.6569 18 17V12.4142L19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L18 7.58579V3C18 1.34315 16.6569 0 15 0H13Z"
      />
    </svg>
  );
}

export function UndoChangesIcon() {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.303405 4.28253L4.29304 0.292893C4.68357 -0.097631 5.31673 -0.0976311 5.70726 0.292893C6.09778 0.683418 6.09778 1.31658 5.70726 1.70711L3.41436 4H14C15.6569 4 17 5.34315 17 7V10C17 11.6569 15.6569 13 14 13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H14C14.5523 11 15 10.5523 15 10V7C15 6.44772 14.5523 6 14 6H3.41421L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.29309 5.7073C0.29244 5.70665 0.29179 5.706 0.291142 5.70535C0.196581 5.61033 0.125056 5.50104 0.0765646 5.38443C0.0272379 5.26608 0 5.13622 0 5C0 4.86421 0.0270648 4.73474 0.0760943 4.6167C0.124282 4.50042 0.195357 4.39138 0.289319 4.29649C0.291839 4.29394 0.294372 4.29141 0.296919 4.28889C0.299073 4.28676 0.301235 4.28464 0.303405 4.28253Z"
      />
    </svg>
  );
}

export function SubmitChangesIcon() {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 0.292893C10.9024 0.683417 10.9024 1.31658 11.2929 1.70711L13.5858 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H13.5858L11.2929 8.29289C10.9024 8.68342 10.9024 9.31658 11.2929 9.70711C11.6834 10.0976 12.3166 10.0976 12.7071 9.70711L16.7071 5.70711C17.0976 5.31658 17.0976 4.68342 16.7071 4.29289L12.7071 0.292893C12.3166 -0.0976311 11.6834 -0.0976311 11.2929 0.292893Z"
      />
    </svg>
  );
}

export function WarningIcon() {
  return (
    <svg
      width="23.6"
      height="20.2"
      viewBox="0 0 236 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.357 122.019H130.643V56.9208H105.357V122.019ZM105.357 166.73H130.643V143.67H105.357V166.73ZM232.991 170.009L137.226 10.6635C128.679 -3.55451 107.321 -3.55451 98.7744 10.6635L3.00861 170.009C-5.53798 184.227 5.14105 202 22.2343 202H213.766C230.859 202 241.538 184.227 232.991 170.009Z"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15L11.6167 11.6167M13.4444 7.22222C13.4444 10.6587 10.6587 13.4444 7.22222 13.4444C3.78578 13.4444 1 10.6587 1 7.22222C1 3.78578 3.78578 1 7.22222 1C10.6587 1 13.4444 3.78578 13.4444 7.22222Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6H11M6 1L11 6L6 11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.89543 12 2 12H3V13C3 14.1046 3.89543 15 5 15H11C12.1046 15 13 14.1046 13 13V5C13 3.89543 12.1046 3 11 3H10V2C10 0.895431 9.10457 0 8 0H2ZM4 12H8C9.10457 12 10 11.1046 10 10V4H11C11.5523 4 12 4.44772 12 5V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V12Z"
      />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="-1 -1 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 1C9.5 0.447715 9.05229 0 8.5 0C7.94772 0 7.5 0.447715 7.5 1V7H1.5C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55229 0.947715 9 1.5 9H7.5V15C7.5 15.5523 7.94772 16 8.5 16C9.05229 16 9.5 15.5523 9.5 15V9H15.5C16.0523 9 16.5 8.55229 16.5 8C16.5 7.44772 16.0523 7 15.5 7H9.5V1Z"
      />
    </svg>
  );
}

export function KebabMenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 5C10.25 4.0335 11.0335 3.25 12 3.25C12.9665 3.25 13.75 4.0335 13.75 5C13.75 5.9665 12.9665 6.75 12 6.75C11.0335 6.75 10.25 5.9665 10.25 5ZM10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12ZM12 17.25C11.0335 17.25 10.25 18.0335 10.25 19C10.25 19.9665 11.0335 20.75 12 20.75C12.9665 20.75 13.75 19.9665 13.75 19C13.75 18.0335 12.9665 17.25 12 17.25Z"
      />
    </svg>
  );
}

export function SchemaViewGraphIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0C3.58167 0 0 3.58173 0 8C0 12.4183 3.58167 16 8 16ZM4 5H8V3H4V5ZM4 13H8V11H4V13ZM8 9H4V7H8V9ZM10 9H14V7H10V9Z"
      />
    </svg>
  );
}

export function SchemaViewTextIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58167 16 0 12.4183 0 8C0 3.58173 3.58167 0 8 0C12.4183 0 16 3.58173 16 8ZM2.58582 8L5.29297 5.29291C5.68347 4.90234 6.31665 4.90234 6.70715 5.29291C7.09766 5.68341 7.09766 6.31659 6.70715 6.70709L5.41418 8L6.70715 9.29291C7.09766 9.68341 7.09766 10.3166 6.70715 10.7071C6.31665 11.0977 5.68347 11.0977 5.29297 10.7071L2.58582 8ZM10.707 5.29291L13.4142 8L10.707 10.7071C10.3165 11.0977 9.68335 11.0977 9.29285 10.7071C8.90234 10.3166 8.90234 9.68341 9.29285 9.29291L10.5858 8L9.29285 6.70709C8.90234 6.31659 8.90234 5.68341 9.29285 5.29291C9.68335 4.90234 10.3165 4.90234 10.707 5.29291Z"
      />
    </svg>
  );
}
export function SchemaViewTextGraphIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58167 16 0 12.4183 0 8C0 3.58173 3.58167 0 8 0C12.4183 0 16 3.58173 16 8ZM12 5H8V3H12V5ZM12 13H8V11H12V13ZM8 9H12V7H8V9ZM4.29297 5.29291L1.58582 8L4.29297 10.7071C4.68347 11.0977 5.31665 11.0977 5.70715 10.7071C6.09766 10.3166 6.09766 9.68341 5.70715 9.29291L4.41418 8L5.70715 6.70709C6.09766 6.31659 6.09766 5.68341 5.70715 5.29291C5.31665 4.90234 4.68347 4.90234 4.29297 5.29291Z"
      />
    </svg>
  );
}
