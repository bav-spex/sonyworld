import React from "react";
import "./../SCSS/_productThree.scss";
import product_01 from "./../Assets/Product/product_01.png";
import black_down_arrow from "./../Assets/Icon/black_down_arrow.svg";

import pickup_store from "./../Assets/Icon/pickup_store.svg";
import { Link } from "react-router-dom";
import Heading1 from "./Font/Heading1";
import RatingBlock from "./MostSharedComponent/RatingBlock"

function ProductThree({ product }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  console.log("===>",product.rating, product.totalRatings);
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
        <Heading1 text={product.name}/>


        <RatingBlock size={22} rating={product.rating} totalRatings={product.totalRatings} fillColor="#DC3A1A" emptyColor="#C8C8C8"   />

        <div className="productThree__pickup__block">
          <p className="productThree__block__title">Get it Today</p>
          {product.delivery.pickupStore.map((store, storeIndex) => {
            return (
              <div key={store.id} className="productThree__store__block">
                <img
                  src={pickup_store}
                  alt=""
                  className="productThree__store__icon"
                />
                <div className="pickup__text__block">
                  <p className="productThree__pickup__text">
                    <span className="productThree__pickup__only__text">
                      Pickup:
                    </span>
                    {` ${store.pickupText}`}
                  </p>
                  {storeIndex === 0 ? (
                    <Link
                      className="productThree__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12 col-sm-3 productThree__product__right__block">
        <p className="productThree__product__total__price">
          {product.price.toString().length > 3
            ? `SAR${product.price.toString().slice(0, -3)},${product.price
                .toString()
                .slice(-3)}.00`
            : `SAR${product.price.toString().slice(-3)}.00`}
        </p>
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
