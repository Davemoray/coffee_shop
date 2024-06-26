import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 0H1C0.4 0 0 0.4 0 1V15C0 15.6 0.4 16 1 16H19C19.6 16 20 15.6 20 15V10H13C11.9 10 11 9.1 11 8C11 6.9 11.9 6 13 6H20V1C20 0.4 19.6 0 19 0Z"
        // fill="white"
      />
      <Path
        d="M13 9C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9Z"
        // fill="white"
      />
    </Svg>
  );
}

export default SvgComponent;
