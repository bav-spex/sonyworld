import React from "react";
import "./../../SCSS/ProductType/_productThree.scss";
import product_01 from "./../../Assets/Product/product_01.png";
import black_down_arrow from "./../../Assets/Icon/black_down_arrow.svg";

import pickup_store from "./../../Assets/Icon/pickup_store.svg";
import { Link } from "react-router-dom";
import Heading1 from "./../Font/Heading1";
import RatingBlock from "./../MostSharedComponent/RatingBlock";
import Heading4 from "./../Font/Heading4";
import PickupStore from "./../MostSharedComponent/PickupStore";
import Price from "./../Font/Price";
import ShippingBlock from "./../MostSharedComponent/ShippingBlock";

function ProductThree({ product }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  console.log("===>", product.rating, product.totalRatings);
  return (
    <div className="row productThree__product__block">
      <div className="col-12 col-sm-3 productThree__product__left__block">
        <div className="productThree__product__image__block">
          <img
            src={product_01}
            alt=""
            className="productThree__product__image"
          />
        </div>
      </div>
      <div className="col-12 col-sm-6 productThree__product__middle__block">
        <img
          src={product.logo}
          alt=""
          className="productThree__product__company__logo"
        />
        {/* <p className="productThree__product__productName">{product.name}</p> */}
        <Heading4 text={product.name} marginBottom={10} />
        <RatingBlock
          size={22}
          rating={product.rating}
          totalRatings={product.totalRatings}
          fillColor="#DC3A1A"
          emptyColor="#C8C8C8"
        />
        <PickupStore delivery={product.delivery} title="Get it today" />
        <ShippingBlock shipment={product.delivery}/>
      </div>
      <div className="col-12 col-sm-3 productThree__product__right__block">
        <Price price={product.price} size="heading3" />
        <button className="productThree__addToPackage__button">
          Add To Package
        </button>
        <div className="productThree__compare__block">
          <input
            type="checkbox"
            className="productThree__compare__input__check"
            name="compare"
            // onChange={handleChange}
          />
          <p className="productThree__compare__text">Compare</p>
        </div>
      </div>
    </div>
  );
}

export default ProductThree;
