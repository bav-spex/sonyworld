import React, { useState, useRef, Component, useEffect } from "react";

import black_left_arrow from "./../assets/Icon/black_left_arrow.svg";
import black_right_arrow from "./../assets/Icon/black_right_arrow.svg";
import "./../SCSS/_newArrival.scss";
import ProductSeven from "./ProductType/ProductSeven";

import ProductTwo from "./ProductType/ProductTwo";
function SimilarProducts({
  productDetailPage,
  sectionTitle,
  carouselData,
  productType,
  containerClassName,
  handleChangeCartPopup
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
      document.querySelector(`.${containerClassName}`).clientWidth -
      100;
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
      <div
        className={
          !productDetailPage
            ? "container-fluid carousel__container"
            : "carousel__container"
        }
      >
        <div
          className={
            !productDetailPage
              ? "carousel__block"
              : "less__width__carousel__block"
          }
        >
          <p className="section__title">{sectionTitle}</p>
          <div className="arrow left__arrow" onClick={leftSide}>
            <img src={black_left_arrow} alt="" />
          </div>
          <div className="arrow right__arrow" onClick={rightSide}>
            <img src={black_right_arrow} alt="" />
          </div>
          {productType === "productTwo" ? (
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return (
                  <ProductTwo
                  handleChangeCartPopup={handleChangeCartPopup}
                    productDetailPage={productDetailPage}
                    key={product.id}
                    product={product}
                  />
                );
              })}
            </div>
          ) : productType === "productSeven" ? (
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return (
                  <ProductSeven
                  handleChangeCartPopup={handleChangeCartPopup}
                    productDetailPage={productDetailPage}
                    key={product.id}
                    product={product}
                  />
                );
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

export default SimilarProducts;
