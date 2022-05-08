import React from "react";
import "./../../SCSS/Font/_font.scss";
function Text4({ text, color, marginBottom , lineThrough }) {
  return (
    <p
      style={{
        color: `${color}`,
        textDecoration: `${lineThrough ? "line-through" : "none"}`,
        margin: `0px 0px ${marginBottom}px 0px`,
      }}
      className="text4"
    >
      {text}
    </p>
  );
}

export default Text4;
