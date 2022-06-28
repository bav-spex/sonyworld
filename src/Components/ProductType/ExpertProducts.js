import React, { useState } from "react";
import "./../../SCSS/ProductType/_expertProducts.scss";
import checked from "./../../assets/Icon/checked.svg";
import empty_check from "./../../assets/Icon/empty_check.svg";
import black_down_arrow from "./../../assets/Icon/black_down_arrow.svg";
import RatingBlock from "../MostSharedComponent/RatingBlock"
import Price from "../Font/Price";
import OldPrice from "../Font/OldPrice";
function ExpertProducts({ product }) {
  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  return (
    <div key={product.indx} className="expert__rd__product__block">
      <div className="col-4 exp__product__image__block">
        <img src={product.image} alt="" className="exp__product__image" />
      </div>
      <div className="exp__rd__rating__block">
        <RatingBlock rating={product.rating} totalRatings={product.totalRatings} />
      </div>

      <Price price={product.price} size="heading6" />
      <OldPrice
        oldPrice={product.oldPrice}
        size="text3"
        color="#808080"
        marginBottom={10}
        lineThrough={true}
      />
      <div className="exp__rd__select__block">
        <img
          onMouseEnter={() => setIsCheckBoxHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsCheckBoxHover(false)}
          className={
            !isCheckBox
              ? "exp__rd__check__icon"
              : "exp__rd__check__icon__disable"
          }
          src={isCheckBoxHover ? checked : empty_check}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isCheckBox
              ? "exp__rd__check__icon"
              : "exp__rd__check__icon__disable"
          }
          src={checked}
          alt=""
        />
      </div>
    </div>
  );
}

export default ExpertProducts;
