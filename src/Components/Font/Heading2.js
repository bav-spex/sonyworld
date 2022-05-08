import React from "react";
import "./../../SCSS/Font/_font.scss";
function Heading2({ text, color, marginBottom }) {
  return <p
  style={{
    color: `${color}`,
    margin: `0px 0px ${marginBottom ? marginBottom :0}px 0px`,
  }}
  className="heading2">{text}</p>;
}

export default Heading2;
