import React from "react";
import Heading6 from "../Font/Heading6";
import "./../../SCSS/ProductType/_productFive.scss"
function ProductFive({ product }) {
  return (
    <div className="col-3 productFive__block">
      <div className="productFive__image__block">
        <img
          src={product.baseImage}
          alt="product-image"
          className="productFive__image"
        />
      </div>
      <Heading6 text={`${product.name.slice(0,20)}...`} textAlign="center"></Heading6>
    </div>
  );
}

export default ProductFive;
