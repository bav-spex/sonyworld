import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../SCSS/MobileView/_mobileHomeCategoryBannerProductsBlock.scss";
import feature_product_04 from "./../../assets/FeatureProduct/feature_product_04.png";
import feature_product_03 from "./../../assets/FeatureProduct/feature_product_04.png";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import categoryImg from "./../../assets/MobilePages/MobileHome/categoryhome.png";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping-cart-red.svg";
import Heading7 from "../Font/Heading7";
function MobileHomeCategoryBannerProductsBlock({ featureProductsData }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="mobile__home__category__banner__product__container my-3 py-2 container-fluid">
      <div className="mobile__home__category__banner__product__block mb-4">
        <img
          className="mh__cbp__banner"
          src={categoryImg}
          alt="category image"
          width="100%"
        />
      </div>
      <div className="row mh__cbp__row">
        <Link
          to={`products/${featureProductsData[1].sku.replace(/[/]/g, "%2F")}`}
          className="col-12 col-sm-6 mh__cbp__product"
        >
          <div className="inner__mh__cbp__product">
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
            <div className="second__mh__cbp__product__image__block">
              <img
                src={featureProductsData[1]?.baseImage}
                alt=""
                className="second__md__product__image"
              />
            </div>
            <Heading7 marginBottom={10} text={featureProductsData[1]?.name} />
            <div className="md__product__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
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
              price={1699}
              marginLeft={5}
              marginBottom={10}
              size="heading6"
              span={true}
              currency={featureProductsData[1]?.currency}
            />
            <div className="text-end cart_end_icon">
              <Link to="#" className="d-inline-block">
                <img src={shopping_cart} alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
        <Link
          to={`products/${featureProductsData[1].sku.replace(/[/]/g, "%2F")}`}
          className="col-12 col-sm-6 mh__cbp__product"
        >
          <div className="inner__mh__cbp__product">
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
            <div className="second__mh__cbp__product__image__block">
              <img
                src={featureProductsData[1]?.baseImage}
                alt=""
                className="second__md__product__image"
              />
            </div>
            <Heading7 marginBottom={10} text={featureProductsData[1]?.name} />
            <div className="md__product__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
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
              price={1699}
              marginLeft={5}
              marginBottom={10}
              size="heading6"
              span={true}
              currency={featureProductsData[1]?.currency}
            />
            <div className="text-end cart_end_icon">
              <Link to="#" className="d-inline-block">
                <img src={shopping_cart} alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
        <Link
          to={`products/${featureProductsData[1].sku.replace(/[/]/g, "%2F")}`}
          className="col-12 col-sm-6 mh__cbp__product"
        >
          <div className="inner__mh__cbp__product">
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
            <div className="second__mh__cbp__product__image__block">
              <img
                src={featureProductsData[1]?.baseImage}
                alt=""
                className="second__md__product__image"
              />
            </div>
            <Heading7 marginBottom={10} text={featureProductsData[1]?.name} />
            <div className="md__product__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
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
              price={1699}
              marginLeft={5}
              marginBottom={10}
              size="heading6"
              span={true}
              currency={featureProductsData[1]?.currency}
            />
            <div className="text-end cart_end_icon">
              <Link to="#" className="d-inline-block">
                <img src={shopping_cart} alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
        <Link
          to={`products/${featureProductsData[1].sku.replace(/[/]/g, "%2F")}`}
          className="col-12 col-sm-6 mh__cbp__product"
        >
          <div className="inner__mh__cbp__product">
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
            <div className="second__mh__cbp__product__image__block">
              <img
                src={featureProductsData[1]?.baseImage}
                alt=""
                className="second__md__product__image"
              />
            </div>
            <Heading7 marginBottom={10} text={featureProductsData[1]?.name} />
            <div className="md__product__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
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
              price={1699}
              marginLeft={5}
              marginBottom={10}
              size="heading6"
              span={true}
              currency={featureProductsData[1]?.currency}
            />
            <div className="text-end cart_end_icon">
              <Link to="#" className="d-inline-block">
                <img src={shopping_cart} alt="cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileHomeCategoryBannerProductsBlock;
