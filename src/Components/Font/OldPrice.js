import React from "react";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Heading4 from "./Heading4";
import Heading5 from "./Heading5";
import Heading6 from "./Heading6";
import Heading7 from "./Heading7";
import Text1 from "./Text1"
import Text2 from "./Text2"
import Text3 from "./Text3"
import Text4 from "./Text4"
import Text5 from "./Text5"
import Text6 from "./Text6"
import "./../../SCSS/Font/_font.scss";
function OldPrice({preText,postText, oldPrice,currency, size ,color,marginLeft,marginBottom,lineThrough,span,textAlign,textTransform}) {
  const finalPrice =
  oldPrice.toString().length > 3
  ? `${preText ? preText : ""} ${currency}${oldPrice.toString().slice(0, -3)}${oldPrice.toString().slice(-3)}${postText ? postText : ""}`
  : `${preText ? preText : ""} ${currency}${oldPrice.toString().slice(-3)}${postText ? postText : ""}`;

  return (
    <>
      {size === "heading1" ? (
        <Heading1 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom}  span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading2" ? (
        <Heading2 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading3" ? (
        <Heading3 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading4" ? (
        <Heading4 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading5" ? (
        <Heading5 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading6" ? (
        <Heading6 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ) : size === "heading6" ? (
        <Heading6 text={finalPrice} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} />
      ):size === "text1" ? (
        <Text1 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):size === "text2" ? (
        <Text2 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):size === "text3" ? (
        <Text3 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):size === "text4" ? (
        <Text4 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):size === "text5" ? (
        <Text5 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):size === "text6" ? (
        <Text6 text={finalPrice} color={color} marginLeft={marginLeft} marginBottom={marginBottom} span={span} textAlign={textAlign} textTransform={textTransform} lineThrough={lineThrough} />
      ):""
      
      }
    </>
  );
}

export default OldPrice;