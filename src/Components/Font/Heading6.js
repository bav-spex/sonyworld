import React from "react";
import "./../../SCSS/Font/_font.scss";
function Heading6({ text, color, marginBottom,marginLeft,span  }) {
  return (
    <>
      {!span ? (
        <p
          style={{
            color: `${color}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="heading6"
        >
          {" "}
          {text}
        </p>
      ) : (
        <span
          style={{
            color: `${color}`,
            margin: `0px 0px ${marginBottom ? marginBottom : 0}px ${marginLeft ? marginLeft : 0}px`,
          }}
          className="heading6"
        >
          {text}
        </span>
      )}
     
    </>
  );
}

export default Heading6;
