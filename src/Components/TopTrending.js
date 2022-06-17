import React, { useState, useRef, Component, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import black_left_arrow from "./../Assets/Icon/black_left_arrow.svg";
import black_right_arrow from "./../Assets/Icon/black_right_arrow.svg";
import "./../SCSS/_newArrival.scss";
import ProductOne from "./ProductType/ProductOne";

function TopTrending({ sectionTitle, carouselData }) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(".top__trending__block").scrollLeft =
      document.querySelector(".top__trending__block").scrollLeft -
      document.querySelector(".top__trending__block").clientWidth -
      100;
    let scroll = document.querySelector(".top__trending__block").scrollLeft;
    // if (scroll == 0) {
    //   setDisableLeftArrow(true);
    // }
    // console.log(scroll);
  };
  const rightSide = (e) => {
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(".top__trending__block").scrollLeft =
      document.querySelector(".top__trending__block").scrollLeft +
      document.querySelector(".top__trending__block").clientWidth -
      100;
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     let scroll = document.querySelector(".top__trending__block").scrollLeft;
  //     let width = document.querySelector(".top__trending__block").clientWidth;
  //     console.log(document.querySelector(".top__trending__block").clientWidth);
  //     console.log("scrollLeft", scroll ,width);
  //     if (scroll ) {
  //       setDisableLeftArrow(true);
  //       setDisableRightArrow(false);
  //     } else if (scroll) {
  //       setDisableLeftArrow(false);
  //       setDisableRightArrow(true);
  //     }
  //   }, 500);
  // }, [arrowState]);
  return (
    <>
      <div className="container-fluid carousel__container">
        <div className="carousel__block">
          <p className="section__title">{sectionTitle}</p>
          <div className="arrow left__arrow" onClick={leftSide}>
            <img src={black_left_arrow} alt="" />
          </div>
          <div className="arrow right__arrow" onClick={rightSide}>
            <img src={black_right_arrow} alt="" />
          </div>
          <div className="main__top__trending__block">
            <div className="top__trending__block">
              {carouselData.map((product, productIndex) => {
                return <ProductOne key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTrending;

// <div className="top__trending__block">
// <div className="arrow left__arrow">
//   <img src={leftarrow} alt="" />
// </div>
// <Carousel
//   breakPoints={breakPoints}
//   enableAutoPlay={true}
//   autoPlaySpeed={2500}
//   enableMouseSwipe={false}
//   ref={carouselRef}
// >
//   {carouselData.map((product, productIndex) => {
//     return (
//       <div key={product.id} className="product__block">
//         <div className="product__image__block">

//         <img src={product.image} alt="" className="product__image" />
//         </div>
//         <div className="product__name__favourite">
//           <p className="product__name">{product.productName}</p>
//           <img
//             onMouseEnter={() => setIsFavouriteHover(true)}
//             onClick={handleFavourite}
//             onMouseLeave={() => setIsFavouriteHover(false)}
//             className={
//               !isFavourite
//                 ? "product__favourite__icon"
//                 : "product__favourite__icon__disable"
//             }
//             src={
//               isFavouriteHover ? fulfill_favourite : empty_favourite
//             }
//             alt=""
//           />
//           <img
//             onClick={handleFavourite}
//             className={
//               isFavourite
//                 ? "product__favourite__icon"
//                 : "product__favourite__icon__disable"
//             }
//             src={fulfill_favourite}
//             alt=""
//           />
//         </div>
//         <div className="rating__block">{product.rating}</div>
//       </div>
//     );
//   })}
// </Carousel>
// <div className="arrow right__arrow">
//   {/* <img src={rightarrow} alt="" /> */}
// </div>
// </div>
