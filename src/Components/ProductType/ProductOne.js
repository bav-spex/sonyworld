import React, { useState } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import "./../../SCSS/ProductType/_productOne.scss";
import Heading5 from "./../Font/Heading5";
import Heading6 from "./../Font/Heading6";
import Heading7 from "./../Font/Heading7";
import Price from "./../Font/Price";
import OldPrice from "./../Font/OldPrice";
import RatingBlock from "../MostSharedComponent/RatingBlock";

function ProductOne({ productDetailPage, product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  // console.log(product);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleRating = (score) => {
    setRating(score);
  };
  // console.log(rating);
  return (
    <div
      key={product.id}
      className={
        !productDetailPage ? "productOne__block" : "pd__productOne__block"
      }
    >
      <div className="productOne__image__block">
        <img src={product.image} alt="" className="productOne__image" />
      </div>
      <div className="productOne__name__favourite">
        <Heading7 text={product.productName} />
        <img
          onMouseEnter={() => setIsFavouriteHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsFavouriteHover(false)}
          className={
            !isFavourite
              ? "productOne__favourite__icon"
              : "productOne__favourite__icon__disable"
          }
          src={isFavouriteHover ? fulfill_favourite : empty_favourite}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isFavourite
              ? "productOne__favourite__icon"
              : "productOne__favourite__icon__disable"
          }
          src={fulfill_favourite}
          alt=""
        />
      </div>
      <RatingBlock rating={product.rating} totalRatings={product.totalRatings} />

      <div className="prize__block">
      <OldPrice
          oldPrice={product.oldPrice}
          size="text3"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
        />
        <Price price={product.price} marginLeft={5} size="heading6" span={true} />
      </div>
      {productDetailPage ? (
        <div className="addToCart__button">ADD TO CART</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductOne;
