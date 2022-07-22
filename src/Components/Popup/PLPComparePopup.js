import React from "react";
import "./../../SCSS/Popup/_plpComparePopup.scss";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import compare_white from "./../../assets/Icon/compare_white.svg";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";
import { Link } from "react-router-dom";
function PLPComparePopup({ closeComparePopup, compareData }) {
  return (
    <div className="plp__compare__popup__block">
      <div className="plp__compare__popup__header">
        <Heading3 text="Compare Products (2/3)" color="#000000" />
        <img
          onClick={() => closeComparePopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="plp__compare__popup__content">
        {compareData.map((product, productIndex) => {
          return (
            <div key={productIndex} className="compare__product__block">
              <div className="compare__product__header">
                <img
                  // onClick={() => closeComparePopup()}
                  src={cancel_grey}
                  alt="cancel"
                  className="cancel__button"
                />
              </div>
              <div className="compare__product__content">
                <img src={product.image} alt="" />
                <Heading7 text={product.productName} marginLeft={20} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="plp__compare__popup__button__block">
        <Link to="/products/compare"  onClick={() => closeComparePopup()}>
          <button className="compare__button">
            <img
              // onClick={() => closeComparePopup()}
              src={compare_white}
              alt="cancel"
              className="compare__button__icon"
            />
            COMPARE
          </button>
        </Link>
        <Link to="/products" onClick={() => closeComparePopup()}>
          <button className="removeAll__button"> Remove All</button>
        </Link>
      </div>
    </div>
  );
}

export default PLPComparePopup;
