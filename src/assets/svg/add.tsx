import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.4062 8.33333H11.6667V1.59375C11.6667 0.713542 10.9219 0 10 0C9.07812 0 8.33333 0.713542 8.33333 1.59375V8.33333H1.59375C0.713542 8.33333 0 9.07812 0 10C0 10.9219 0.713542 11.6667 1.59375 11.6667H8.33333V18.4062C8.33333 19.2865 9.07812 20 10 20C10.9219 20 11.6667 19.2865 11.6667 18.4062V11.6667H18.4062C19.2865 11.6667 20 10.9219 20 10C20 9.07812 19.2865 8.33333 18.4062 8.33333Z"
        // fill="white"
      />
    </Svg>
  );
}
export default SvgComponent;
