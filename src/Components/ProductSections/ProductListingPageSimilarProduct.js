import React, { useState, useRef, Component, useEffect } from "react";

import black_left_arrow from "./../../assets/Icon/black_left_arrow.svg";
import black_right_arrow from "./../../assets/Icon/black_right_arrow.svg";
import "./../../SCSS/_newArrival.scss";
import "./../../SCSS/AllProducts/_productListSimilarProduct.scss";


import OldPrice from "./../Font/OldPrice";
import Price from "./../Font/Price";
import Heading6 from "./../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";

function ProductListingPageSimilarProduct({
  productDetailPage,
  sectionTitle,
  carouselData,
  productType,
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
            !productDetailPage
              ? "carousel__block"
              : "less__width__carousel__block"
          }
        >
          <p className="section__title">You Can Also Purchase</p>
          <div className="arrow left__arrow" onClick={leftSide}>
            <img src={black_left_arrow} alt="" />
          </div>
          <div className="arrow right__arrow" onClick={rightSide}>
            <img src={black_right_arrow} alt="" />
          </div>
          <div className="productList__similar__product__container">
            {carouselData.map((product) => {
              return (
                <div className="productListPage__similar__product__card">
                  <div className="productListPage__similar__product__header__block">
                    <div className="productListPage__similar__product__image__block">
                      <img
                        src={product.image}
                        alt=""
                        className="productList__similar__product__image"
                      />
                    </div>
                  </div>
                  <p className="productList__similar__product__name">
                    <Heading6 text={product.productName} marginBottom={10} />
                  </p>
                  <div className="productList__similar__product__prize__block">
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
                  <div className="productList__similar__product__rating__block">
                    <RatingBlock
                      rating={product.rating}
                      totalRatings={product.totalRatings}
                    />
                  </div>

                  <div className="productList__similar__product__addToCart__button">
                    <img
                      src={shopping_cart}
                      alt=""
                      className="productList__similar__product__addToCart__icon"
                    />
                    Add To Cart
                  </div>
                </div>
              );
            })}
          </div>
          {/* {productType === "productTwo" ? (
            <div className={containerClassName}>
              {carouselData.map((product, productIndex) => {
                return (
                  <ProductTwo
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
                    productDetailPage={productDetailPage}
                    key={product.id}
                    product={product}
                  />
                );
              })}
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </>
  );
}

export default ProductListingPageSimilarProduct;
