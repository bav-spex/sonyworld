import React from "react";
import Heading5 from "../Font/Heading5";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import Text3 from "../Font/Text3";
import Text4 from "../Font/Text4";
import protection_icon from "./../../assets/Icon/protection_icon.png";
import "./../../SCSS/MostSharedComponents/_protectionPlan.scss"
function ProtectionPlan({ title, protection,remove }) {
  return (
    <div className="protection__plan__block">
      <Heading5 text={`${title} `} />
      {protection.map((protect, protectIndex) => {
        return (
          <div className="row selected__plan__block">
            <div className="col-1 protection__icon__block">
              <img
                src={protection_icon}
                alt="protection_icon"
                className="col-8 protection__icon"
              />
            </div>
            <div key={protect.id} className="col-9 selected__plan__detail">
              <Text3 text="2-Year Standard Geek Squad Protection" />
              <Price price={protect.price} size="heading6" span={true}  currency={"SAR"} />
              <OldPrice
                preText="About"
                oldPrice={`${protect.price}`}
                postText="/mo"
                size="text4"
                marginLeft={10}
                marginBottom={0}
                span={true}
                currency={"SAR"}
              />
            </div>
            <div onClick={()=>remove(protect.id)} className="col-2 remove__plan">
              <Text4 text="Remove" color="#FF4F04" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProtectionPlan;
