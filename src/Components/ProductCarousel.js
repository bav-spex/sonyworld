import React, { useState, useEffect } from "react";
import "./../SCSS/_productCarousel.scss";

import product_carousal_01 from "./../Assets/ProductCarousal/product_carousal_01.png";
import product_carousal_02 from "./../Assets/ProductCarousal/product_carousal_02.png";
import product_carousal_03 from "./../Assets/ProductCarousal/product_carousal_03.png";
import product_carousal_04 from "./../Assets/ProductCarousal/product_carousal_04.png";
import product_carousal_05 from "./../Assets/ProductCarousal/product_carousal_05.png";
import carousel_up_arrow from "./../Assets/Icon/carousel_up_arrow.svg";
import carousel_down_arrow from "./../Assets/Icon/carousel_down_arrow.svg";

import facebook from "./../Assets/Icon/facebook.png";
import twitter from "./../Assets/Icon/twitter.png";
import messanger from "./../Assets/Icon/messanger.png";
import whatsapp from "./../Assets/Icon/whatsapp.png";
import pinterest from "./../Assets/Icon/pinterest.png";
const productDataJSON = [
  {
    id: 1,
    image: product_carousal_01,
  },
  {
    id: 2,
    image: product_carousal_02,
  },
  {
    id: 3,
    image: product_carousal_03,
  },
  {
    id: 4,
    image: product_carousal_04,
  },
  {
    id: 5,
    image: product_carousal_05,
  },
  {
    id: 6,
    image: product_carousal_01,
  },
  {
    id: 7,
    image: product_carousal_02,
  },
  {
    id: 8,
    image: product_carousal_03,
  },
  {
    id: 9,
    image: product_carousal_04,
  },
];
function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const [carousel, setcarousel] = useState(productDataJSON);

  useEffect(() => {
    if (index > carousel.length - 1) {
      let newIndex = 0;
      setIndex(newIndex);
    }
    if (index < 0) {
      let newIndex = carousel.length - 1;
      setIndex(newIndex);
    }
  }, [index, carousel]);

  const upSide = (e) => {
    e.preventDefault();
    document.querySelector(".carousel__dots__block").scrollTop =
      document.querySelector(".carousel__dots__block").scrollTop -
      document.querySelector(".carousel__dots__block").clientHeight -
      100;
    let scroll = document.querySelector(".carousel__dots__block").scrollLeft;
  };
  const downSide = (e) => {
    e.preventDefault();

    document.querySelector(".carousel__dots__block").scrollTop =
      document.querySelector(".carousel__dots__block").scrollTop +
      document.querySelector(".carousel__dots__block").clientHeight -
      100;
  };

  return (
    <div className="carousel__main__container">
      <div className="carousel__dots__main__block">
        <div className="carousel__dots__arrow__block">
          <div className="arrow__icon__block " onClick={upSide}>
            <img src={carousel_up_arrow} alt="" className="" />
          </div>
          <div className="arrow__icon__block " onClick={downSide}>
            <img src={carousel_down_arrow} alt="" className="" />
          </div>
        </div>
        <div className="carousel__dots__block">
          {carousel.map((ban, banIndex) => {
            return (
              <div
                key={ban.id}
                className={
                  ban.id === index + 1
                    ? "carousel__dot carousel__dotActive"
                    : "carousel__dot"
                }
                onClick={() => setIndex(banIndex)}
              >
                <img
                  src={ban.image}
                  alt=""
                  className="carousel__thumbnail__image"
                />
                <div className={ban.id === index + 1 ? "overlay  " : ""}></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="carousel__main__block">
        <div className="carousel__block">
          {carousel.map((ban, banIndex) => {
            let position = "carousel nextCarousel";
            if (banIndex === index) {
              position = "carousel activeCarousel";
            }
            if (
              banIndex === index - 1 ||
              (index === 0 && banIndex === carousel.length - 1)
            ) {
              position = "carousel prevCarousel";
            }
            return (
              <div className={position} key={ban.id}>
                <img className="carousel__image" src={ban.image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="pd__social__media__compare__block">
          <div className="pd__social__media__icon__block">
            <p className="pd__share__text">Share :</p>
            <img src={facebook} alt="" className="pd__social__media__icon" />
            <img src={twitter} alt="" className="pd__social__media__icon" />
            <img src={messanger} alt="" className="pd__social__media__icon" />
            <img src={whatsapp} alt="" className="pd__social__media__icon" />
            <img src={pinterest} alt="" className="pd__social__media__icon" />
          </div>
          <div className="pd__compare__block">
            <input
              type="checkbox"
              className="pd__compare__input__check"
              name="compare"
              // onChange={handleChange}
            />
            <p className="pd__compare__text">Compare</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
