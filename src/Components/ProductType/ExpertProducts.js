import React, { useState } from "react";
import "./../../SCSS/ProductType/_expertProducts.scss";
import checked from "./../../assets/Icon/checked.svg";
import empty_check from "./../../assets/Icon/empty_check.svg";
import black_down_arrow from "./../../assets/Icon/black_down_arrow.svg";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import Price from "../Font/Price";
import OldPrice from "../Font/OldPrice";
import { Link } from "react-router-dom";
function ExpertProducts({ product }) {
  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  // console.log(Object.values(product.reviewSummary.totals).reduce(
  //   (a, b) => a + b
  // ));
  return (
    <div  key={product.id} className="expert__rd__product__block">
      <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
       
      <div className="col-4 exp__product__image__block">
        <img src={product.baseImage} alt="" className="exp__product__image" />
      </div>
      </Link>
      <div className="exp__rd__rating__block">
        <RatingBlock
          rating={4.5}
          totalRatings={4333}
        />
      </div>

      <Price
        currency={product.currency}
        price={product.price_rounded}
        size="heading6"
      />
      <OldPrice
        oldPrice={product.price_rounded + 200}
        size="text3"
        color="#808080"
        marginBottom={10}
        lineThrough={true}
        currency={product.currency}
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
