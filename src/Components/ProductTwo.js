import React, { useState } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../Assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../Assets/Icon/fulfill_favourite.svg";
import productTwo_quality_icon from "./../Assets/Product/productTwo_quality_icon.png";
import "./../SCSS/_productTwo.scss";

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

      <p className="productTwo__name">{product.productName}</p>
      <p className="productTwo__series">Z8H SERIES</p>

      <div className="rating__block">
        <Rating
          // onClick={handleRating}
          size={22}
          fillColor="#303030"
          emptyColor="#C8C8C8"
          readonly={true}
          ratingValue={(product.rating * 100) / 5} /* Available Props */
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
        <p className="old__prize">{`SAR${product.oldPrice
          .toString()
          .slice(0, -3)},${product.oldPrice.toString().slice(-3)}.00`}</p>
        <p className="new__prize">{`SAR${product.price
          .toString()
          .slice(0, -3)},${product.price.toString().slice(-3)}.00`}</p>
      </div>

      <div className="addToCart__button">ADD TO CART</div>
    </div>
  );
}

export default ProductTwo;
