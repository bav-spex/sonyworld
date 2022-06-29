import React, { useState } from "react";
import "./../../SCSS/ProductType/_productEleven.scss";
import checked from "./../../assets/Icon/checked.svg";
import empty_check from "./../../assets/Icon/empty_check.svg";
import black_down_arrow from "./../../assets/Icon/black_down_arrow.svg";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import Price from "../Font/Price";
import OldPrice from "../Font/OldPrice";
import Text4 from "../Font/Text4";
function ProductEleven({ product }) {
  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  return (
    <div key={product.indx} className="productEleven__block">
      <div className=" productEleven__image__block">
        <img src={product.image} alt="" className="productEleven__image" />
      </div>
<Text4 text={product.categoryTagline} marginBottom10/>
      <Price price={product.price} size="heading6" marginBottom={10} />

      <div className="productEleven__select__block">
        <img
          onMouseEnter={() => setIsCheckBoxHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsCheckBoxHover(false)}
          className={
            !isCheckBox
              ? "productEleven__check__icon"
              : "productEleven__check__icon__disable"
          }
          src={isCheckBoxHover ? checked : empty_check}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isCheckBox
              ? "productEleven__check__icon"
              : "productEleven__check__icon__disable"
          }
          src={checked}
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductEleven;
