import React from "react";
import "./../../SCSS/Font/_font.scss";
function Text5({ text, color, marginBottom,marginLeft, lineThrough,span  ,textAlign}) {
  return (
    <>
      {!span ? (
        <p
          style={{
             textAlign:`${textAlign}`,
            color: `${color}`,
            textDecoration: `${lineThrough ? "line-through" : "none"}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="text5"
        >
          {text}
        </p>
      ) : (
        <span
          style={{
             textAlign:`${textAlign}`,
            color: `${color}`,
            textDecoration: `${lineThrough ? "line-through" : "none"}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="text5"
        >
          {text}
        </span>
      )}
    </>
  );
}

export default Text5;
