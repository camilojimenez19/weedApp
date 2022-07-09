import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const HeartTwoSvg = (props) => (
    <Svg
        width={38}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={38} height={38} rx={19} fill="#fff" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.603 21.98c4.296 4.615 6.101 6.253 6.897 6.253.862 0 2.832-1.837 8.104-7.563A5.181 5.181 0 0 0 28 17.094a5.2 5.2 0 0 0-1.401-3.586l-.14-.143a4.67 4.67 0 0 0-6.737.143l-1.222 1.3-1.22-1.3-.174-.175a4.671 4.671 0 0 0-6.704.175A5.196 5.196 0 0 0 9 17.095a5.193 5.193 0 0 0 1.402 3.581l1.201 1.303Zm-.05-7.382a3.124 3.124 0 0 1 2.288-1.01c.75.003 1.473.277 2.037.77l.12.11.142.143 2.36 2.507 2.374-2.523a3.093 3.093 0 0 1 4.573 0 3.692 3.692 0 0 1 0 4.993l-1.123 1.214a136.189 136.189 0 0 1-3.764 3.914l-.335.328a22.15 22.15 0 0 1-1.453 1.322l-.18.14-.092.065-.012-.007a3.662 3.662 0 0 1-.258-.196l-.23-.19a24.103 24.103 0 0 1-1.044-.957l-.514-.503c-1.214-1.198-2.856-2.92-4.882-5.121a3.695 3.695 0 0 1-.006-5Z"
            fill="#1C2340"
        />
    </Svg>
);

export default HeartTwoSvg;
