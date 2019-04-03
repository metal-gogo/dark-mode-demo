import React from "react";

const SVG = ({
  style = {},
  width = "24",
  className = "",
  viewBox = "0 0 24 24",
  children
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {children}
  </svg>
);

export default SVG;
