import React, { useState } from "react";
import "./../SCSS/_createBundlePage.scss";
import BreadCrumbs from "../Components/BreadCrumbs";
import TopNavbar from "../Components/TopNavbar";

import product_01 from "./../Assets/Product/product_01.png";
import sony_logo from "./../Assets/Icon/sony_logo.svg";
import black_down_arrow from "./../Assets/Icon/black_down_arrow.svg";
import add_cart_white from "./../Assets/Icon/add_cart_white.svg";
import left_arrow from "./../Assets/Icon/left_arrow.svg";
import right_arrow from "./../Assets/Icon/right_arrow.svg";

import { Rating } from "react-simple-star-rating";
import ProductThree from "../Components/ProductThree";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
const product = {
  id: 1,
  logo: sony_logo,
  name: "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
  categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
  rating: 4.6,
  totalRatings: 6183,
  price: 799,
  oldPrice: 1050,
  saving: 10,
  monthlySavingTagline: "get it for SAR 500 in 6 equal installments",
  returnPeriod: 15,
  availableOffer: [
    {
      id: 1,
      offerType: "",
      offerText: "Save $50-$300 on a sound bar with TV",
      termsAndConditions: "",
    },
    {
      id: 2,
      offerType: "Bank Offer",
      offerText: "5% Unlimited Cashback on Axis Bank Credit Card",
      termsAndConditions: "T&C",
    },
    {
      id: 3,
      offerType: "Credit Card Offer",
      offerText: "5% Unlimited Cashback on Sony Credit Card",
      termsAndConditions: "T&C",
    },
  ],
  warrantyText: "1 Year Warranty on Product",
  size: [
    {
      id: 1,
      cm: 139,
      inch: 55,
    },
    {
      id: 2,
      cm: 164,
      inch: 65,
    },
    {
      id: 3,
      cm: 195,
      inch: 77,
    },
  ],
  delivery: {
    deliveryText: "Buy in next 2 hours and receive the TV by Tomorrow",
    pickupStore: [
      {
        id: 1,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
      {
        id: 2,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
      {
        id: 3,
        pickupText:
          "Available today at Riyadh Act Fast – Only 3 left at your store!>",
      },
    ],
  },
  protection: [
    {
      id: 1,
      protectionText: "2-Year Standard Geek Squad Protection",
      price: 79,
      month: 12,
    },
    {
      id: 2,
      protectionText: "1-Year Standard Geek Squad Protection",
      price: 89,
      month: 12,
    },
  ],
};
const productCategory = [
  "ExperPicks",
  "ExpertPicks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
  "Expert Picks",
  "Expert Picks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
  "Expert Picks",
  "Expert Picks",
  "Surge Protectors",
  "Soundbars",
  "Universal Remotes",
];

function Create_Bundle_Page() {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const [arrowState, setArrowState] = useState(true);
  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);
  const productCategorySelect = (categoryIndex, category) => {
    console.log(category);
    setSelectCategoryIndex(categoryIndex);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const leftSide = (e) => {
    setArrowState(!arrowState);
    setDisableRightArrow(false);
    e.preventDefault();
    document.querySelector(".cb__page__button__block").scrollLeft =
      document.querySelector(".cb__page__button__block").scrollLeft -
      document.querySelector(".cb__page__button__block").clientWidth -
      800;
    let scroll = document.querySelector(".cb__page__button__block").scrollLeft;
  };
  const rightSide = (e) => {
    console.log("hello");
    setArrowState(!arrowState);
    setDisableLeftArrow(false);
    e.preventDefault();

    document.querySelector(".cb__page__button__block").scrollLeft =
      document.querySelector(".cb__page__button__block").scrollLeft +
      document.querySelector(".cb__page__button__block").clientWidth -
      800;
  };
  return (
    <>
      <TopNavbar />
      <BreadCrumbs />
      <div className="container-fluid create__bundle__page__container">
        <div className="row create__bundle__page__block">
          <p className="cb__page__title">Build a bundle that works for you.</p>
          <p className="cb__page__description">
            These protection plans and accessories are popular with customers
            who bought this item.
          </p>
          <div className="col-md-12 col-xl-9 row create__bundle__left__block">
            <div className="row cb__product__block">
              <div className="col-12 col-sm-3 cb__product__left__block">
                <div className="cb__product__image__block">
                  <img src={product_01} alt="" className="cb__product__image" />
                </div>
              </div>
              <div className="col-12 col-sm-9 cb__product__right__block">
                <img
                  src={product.logo}
                  alt=""
                  className="cb__product__company__logo"
                />
                <p className="cb__product__productName">{product.name}</p>
                <div className="cb__protect__block cb__common__main__block">
                  <p className="cb__title__block">
                    {`Protect your TV`}
                    {"  "}
                  </p>
                  <p className="cb__block__title__span">
                    (Most popular protection plan for your product)
                  </p>
                  <div className="cb__rating__block">
                    <div className="rating__block">
                      <Rating
                        // onClick={handleRating}
                        size={22}
                        fillColor="#DC3A1A"
                        emptyColor="#C8C8C8"
                        readonly={true}
                        ratingValue={
                          (product.rating * 100) / 5
                        } /* Available Props */
                      />
                    </div>
                    <img
                      src={black_down_arrow}
                      alt=""
                      className="cb__product__rating__icon"
                    />
                    <p className="cb__product__rating">{product.rating}</p>
                    <p className="cb__product__totalRating">
                      {product.totalRatings.toString().length > 3
                        ? `(${product.totalRatings
                            .toString()
                            .slice(0, -3)},${product.totalRatings
                            .toString()
                            .slice(-3)}) Rating`
                        : `(${product.totalRatings
                            .toString()
                            .slice(-3)}) Rating`}
                    </p>
                  </div>
                  <div className="cb__protect__selection__block">
                    {product.protection.map((protect, protectIndex) => {
                      return (
                        <div
                          key={protect.id}
                          className="cb__protection__selection"
                        >
                          <div className="cb__protection__form__block">
                            <input
                              type="checkbox"
                              className="cb__input__check"
                              name="pincode"
                              value={1}
                              onChange={handleChange}
                            />
                            <p className="cb__protection__text">
                              {protect.protectionText}
                            </p>
                          </div>
                          <div className="cb__protection__price__block">
                            <p className="cb__protection__price">
                              {" "}
                              {protect.price.toString().length > 3
                                ? `SAR${protect.price
                                    .toString()
                                    .slice(0, -3)},${protect.price
                                    .toString()
                                    .slice(-3)}.00`
                                : `SAR${protect.price.toString().slice(-3)}.00`}
                            </p>
                            <p className="cb__protection__monthly__price">
                              {" "}
                              {protect.price.toString().length > 3
                                ? `About SAR${protect.price
                                    .toString()
                                    .slice(0, -3)},${protect.price
                                    .toString()
                                    .slice(-3)}.00`
                                : `About SAR${protect.price
                                    .toString()
                                    .slice(-3)}.00`}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <hr className="cb__page__horizontal__line"></hr>

            <p className="cb__page__button__block__title">
              Best-selling items to go with it
            </p>
            <div className="cb__page__category__button__block">
              <div className="cb__page__button__main__block">
                <div className="arrow__block">
                  <div className="arrow left__arrow" onClick={leftSide}>
                    <img src={left_arrow} alt="" />
                  </div>
                  <div className="arrow right__arrow" onClick={rightSide}>
                    <img src={right_arrow} alt="" />
                  </div>
                </div>
                <div className="cb__page__button__block">
                  {productCategory.map((category, categoryIndex) => {
                    return (
                      <button
                        key={categoryIndex}
                        onClick={() =>
                          productCategorySelect(categoryIndex, category)
                        }
                        className={
                          selectCategoryIndex === categoryIndex
                            ? "cb__page__button__active"
                            : "cb__page__button"
                        }
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="cb__page__horizontal__line"></hr>

            <p className="cb__page__button__block__title">
              Our experts recommend the following products:
            </p>
            <ProductThree product={product} />
            <hr className="cb__page__horizontal__line"></hr>
            <ProductThree product={product} />
          </div>
          {/* package Summary */}
          <div className="col-md-12 col-xl-3  create__bundle__right__block">
            <div className="cb__package__summary__block">
              <p className="cb__ps__title">Package Summary</p>
              <div className="cb__ps__detail__block">
                <div className="cb__ps__detail__inner__block">
                  <p className="cb__ps__detail__title">Shipping</p>
                  <p className="cb__ps__detail__price">SAR20.00</p>
                </div>
                <div className="cb__ps__detail__inner__block">
                  <p className="cb__ps__detail__title">Sub Total</p>
                  <p className="cb__ps__detail__price">SAR195.00</p>
                </div>
                <div className="cb__ps__detail__inner__block">
                  <p className="cb__ps__detail__title">Discount</p>
                  <p className="cb__ps__detail__price">SAR30.00</p>
                </div>
                <div className="cb__ps__detail__inner__block">
                  <p className="cb__ps__detail__title">Tax</p>
                  <p className="cb__ps__detail__price">SAR10.00</p>
                </div>
                <div className="cb__ps__detail__total__order__block">
                  <p className="cb__ps__detail__total__order">Order Total</p>
                  <p className="cb__ps__detail__total__order">SAR3275.00</p>
                </div>
                <div className="col-6 cb__addToCart__button__block">
                  <div className="cb__addToCart__button">
                    <img
                      src={add_cart_white}
                      alt=""
                      className="cb__addToCart__icon"
                    />
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Create_Bundle_Page;
