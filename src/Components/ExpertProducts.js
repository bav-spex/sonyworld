import React, { useState } from "react";
import "./../SCSS/_expertProducts.scss";
import checked from "./../Assets/Icon/checked.svg";
import empty_check from "./../Assets/Icon/empty_check.svg";
import black_down_arrow from "./../Assets/Icon/black_down_arrow.svg";

import { Rating } from "react-simple-star-rating";
import Price from "./Font/Price";
import OldPrice from "./Font/OldPrice";
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
        <div className="rating__block">
          <Rating
            // onClick={handleRating}
            size={20}
            fillColor="#DC3A1A"
            emptyColor="#C8C8C8"
            readonly={true}
            ratingValue={(product.rating * 100) / 5} /* Available Props */
          />
          <img
            src={black_down_arrow}
            alt=""
            className="pd__product__rating__icon"
          />
        </div>
        <div className="exp__rd__rating__text__block">
          <p className="exp__rd__product__rating">{product.rating}</p>
          <p className="exp__rd__product__totalRating">
            {product.totalRatings.toString().length > 3
              ? `(${product.totalRatings
                  .toString()
                  .slice(0, -3)},${product.totalRatings
                  .toString()
                  .slice(-3)}) Rating`
              : `(${product.totalRatings.toString().slice(-3)}) Rating`}
          </p>
        </div>
      </div>

      <Price price={product.price} size="heading6" />
      <OldPrice
        oldPrice={product.oldPrice}
        size="text3"
        color="#808080"
        marginBottom={0}
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
