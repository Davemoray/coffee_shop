import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.70012 0.209987C8.5259 0.0739141 8.31118 0 8.09012 0C7.86906 0 7.65434 0.0739141 7.48012 0.209987C5.58012 1.65999 -0.0298801 6.38999 0.000119857 11.9C0.000119857 16.36 3.63012 20 8.10012 20C12.5701 20 16.2001 16.37 16.2001 11.91C16.2101 6.47999 10.5901 1.66999 8.70012 0.209987Z"
        // fill="white"
      />
    </Svg>
  );
}

export default SvgComponent;
