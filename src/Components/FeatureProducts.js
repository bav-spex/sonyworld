import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../SCSS/_featureProducts.scss";
import { useDispatch } from "react-redux";

import { addToCart } from "./../services/cart.service";
import { loadCartData } from "./../redux/appAction";
import * as services from "./../services/services";

import feature_product_01 from "./../assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../assets/FeatureProduct/feature_product_05.png";
import Heading5 from "./Font/Heading5";
import Heading7 from "./Font/Heading7";
import RatingBlock from "./MostSharedComponent/RatingBlock";
import PriceBlock from "./MostSharedComponent/PriceBlock";
import OldPrice from "./Font/OldPrice";
import Price from "./Font/Price";

import empty_favourite from "./../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../assets/Icon/shopping-cart-red.svg";

function FeatureProducts({ featureProductsData,handleChangeCartPopup }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const dispatch = useDispatch();

  const AddProductToCart = (sku) => {
    console.log(sku, "product in product details >>>");

    const data = {
      items: [
        {
          sku: sku,
          qty: 1,
        },
      ],
    };

    addToCart(data)
      .then((res) => {
        console.log(res, "res>>>");
        dispatch(loadCartData());
        handleChangeCartPopup(true)
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };

  return (
    <div className="container-fluid feature__category__container d-none d-lg-block">
      <div className=" feature__category__block">
        <p className="section__title d-none d-lg-block">Televisions</p>
        <p className="section__title d-block d-lg-none py-3">
          Deals of the day
        </p>
        <div className="row inner__feature__category__block">
          <Link
            className="first__feature__category__block"
            to={`products/${featureProductsData[0].sku.replace(/[/]/g, "%2F")}`}
          >
            {/* <div className="deal__of__the__day">
                <p className="inner__text">DEALS OF THE DAY</p>
              </div> */}

            <div className="first__feature__category">
              {/* <div className="deal__of__the__day">
                <p className="inner__text">DEALS OF THE DAY</p>
              </div> */}
              {/* <div></div> */}

              <div className="deal__of__day__container">
                <div className="rectangleLeft"></div>
                <div className="upper__rectangle__block">
                  <div className="rectangle">
                    <span>Deal of the day</span>{" "}
                  </div>
                  <div className="triangle-right"></div>
                </div>
              </div>
              <div className="first__feature__category__image__block">
                <span className="fav_icon d-block d-lg-none">
                  <img
                    onMouseEnter={() => setIsFavouriteHover(true)}
                    onClick={handleFavourite}
                    onMouseLeave={() => setIsFavouriteHover(false)}
                    className={
                      !isFavourite
                        ? "productOne__favourite__icon"
                        : "productOne__favourite__icon__disable"
                    }
                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                    alt=""
                  />
                  <img
                    onClick={handleFavourite}
                    className={
                      isFavourite
                        ? "productOne__favourite__icon"
                        : "productOne__favourite__icon__disable"
                    }
                    src={fulfill_favourite}
                    alt=""
                  />
                </span>
                <img
                  src={featureProductsData[0]?.baseImage}
                  alt=""
                  className="first__feature__category__image"
                />
              </div>
              <div className="heading__inner__text">
                <Heading7
                  marginBottom={10}
                  text={featureProductsData[0]?.name}
                />
                <RatingBlock rating={6} totalRatings={2222} />
                <OldPrice
                  oldPrice={featureProductsData[0]?.price_rounded + 200}
                  size="text3"
                  color="#c8c8c8"
                  marginBottom={10}
                  lineThrough={true}
                  span={true}
                  currency={featureProductsData[0]?.currency}
                />
                <Price
                  price={featureProductsData[0]?.price_rounded}
                  marginLeft={5}
                  marginBottom={10}
                  size="heading6"
                  span={true}
                  currency={featureProductsData[0]?.currency}
                />
              </div>
            </div>
          </Link>
          <div className=" second__feature__category__block">
            <div className="feature__category">
              <span className="fav_icon d-block d-lg-none">
                <img
                  onMouseEnter={() => setIsFavouriteHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsFavouriteHover(false)}
                  className={
                    !isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={fulfill_favourite}
                  alt=""
                />
              </span>
              <Link
                to={`/products/${featureProductsData[1].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
              >
                <div className="second__feature__category__image__block">
                  <img
                    src={featureProductsData[1]?.baseImage}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
              </Link>
              <Link
                to={`/products/${featureProductsData[1].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
                className="featureProduct__name"
              >
                {featureProductsData[1]?.name}
              </Link>
              {/* <Heading7 marginBottom={0} text={featureProductsData[4]?.name} /> */}
              <div className="featureProduct__rating__block">
                <RatingBlock rating={6} totalRatings={2222} />
              </div>
              <OldPrice
                oldPrice={featureProductsData[1]?.price_rounded + 200}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
                currency={featureProductsData[1]?.currency}
              />
              <Price
                price={featureProductsData[1]?.price_rounded}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
                currency={featureProductsData[1]?.currency}
              />
              <div
                className="text-end cart_end_icon"
                onClick={() => AddProductToCart(featureProductsData[1].sku)}
              >
                
                  <img src={shopping_cart} alt="cart" />
                
              </div>
            </div>
            <div className="feature__category">
              <span className="fav_icon d-block d-lg-none">
                <img
                  onMouseEnter={() => setIsFavouriteHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsFavouriteHover(false)}
                  className={
                    !isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={fulfill_favourite}
                  alt=""
                />
              </span>
              <Link
                to={`/products/${featureProductsData[2].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
              >
                <div className="second__feature__category__image__block">
                  <img
                    src={featureProductsData[2]?.baseImage}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
              </Link>
              <Link
                to={`/products/${featureProductsData[2].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
                className="featureProduct__name"
              >
                {featureProductsData[2]?.name}
              </Link>
              {/* <Heading7 marginBottom={0} text={featureProductsData[2]?.name} /> */}
              <div className="featureProduct__rating__block">
                <RatingBlock rating={6} totalRatings={2222} />
              </div>
              <OldPrice
                oldPrice={featureProductsData[2]?.price_rounded + 200}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
                currency={featureProductsData[2]?.currency}
              />
              <Price
                price={featureProductsData[2]?.price_rounded}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
                currency={featureProductsData[2]?.currency}
              />
              <div className="text-end cart_end_icon"
                onClick={() => AddProductToCart(featureProductsData[2].sku)}
              
              >
                
                  <img src={shopping_cart} alt="cart" />
              
              </div>
            </div>
          </div>
          <div className=" second__feature__category__block">
            <div
              to={`products/${featureProductsData[3].sku}`}
              className="feature__category first__in__column"
            >
              <span className="fav_icon d-block d-lg-none">
                <img
                  onMouseEnter={() => setIsFavouriteHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsFavouriteHover(false)}
                  className={
                    !isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={fulfill_favourite}
                  alt=""
                />
              </span>
              <Link
                to={`/products/${featureProductsData[3].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
              >
                <div className="second__feature__category__image__block">
                  <img
                    src={featureProductsData[3]?.baseImage}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
              </Link>
              <Link
                to={`/products/${featureProductsData[3].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
                className="featureProduct__name"
              >
                {featureProductsData[3]?.name}
              </Link>
              {/* <Heading7 marginBottom={0} text={featureProductsData[3]?.name} /> */}
              <div className="featureProduct__rating__block">
                <RatingBlock rating={6} totalRatings={2222} />
              </div>
              <OldPrice
                oldPrice={featureProductsData[3]?.price_rounded + 200}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
                currency={featureProductsData[3]?.currency}
              />
              <Price
                price={featureProductsData[3]?.price_rounded}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
                currency={featureProductsData[3]?.currency}
              />
              <div className="text-end cart_end_icon"
                onClick={() => AddProductToCart(featureProductsData[3].sku)}
              
              >
               
                  <img src={shopping_cart} alt="cart" />
                
              </div>
            </div>
            <div className="feature__category">
              <span className="fav_icon d-block d-lg-none">
                <img
                  onMouseEnter={() => setIsFavouriteHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsFavouriteHover(false)}
                  className={
                    !isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isFavourite
                      ? "productOne__favourite__icon"
                      : "productOne__favourite__icon__disable"
                  }
                  src={fulfill_favourite}
                  alt=""
                />
              </span>
              <Link
                to={`/products/${featureProductsData[4].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
              >
                <div className="second__feature__category__image__block">
                  <img
                    src={featureProductsData[4]?.baseImage}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
              </Link>
              <Link
                to={`/products/${featureProductsData[4].sku.replace(
                  /[/]/g,
                  "%2F"
                )}`}
                className="featureProduct__name"
              >
                {featureProductsData[4]?.name}
              </Link>
              {/* <Heading7 marginBottom={0} text={featureProductsData[4]?.name} /> */}
              <div className="featureProduct__rating__block">
                <RatingBlock rating={6} totalRatings={2222} />
              </div>
              <OldPrice
                oldPrice={featureProductsData[4]?.price_rounded + 200}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
                currency={featureProductsData[4]?.currency}
              />
              <Price
                price={featureProductsData[3]?.price_rounded}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
                currency={featureProductsData[4]?.currency}
              />
              <div className="text-end cart_end_icon"
                onClick={() => AddProductToCart(featureProductsData[4].sku)}
              
              >
                
                  <img src={shopping_cart} alt="cart" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
