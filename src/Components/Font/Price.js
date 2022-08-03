import React from "react";
import Heading1 from "../Font/Heading1";
import Heading2 from "../Font/Heading2";
import Heading3 from "../Font/Heading3";
import Heading4 from "../Font/Heading4";
import Heading5 from "../Font/Heading5";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import "./../../SCSS/Font/_font.scss";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import Text5 from "./Text5";
import Text6 from "./Text6";
function Price({ preText, price,currency,postText,marginLeft,marginBottom, size,span, textTransform,color,textAlign }) {
  const finalPrice =
    price.toString().length > 3
      ? `${preText ? preText : ""} ${currency}${price.toString().slice(0, -3)}${price.toString().slice(-3)}${postText ? postText : ""}`
      : `${preText ? preText : ""} ${currency}${price.toString().slice(-3)}${postText ? postText : ""}`;

  return (
    <>
      {size === "heading1" ? (
        <Heading1 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign}  />
      ) : size === "heading2" ? (
        <Heading2 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "heading3" ? (
        <Heading3 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "heading4" ? (
        <Heading4 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "heading5" ? (
        <Heading5 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "heading6" ? (
        <Heading6 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "heading7"?(
        <Heading7 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ):size === "text1" ? (
        <Text1 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign}  />
      ) : size === "text2" ? (
        <Text2 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "text3" ? (
        <Text3 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "text4" ? (
        <Text4 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "text5" ? (
        <Text5 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : size === "text6" ? (
        <Text6 text={finalPrice} span={span} color={color} marginLeft={marginLeft} marginBottom={marginBottom} textTransform={textTransform} textAlign={textAlign} />
      ) : ""}
    </>
  );
}

export default Price;
