import React from "react";
import Heading3 from "../Font/Heading3";
import "./../../SCSS/ProductComparison/_productHighlights.scss";

const ProductHighlights = ({ ProductHighlightsData }) => {
  return (
    <div className="product__highlight__container">
      {ProductHighlightsData.map((ProductHighlightsData) => {
        return (
          <div className="product__highlight__block">
            <div className="product__highlight__image__block">
              <img
                className="product__highlight__image"
                src={ProductHighlightsData.image}
                alt=""
              />
            </div>
            <Heading3 text={ProductHighlightsData.title} />
            <p>{ProductHighlightsData.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductHighlights;
