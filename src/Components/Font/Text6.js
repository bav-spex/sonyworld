import React from "react";
import "./../../SCSS/Font/_font.scss";
function Text6({ text, color,marginBottom,marginLeft, lineThrough,span }) {
  return (
    <>
      {!span ? (
        <p
          style={{
            color: `${color}`,
            textDecoration: `${lineThrough ? "line-through" : "none"}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="text6"
        >
          {text}
        </p>
      ) : (
        <span
          style={{
            color: `${color}`,
            textDecoration: `${lineThrough ? "line-through" : "none"}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="text6"
        >
          {text}
        </span>
      )}
    </>
  );
}

export default Text6;
