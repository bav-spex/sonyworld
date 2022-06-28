import React, { useState, useRef, Component, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import black_left_arrow from "./../assets/Icon/black_left_arrow.svg";
import black_right_arrow from "./../assets/Icon/black_right_arrow.svg";
import "./../SCSS/_newArrival.scss";
import Heading1 from "./Font/Heading1";
import ProductOne from "./ProductType/ProductOne";

function ProductContainer({
  productDetailPage,
  sectionTitle,
  carouselData,
  containerClassName,
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
            !productDetailPage ? "pc__block" : "less__width__carousel__block"
          }
        >
          <p className="section__title">{sectionTitle}</p>
          <div className="arrow left__arrow" onClick={leftSide}>
            <img src={black_left_arrow} alt="" />
          </div>
          <div className="arrow right__arrow" onClick={rightSide}>
            <img src={black_right_arrow} alt="" />
          </div>
          <div className="main__product__container__block">
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return (
                  <ProductOne
                    productDetailPage={productDetailPage}
                    key={product.id}
                    product={product}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
