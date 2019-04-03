import React from "react";
import SVG from "./SVG";

const Play = ({ fill = "#252626", ...rest }) => (
  <SVG viewBox="0 0 56 56" {...rest}>
    <path
      fill={fill}
      d="M11.6667 10.396V10.3138C11.6667 7.75539 14.5044 6.16399 16.7555 7.46199L47.2884 25.066C49.5706 26.3828 49.5706 29.6172 47.2884 30.934L16.7555 48.538C14.5044 49.836 11.6667 48.2446 11.6667 45.6862V45.604V10.396Z"
    />
  </SVG>
);

export default Play;
