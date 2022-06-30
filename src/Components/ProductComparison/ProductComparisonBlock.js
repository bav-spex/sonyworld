import React from "react";
import { Link } from "react-router-dom";

import "./../../SCSS/ProductComparison/_productComparisonBlock.scss";

import shipping from "./../../assets/Icon/shipping.svg";
import offer_tag from "./../../assets/Icon/offer_tag.svg";
import small_wrench from "./../../assets/Icon/small_wrench.svg";

import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import OldPrice from "../Font/OldPrice";
import Text4 from "./../Font/Text4";
import Price from "../Font/Price";
import Heading6 from "../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import Heading5 from "../Font/Heading5";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";
import pickup_store from "./../../assets/Icon/pickup_store.svg";

const ProductComparisonBlock = ({ productsData }) => {
  return (
    <>
      <div className="row">
        {productsData.map((product, index) => {
          return (
            <div
              key={product.id}
              className="col-sm-3 product__comparison__main__container"
            >
              <div key={product.id} className="product__comparison__block">
                <div className="product__card__top">
                  <div className="product__comparison__close__icon__block">
                    <img
                      src={cancel_grey}
                      alt=""
                      className="product__comparison__close__icon"
                    />
                  </div>
                </div>
                <div className="product__card">
                  <div className="product__comparison__header__block">
                    <div className="product__comparison__image__block">
                      <img
                        src={product.image}
                        alt=""
                        className="product__comparison__image"
                      />
                    </div>
                  </div>
                  <p className="product__comparison__name">
                    <Heading6 text={product.productName} marginBottom={10} />
                  </p>
                  <Text4 text="Z8H SERIES" color="#808080" marginBottom={10} />
                  <div className="rating__block">
                    <RatingBlock
                      rating={product.rating}
                      totalRatings={product.totalRatings}
                    />
                  </div>
                  <p className="productSeven__series">Model and Price</p>
                  <div className="prize__block">
                    <OldPrice
                      oldPrice={product.oldPrice}
                      size="text3"
                      color="#c8c8c8"
                      marginBottom={10}
                      lineThrough={true}
                      span={true}
                    />
                    <Price
                      price={product.price}
                      marginLeft={5}
                      marginBottom={10}
                      size="heading6"
                      span={true}
                    />
                  </div>
                  <div className="addToCart__button">
                    <img
                      src={shopping_cart}
                      alt=""
                      className="addToCart__icon"
                    />
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-sm-12 product__comparison__all__specification__block">
          <Heading3 text="All Specification" marginBottom={20} />
          <div className="row specification__title__block">
            <div className="col-sm-12">
              <Heading5 text="Key Specs" marginBottom={26} />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="MODEL YEAR"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    {/* <div> */}
                    <div className="col-sm-3 specification__subcategory__title">
                      2022
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      2022
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      2022
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      2022
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="RESOLUTION"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block ">
                    <div className="col-sm-3 specification__subcategory__title">
                      8K (4320p)
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      8K (4320p)
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      8K (4320p)
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      8K (4320p)
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="SCREEN SIZE CLASS"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block ">
                    <div className="col-sm-3 specification__subcategory__title">
                      65 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      65 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      65 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      65 inches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row specification__title__block">
            <div className="col-sm-12">
              <Heading5 text="GENERAL" marginBottom={26} />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="PRODUCT NAME"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row  specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      QLED 8K Smart Tizen TV
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      QLED 8K Smart Tizen TV
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      QLED 8K Smart Tizen TV
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      QLED 8K Smart Tizen TV
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="COLOR"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      Stainless steel
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Stainless steel
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Stainless steel
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Stainless steel
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="COLOR CATEGORY"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      Silver
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Silver
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Silver
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      Silver
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row specification__title__block">
            <div className="col-sm-12">
              <Heading5 text="BOX-DIMENSION" marginBottom={26} />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="HEIGHT"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      37.3 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      37.3 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      37.3 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      37.3 inches
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="WIDTH"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      64 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      64 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      64 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      64 inches
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 specification__category__block">
                  <Heading7
                    text="DEPTH"
                    textTransform="uppercase"
                    marginBottom={9}
                  />
                  <div className="row specification__subcategory__block">
                    <div className="col-sm-3 specification__subcategory__title">
                      7.7 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      7.7 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      7.7 inches
                    </div>
                    <div className="col-sm-3 specification__subcategory__title">
                      7.7 inches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 product__comparison__availability">
          <Heading3 text="Availability" marginBottom={20} />
          <div className="row product__comparison__availability__container">
            <div className="col-sm-3 product__comparison__availability__block">
              <Heading7
                text="DELIVERY IN 8 DAYS"
                textTransform="uppercase"
                color="#FF4F04"
              />
              <div className="row ">
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={pickup_store} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Pickup:</span>
                      Available today at Riyadh
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={shipping} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Free Delivery:</span>
                      As soon as Tue, May 3 Estimates for 99504
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={small_wrench} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Installation:</span>
                      As soon as Wed, May 4
                    </p>
                    {/* <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__availability__block">
              <Heading7
                text="DELIVERY IN 8 DAYS"
                textTransform="uppercase"
                color="#FF4F04"
              />
              <div className="row ">
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={pickup_store} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Pickup:</span>
                      Available today at Riyadh
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={shipping} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Free Delivery:</span>
                      As soon as Tue, May 3 Estimates for 99504
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={small_wrench} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Installation:</span>
                      As soon as Wed, May 4
                    </p>
                    {/* <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__availability__block">
              <Heading7
                text="DELIVERY IN 8 DAYS"
                textTransform="uppercase"
                color="#FF4F04"
              />
              <div className="row ">
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={pickup_store} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Pickup:</span>
                      Available today at Riyadh
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={shipping} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Free Delivery:</span>
                      As soon as Tue, May 3 Estimates for 99504
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={small_wrench} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Installation:</span>
                      As soon as Wed, May 4
                    </p>
                    {/* <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__availability__block">
              <Heading7
                text="DELIVERY IN 8 DAYS"
                textTransform="uppercase"
                color="#FF4F04"
              />
              <div className="row ">
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={pickup_store} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Pickup:</span>
                      Available today at Riyadh
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={shipping} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Free Delivery:</span>
                      As soon as Tue, May 3 Estimates for 99504
                    </p>
                    <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link>
                  </div>
                </div>
                <div className="col-sm-12 product__comparison__availability__block__item">
                  <img src={small_wrench} className="item__image" alt="" />
                  <div className="item__text__block">
                    <p className="item__text">
                      <span className="item__strong__text">Installation:</span>
                      As soon as Wed, May 4
                    </p>
                    {/* <Link
                      className="item__store__location__link"
                      to="/store"
                    >{`See all pickup locations >`}</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 product__comparison__offer">
          <Heading3 text="SPECIAL OFFERS" marginBottom={20} />

          <div className="row product__comparison__offer__block">
            <div className="col-sm-3 product__comparison__offer__item">
              <div className="row">
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        Save $50–$300 on a sound bar with TV
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        5% Unlimited Cashback on Axis Bank Credit Card
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__card__finance__offer">
                  <Heading7 text="CARD OFFER" marginBottom={20} />
                  <p className="finance__offertext">24 Month Financing </p>
                  <p className="finance__offertext">12 Month Financing</p>
                  <p className="finance__offertext">Get rewards </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__offer__item">
              <div className="row">
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        Save $50–$300 on a sound bar with TV
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        5% Unlimited Cashback on Axis Bank Credit Card
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__card__finance__offer">
                  <Heading7 text="CARD OFFER" marginBottom={20} />
                  <p className="finance__offertext">24 Month Financing </p>
                  <p className="finance__offertext">12 Month Financing</p>
                  <p className="finance__offertext">Get rewards </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__offer__item">
              <div className="row">
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        Save $50–$300 on a sound bar with TV
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        5% Unlimited Cashback on Axis Bank Credit Card
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__card__finance__offer">
                  <Heading7 text="CARD OFFER" marginBottom={20} />
                  <p className="finance__offertext">24 Month Financing </p>
                  <p className="finance__offertext">12 Month Financing</p>
                  <p className="finance__offertext">Get rewards </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 product__comparison__offer__item">
              <div className="row">
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        Save $50–$300 on a sound bar with TV
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__offer__block">
                  <img
                    src={offer_tag}
                    alt=""
                    className="product__offer__icon"
                  />
                  <div className="product__offer__text__box">
                    <p className="product__offertype">
                      {`Bank Offer${"    "}`}
                      <span className="product__offerText">
                        5% Unlimited Cashback on Axis Bank Credit Card
                      </span>
                      <Link
                        to="/termsAndConditions"
                        className="product__termsAndConditions__link"
                      >
                        {`${"T&C"}`}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 product__card__finance__offer">
                  <Heading7 text="CARD OFFER" marginBottom={20} />
                  <p className="finance__offertext">24 Month Financing </p>
                  <p className="finance__offertext">12 Month Financing</p>
                  <p className="finance__offertext">Get rewards </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {productsData.map((item) => {
        return item.productSpecification.map((data, mainIndex) => {
          console.log(data.specs);
          return (
            <div className="row">
              <div className="col-sm-4">
                <div className="row">
                  {data.specs.map((spac, index) => (
                    <>
                      <div className="col-sm-12">{spac.title} {spac.text}</div>
                    
                    </>
                  ))}
                </div>
              </div>
            </div>
          );
        });
      })} */}
      </div>
    </>
  );
};

export default ProductComparisonBlock;
