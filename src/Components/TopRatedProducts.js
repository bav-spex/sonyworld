import React, {useState} from "react";
import { Rating } from "react-simple-star-rating";
import "./../SCSS/_topRatedProducts.scss";
import "./../SCSS/_newArrival.scss";
import ProductOne from "./../Components/ProductOne.js"
import left_arrow from "./../Assets/Icon/left_arrow.svg";
import right_arrow from "./../Assets/Icon/right_arrow.svg";

function TopRatedProducts({ productData }) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(".toprated__slider__block").scrollLeft =
      document.querySelector(".toprated__slider__block").scrollLeft -
      document.querySelector(".toprated__slider__block").clientWidth -
      100;
    let scroll = document.querySelector(".toprated__slider__block").scrollLeft;
    // if (scroll == 0) {
    //   setDisableLeftArrow(true);
    // }
    // console.log(scroll);
  };
  const rightSide = (e) => {
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(".toprated__slider__block").scrollLeft =
      document.querySelector(".toprated__slider__block").scrollLeft +
      document.querySelector(".toprated__slider__block").clientWidth -
      100;
  };

  return (
    <>
   
    <div className="container-fluid topRatedProducts__container mobile__responsive__toprated__container">
      <div className="topRatedproduct__block">
        <p className="section__title">Top Rated Products</p>
        <div className="row topRatedproduct__firstRow">
          {productData.slice(0, 4).map((product, productIndex) => {
            return (
              <div key={product.id}  className="col-3 topRatedproduct__first__block">
                <div className="topRatedproduct__image__block">
                  <img src={product.image} alt="" className="topRatedproduct__image" />
                </div>
                <p className="topRatedproduct__name">{product.productName}</p>
                <div className="rating__block">
                  <Rating
                    // onClick={handleRating}
                    size={15}
                    fillColor="#FCC153"
                    emptyColor="#C8C8C8"
                    readonly={true}
                    ratingValue={
                      (product.rating * 100) / 5
                    } /* Available Props */
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="row topRatedproduct__secondRow">
          {productData.slice(4, 8).map((product, productIndex) => {
            return (
              <div key={product.id} className="col-3 topRatedproduct__second__block">
                <div className="topRatedproduct__image__block">
                  <img src={product.image} alt="" className="topRatedproduct__image" />
                </div>
                <p className="topRatedproduct__name">{product.productName}</p>
                <div className="rating__block">
                  <Rating
                    // onClick={handleRating}
                    size={15}
                    fillColor="#FCC153"
                    emptyColor="#C8C8C8"
                    readonly={true}
                    ratingValue={
                      (product.rating * 100) / 5
                    } /* Available Props */
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="container-fluid toprated__carousal__container mobile__responsive__toprated__container__disable">
        <div className="toprated__carousal__block">
          <p className="section__title">Top Rated Products</p>
          <div className="arrow__block">
            <div
            className="arrow left__arrow"
              // className={
              //   disableLeftArrow
              //     ? "arrow arrow__disable left__arrow"
              //     : "arrow left__arrow"
              // }
              onClick={leftSide}
            >
              <img src={left_arrow} alt="" />
            </div>
            <div
              className=
                
                 "arrow right__arrow"
              
              // className={
              //   disableRightArrow
              //     ? "arrow arrow__disable right__arrow"
              //     : "arrow right__arrow"
              // }
              onClick={rightSide}
            >
              <img src={right_arrow} alt="" />
            </div>
          </div>
          <div className="toprated__slider__block">
            {productData.map((product, productIndex) => {
              return <ProductOne key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRatedProducts;
