import React from "react";
import "./../../SCSS/MostSharedComponents/_smallWarrantyBlock.scss";
import warranty_icon from "./../../Assets/Icon/warranty.png";
import Heading7 from "../Font/Heading7";
function SmallWarrantyBlock({ warranty }) {
  return (
    <div className="warranty__block">
      <img src={warranty_icon} alt="" className="warranty__icon" />
      <Heading7 text={`${warranty} year warranty`} span={true} />
    </div>
  );
}

export default SmallWarrantyBlock;
