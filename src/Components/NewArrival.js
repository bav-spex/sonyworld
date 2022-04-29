import React, { useState, useRef, Component, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import left_arrow from "./../Assets/Icon/left_arrow.svg";
import right_arrow from "./../Assets/Icon/right_arrow.svg";
import "./../SCSS/_newArrival.scss";
import ProductOne from "./ProductOne";

function NewArrival({ sectionTitle, carouselData }) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(".new__arrival__block").scrollLeft =
      document.querySelector(".new__arrival__block").scrollLeft -
      document.querySelector(".new__arrival__block").clientWidth -
      100;
    let scroll = document.querySelector(".new__arrival__block").scrollLeft;
  };
  const rightSide = (e) => {
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(".new__arrival__block").scrollLeft =
      document.querySelector(".new__arrival__block").scrollLeft +
      document.querySelector(".new__arrival__block").clientWidth -
      100;
  };

  return (
    <>
      <div className="container-fluid carousel__container">
        <div className="carousel__block">
          <p className="section__title">{sectionTitle}</p>
          <div className="arrow__block">
            <div className="arrow left__arrow" onClick={leftSide}>
              <img src={left_arrow} alt="" />
            </div>
            <div className="arrow right__arrow" onClick={rightSide}>
              <img src={right_arrow} alt="" />
            </div>
          </div>
          <div className="new__arrival__block">
            {carouselData.map((product, productIndex) => {
              return <ProductOne key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
