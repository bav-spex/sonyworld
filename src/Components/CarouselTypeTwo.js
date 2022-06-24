import React, { useState, useRef, Component, useEffect } from "react";
import "./../SCSS/_carouselTypeTwo.scss";
import Carousel from "react-elastic-carousel";
import black_left_arrow from "./../assets/Icon/black_left_arrow.svg";
import black_right_arrow from "./../assets/Icon/black_right_arrow.svg";
import "./../SCSS/_carouselTypeTwo.scss";
import ProductOne from "./ProductType/ProductOne";
import ProductTwo from "./ProductType/ProductTwo";
import ProductFive from "./ProductType/ProductFive";

function CarouselTypeTwo({
  productDetailPage,
  sectionTitle,
  carouselData,
  containerClassName,
  productType,
}) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(`.${containerClassName}`).scrollLeft =
      document.querySelector(`.${containerClassName}`).scrollLeft -
      document.querySelector(`.${containerClassName}`).clientWidth +
      50;
    let scroll = document.querySelector(`.${containerClassName}`).scrollLeft;
  };
  const rightSide = (e) => {
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(`.${containerClassName}`).scrollLeft =
      document.querySelector(`.${containerClassName}`).scrollLeft +
      document.querySelector(`.${containerClassName}`).clientWidth -
      100;
  };

  return (
    <>
      <div className="container-fluid carouselTypeTwo__container">
        <p className="section__title">{sectionTitle}</p>
        <div className="carouselTypeTwo__block">
          <div className="arrow__block">
            <div className="arrow left__arrow" onClick={leftSide}>
              <img src={black_left_arrow} alt="" />
            </div>
            <div className="arrow right__arrow" onClick={rightSide}>
              <img src={black_right_arrow} alt="" />
            </div>
          </div>
          {/* {?:?:} */}
          {productType === "productOne" ? (
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return <ProductOne key={product.id} product={product} productDetailPage={productDetailPage}/>;
              })}
            </div>
          ) : productType === "productFive" ? (
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return <ProductFive key={product.id} product={product} />;
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default CarouselTypeTwo;
