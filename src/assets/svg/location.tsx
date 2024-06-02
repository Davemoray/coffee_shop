import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.5 6.7C16.45 2.08 12.42 0 8.87998 0C8.87998 0 8.87998 0 8.86998 0C5.33998 0 1.29998 2.07 0.249978 6.69C-0.920022 11.85 2.23998 16.22 5.09998 18.97C6.15998 19.99 7.51998 20.5 8.87998 20.5C10.24 20.5 11.6 19.99 12.65 18.97C15.51 16.22 18.67 11.86 17.5 6.7ZM8.87998 11.71C7.13998 11.71 5.72998 10.3 5.72998 8.56C5.72998 6.82 7.13998 5.41 8.87998 5.41C10.62 5.41 12.03 6.82 12.03 8.56C12.03 10.3 10.62 11.71 8.87998 11.71Z"
        // fill="white"
      />
    </Svg>
  );
}

export default SvgComponent;
