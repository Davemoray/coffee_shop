import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.0294 12.4902L14.0294 10.8302C13.8194 10.4602 13.6294 9.76016 13.6294 9.35016V6.82016C13.6282 5.70419 13.3111 4.61137 12.7147 3.66813C12.1183 2.72489 11.267 1.96978 10.2594 1.49016C10.0022 1.0335 9.62709 0.654303 9.17324 0.392195C8.71939 0.130087 8.20347 -0.00530784 7.6794 0.000159243C6.5894 0.000159243 5.6094 0.590159 5.0894 1.52016C3.1394 2.49016 1.7894 4.50016 1.7894 6.82016V9.35016C1.7894 9.76016 1.5994 10.4602 1.3894 10.8202L0.379396 12.4902C-0.0206039 13.1602 -0.110604 13.9002 0.139396 14.5802C0.379396 15.2502 0.949396 15.7702 1.6894 16.0202C3.6294 16.6802 5.6694 17.0002 7.7094 17.0002C9.7494 17.0002 11.7894 16.6802 13.7294 16.0302C14.4294 15.8002 14.9694 15.2702 15.2294 14.5802C15.4894 13.8902 15.4194 13.1302 15.0294 12.4902ZM10.5194 18.0102C10.3091 18.5923 9.92467 19.0956 9.41835 19.4516C8.91203 19.8077 8.30837 19.9992 7.6894 20.0002C6.8994 20.0002 6.1194 19.6802 5.5694 19.1102C5.2494 18.8102 5.0094 18.4102 4.8694 18.0002C4.9994 18.0202 5.1294 18.0302 5.2694 18.0502C5.4994 18.0802 5.7394 18.1102 5.9794 18.1302C6.5494 18.1802 7.1294 18.2102 7.7094 18.2102C8.2794 18.2102 8.8494 18.1802 9.4094 18.1302C9.6194 18.1102 9.8294 18.1002 10.0294 18.0702L10.5194 18.0102Z"
        // fill="white"
      />
    </Svg>
  );
}
export default SvgComponent;
