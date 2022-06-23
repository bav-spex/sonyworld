import React from "react";
import "./../../SCSS/Font/_font.scss";
function Heading3({ text , color, marginBottom,marginLeft,span,textAlign,textTransform }) {
  return (
    <>
      {!span ? (
        <p
          style={{
             textAlign:`${textAlign}`,
             textTransform: `${textTransform}`,
            color: `${color}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="heading4"
        >
          {" "}
          {text}
        </p>
      ) : (
        <span
          style={{
             textAlign:`${textAlign}`,
             textTransform: `${textTransform}`,
            color: `${color}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="heading4"
        >
          {text}
        </span>
      )}
     
    </>
  );
}

export default Heading3;
