import React, { useState } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import "./../../SCSS/ProductType/_productTwo.scss";
import Heading7 from "./../Font/Heading7";
import Text4 from "./../Font/Text4";
import OldPrice from "./../Font/OldPrice";
import Price from "./../Font/Price";
import Heading6 from "./../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";

function ProductTwo({ productDetailPage, product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleRating = (score) => {
    setRating(score);
  };

  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
  return (
    <div key={product.id} className="productTwo__block">
      <div className="productTwo__header__block">
        <div className="productTwo__quality__favourite__block">
          <img
            src={productTwo_quality_icon}
            alt=""
            className="productTwo__quality__icon"
          />
          <img
            onMouseEnter={() => setIsFavouriteHover(true)}
            onClick={handleFavourite}
            onMouseLeave={() => setIsFavouriteHover(false)}
            className={
              !isFavourite
                ? "productTwo__favourite__icon"
                : "productTwo__favourite__icon__disable"
            }
            src={isFavouriteHover ? fulfill_favourite : empty_favourite}
            alt=""
          />
          <img
            onClick={handleFavourite}
            className={
              isFavourite
                ? "productTwo__favourite__icon"
                : "productTwo__favourite__icon__disable"
            }
            src={fulfill_favourite}
            alt=""
          />
        </div>
        <div className="productTwo__image__block">
          <img src={product.image} alt="" className="productTwo__image" />
        </div>
        <div className="productTwo__compare__block">
          <input
            type="checkbox"
            className="productTwo__compare__input__check"
            name="compare"
            // onChange={handleChange}
          />
          <p className="productTwo__compare__text">Select to Compare</p>
        </div>
      </div>
      <p className="productTwo__name">
        <Heading6 text={product.productName} marginBottom={10} />
      </p>
      <Text4 text="Z8H SERIES" color="#808080" marginBottom={10} />
      <div className="rating__block">
        <RatingBlock
          rating={product.rating}
          totalRatings={product.totalRatings}
         
        />
      </div>
      <p className="productTwo__series">Model and Price</p>
      <div className="productTwo__size__button__block">
        {product.size.map((size, sizeIndex) => {
          return (
            <button
              key={size.id}
              onClick={() => sizeButtonClick(sizeIndex, size.cm, size.inch)}
              className={
                sizeButtonIndex === sizeIndex
                  ? "productTwo__size__button__active"
                  : "productTwo__size__button"
              }
            >{`${size.cm} cm (${size.inch})`}</button>
          );
        })}
      </div>
      <div className="prize__block">
        <OldPrice
          oldPrice={product.oldPrice}
          size="text3"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
        />
        <Price
          price={product.price}
          marginLeft={5}
          marginBottom={10}
          size="heading6"
          span={true}
        />
      </div>
      <div className="addToCart__button">
       <img
         src={shopping_cart}
         alt=""
         className="addToCart__icon"
       />
       Add To Cart
     </div>
    </div>
  );
}

export default ProductTwo;
