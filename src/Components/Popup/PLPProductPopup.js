import React, { useState } from "react";
import "./../../SCSS/Popup/_plpProductPopup.scss";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import product_01 from "./../../assets/Product/product_01.jpg";
import product_02 from "./../../assets/Product/product_02.jpg";
import product_03 from "./../../assets/Product/product_03.jpg";
import product_04 from "./../../assets/Product/product_04.jpg";
import AwesomeSlider from "react-awesome-slider";
import Heading6 from "../Font/Heading6";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import RatingBlock from "../MostSharedComponent/RatingBlock";
function PLPProductPopup({ product, closeProductPopup }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
  return (
    <div className="row plp__product__popup__block">
      <div className="plp__product__popup__header">
        <img
          onClick={() => closeProductPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="col-4 plpProduct__popup__left__block">
        <div className="productNine__image__slider">
          <AwesomeSlider transitionDelay={0.2}>
            {[product_01, product_02, product_03, product_04].map(
              (images, index) => (
                <div className="_product__container_image">
                  <img src={images} alt={images + index} />
                </div>
              )
            )}
          </AwesomeSlider>
        </div>
      </div>
      <div className="col-8 plpProduct__popup__right__block">
        <Heading6 text={product.productName} marginBottom={10} />
        <div className="pd__category__favourite__button__block">
          <button className="pd__category__button">ALL TV's</button>
          <button className="pd__favourite__button">
            <img
              onMouseEnter={() => setIsFavouriteHover(true)}
              onClick={handleFavourite}
              onMouseLeave={() => setIsFavouriteHover(false)}
              className={
                !isFavourite
                  ? "pd__favourite__icon"
                  : "pd__favourite__icon__disable"
              }
              src={isFavouriteHover ? fulfill_favourite : empty_favourite}
              alt=""
            />
            <img
              onClick={handleFavourite}
              className={
                isFavourite
                  ? "pd__favourite__icon"
                  : "pd__favourite__icon__disable"
              }
              src={fulfill_favourite}
              alt=""
            />
          </button>
        </div>
        <OldPrice
          oldPrice={product.oldPrice}
          size="text2"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
        />
        <Price
          price={product.price}
          marginLeft={5}
          marginBottom={10}
          size="heading4"
          span={true}
        />

        <RatingBlock
          rating={product.rating}
          totalRatings={product.totalRatings}
        />
        <div className="size__button__block">
          {product.size.map((size, sizeIndex) => {
            return (
              <button
                key={size.id}
                onClick={() => sizeButtonClick(sizeIndex, size.cm, size.inch)}
                className={
                  sizeButtonIndex === sizeIndex
                    ? "size__button__active"
                    : "size__button"
                }
              >{`${size.cm} cm (${size.inch})`}</button>
            );
          })}
        </div>
        <div className="addToCart__button">
          <img src={shopping_cart} alt="" className="addToCart__icon" />
          Add To Cart
        </div>
      </div>
    </div>
  );
}

export default PLPProductPopup;
