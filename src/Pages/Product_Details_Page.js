import React, { useState } from "react";
import "./../SCSS/_productDetailsPage.scss";
import TopNavbar from "../Components/TopNavbar";
import Footer from "../Components/Footer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Rating } from "react-simple-star-rating";

import BreadCrumbs from "../Components/BreadCrumbs";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";
import ProductCarousel from "../Components/ProductCarousel";
import NewArrival from "../Components/NewArrival";

// import product_01 from "./../Assets/NewArrivals/newArrivals_01.png";

import sony_logo from "./../Assets/Icon/sony_logo.svg";
import black_favorite from "./../Assets/Icon/black_favorite.svg";
import empty_favourite from "./../Assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../Assets/Icon/fulfill_favourite.svg";
import black_down_arrow from "./../Assets/Icon/black_down_arrow.svg";
import unlock from "./../Assets/Icon/unlock.svg";
import grey_right_arrow from "./../Assets/Icon/grey_right_arrow.svg";
import return_period from "./../Assets/Icon/return_period.svg";
import offer_tag from "./../Assets/Icon/offer_tag.svg";
import pickup_store from "./../Assets/Icon/pickup_store.svg";
import add_to_cart from "./../Assets/Icon/add_to_cart.svg";
import super_coin_image from "./../Assets/Icon/super_coin_image.svg";
import coin from "./../Assets/Icon/coin.svg";
import add_cart_white from "./../Assets/Icon/add_cart_white.svg";

import facebook from "./../Assets/Icon/facebook.png";
import twitter from "./../Assets/Icon/twitter.png";
import messanger from "./../Assets/Icon/messanger.png";
import whatsapp from "./../Assets/Icon/whatsapp.png";
import pinterest from "./../Assets/Icon/pinterest.png";

import product_01 from "./../Assets/Product/product_01.png";
import product_02 from "./../Assets/Product/product_02.png";
import product_03 from "./../Assets/Product/product_03.png";
import product_04 from "./../Assets/Product/product_04.png";
import product_05 from "./../Assets/Product/product_05.png";

import newArrivals_01 from "./../Assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../Assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../Assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../Assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../Assets/NewArrivals/newArrivals_05.png";
import { Link } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";

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
const peopleUltimatelyBoughtData = [
  {
    id: 1,
    logo: sony_logo,
    image: product_01,
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
  },
  {
    id: 2,
    logo: sony_logo,
    image: product_02,
    name: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
    categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
    rating: 4.0,
    totalRatings: 2183,
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
  },
  {
    id: 3,
    logo: sony_logo,
    image: product_03,
    name: "SONY X85J Smart TV 50' 4K Ultra HD High Dynamic Range(Google TV)",
    categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
    rating: 5.0,
    totalRatings: 4183,
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
  },
  {
    id: 4,
    logo: sony_logo,
    image: product_04,
    name: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
    categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
    rating: 4.0,
    totalRatings: 2183,
    price: 649,
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
  },
  {
    id: 5,
    logo: sony_logo,
    image: product_05,
    name: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
    categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
    rating: 4.0,
    totalRatings: 6183,
    price: 499,
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
  },
];
// const newArrivalData = [
//   {
//     id: 0,
//     image: newArrivals_01,
//     productName: "Camera",
//     rating: 4.5,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 1,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 3,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 3,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 3.5,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 4,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 2.5,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 5,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 5,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 6,
//     image: newArrivals_01,
//     productName: "Camera",
//     rating: 3.2,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 7,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 4.8,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 8,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 2,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 9,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 1,
//     oldPrize: 1999,
//     prize: 1699,
//   },
//   {
//     id: 10,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 3,
//     oldPrize: 1999,
//     prize: 1699,
//   },
// ];
function Product_Details_Page() {
  const [productData, setProductData] = useState(product);
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [pincode, setPincode] = useState("");

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  const handleChange = (e) => {
    setPincode(e.target.value);
  };
  const handleSubmit = () => {
    console.log(pincode);
  };
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
  console.log(document.querySelector(".pd__return__block"));
  return (
    <>
      <TopNavbar />
      <BreadCrumbs />
      <div className="container-fluid product__details__page__container">
        <div className="row product__details__page__block">
          <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-9 row product__details__left__block">
            <div className="col-12 col-sm-12 col-md-6 product__carousel__main__block">
              <div className="product__carousel__block">
                {/* <ImageGallery
                className="image__gallery"
                // originalClass  ="original__image"
                showPlayButton={false}
                originalHeight="original__image"
                thumbnailPosition="left"
                items={images}
              /> */}
                <ProductCarousel />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 product__details__block">
              <img
                src={product.logo}
                alt=""
                className="pd__product__company__logo"
              />
              <p className="pd__product__name">{product.name}</p>
              <div className="pd__category__favourite__button__block">
                <button className="pd__catrgory__button">ALL TV's</button>
                <button className="pd__favourie__button">
                  <img
                    onMouseEnter={() => setIsFavouriteHover(true)}
                    onClick={handleFavourite}
                    onMouseLeave={() => setIsFavouriteHover(false)}
                    className={
                      !isFavourite
                        ? "pd__favourite__icon"
                        : "pd__favourite__icon__disable"
                    }
                    src={isFavouriteHover ? fulfill_favourite : empty_favourite}
                    alt=""
                  />
                  <img
                    onClick={handleFavourite}
                    className={
                      isFavourite
                        ? "pd__favourite__icon"
                        : "pd__favourite__icon__disable"
                    }
                    src={fulfill_favourite}
                    alt=""
                  />
                </button>
              </div>
              <p className="pd__product__categoryTagline">
                {product.categoryTagline}
              </p>
              <div className="pd__rating__block">
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
                  className="pd__product__rating__icon"
                />
                <p className="pd__product__rating">{product.rating}</p>
                <p className="pd__product__totalRating">
                  {product.totalRatings.toString().length > 3
                    ? `(${product.totalRatings
                        .toString()
                        .slice(0, -3)},${product.totalRatings
                        .toString()
                        .slice(-3)}) Rating`
                    : `(${product.totalRatings.toString().slice(-3)}) Rating`}
                </p>
              </div>
              <hr className="pd__block__bottom__line" />

              <div className="row pd__product__price__block ">
                <div className="col-4 col-sm-4 col-md-5 pd__total__price__block">
                  <p className="pd__product__total__price">
                    {product.price.toString().length > 3
                      ? `SAR${product.price
                          .toString()
                          .slice(0, -3)},${product.price
                          .toString()
                          .slice(-3)}.00`
                      : `SAR${product.price.toString().slice(-3)}.00`}
                  </p>
                  <div className="pd__save__price__button">{`SAVE SAR${Math.ceil(
                    product.price * 0.1
                  )}`}</div>
                  <p className="pd__product__old__price">
                    {" "}
                    {product.oldPrice.toString().length > 3
                      ? `SAR${product.oldPrice
                          .toString()
                          .slice(0, -3)},${product.oldPrice
                          .toString()
                          .slice(-3)}.00`
                      : `SAR${product.oldPrice.toString().slice(-3)}.00`}
                  </p>
                </div>
                <div className="col-2 col-sm-2 col-md-2 pd__or__block">
                  <div className="pd__or__text__block">
                    <p className="pd__or__text">OR</p>
                  </div>
                  <div className="pd__mid__line"></div>
                </div>
                <div className="col-5 col-sm-6 col-md-5 pd__product__monthly__price__block">
                  <p className="pd__product__total__price">
                    {product.price.toString().length > 3
                      ? `SAR${product.price
                          .toString()
                          .slice(0, -3)},${product.price
                          .toString()
                          .slice(-3)}.00`
                      : `SAR${product.price.toString().slice(-3)}.00`}
                  </p>
                  <p className="pd__monthly__save__tagline">
                    {product.monthlySavingTagline}
                  </p>
                  <Link to="/knowmore" className="pd__know__more">
                    {"know more >"}
                  </Link>
                </div>
              </div>
              <div className="pd__unlock__membership__block ">
                <div className="pd__unlock__membership">
                  <div className="pd__icon__block">
                    <img src={unlock} alt="" className="pd__unlock__icon" />
                  </div>
                  <p className="pd__unlock__membership__text">
                    Unlock up to 24 months of Best Buy Protection with our Sony
                    Membership
                  </p>
                </div>
                <img
                  src={grey_right_arrow}
                  alt=""
                  className="pd__gret__right__arrow__icon"
                />
              </div>
              <div className="pd__return__block ">
                <div className="pd__icon__block">
                  <img
                    src={return_period}
                    alt=""
                    className="pd__return_period_icon"
                  />
                </div>
                <div className="pd__returntext__block">
                  <p className="pd__return__policy__text">
                    {product.returnPeriod}-Days Return Policy
                  </p>
                  <p className="pd__return__policy__condition">
                    If received today, the last day to return this item would be
                    Apr 15.
                  </p>
                  <Link to="/learnmore" className="pd__learn__more__link">
                    {"Learn more >"}
                  </Link>
                </div>
              </div>
              <hr className="pd__block__bottom__line" />

              <div className="pd__avilable__offers__block pd__common__main__block">
                <p className="pd__block__title">Available Offers</p>
                {product.availableOffer.map((offer, offerIndex) => {
                  return (
                    <div key={offer.id} className="pd__offer__block">
                      <img src={offer_tag} alt="" className="pd__offer__icon" />
                      <div className="pd__offer__text__box">
                        <p className="pd__offertype">
                          {`${offer.offerType}${"    "}`}
                          <span className="pd__offerText">
                            {offer.offerText}
                          </span>
                          <Link
                            to="/termsAndConditions"
                            className="pd__termsAndConditions__link"
                          >
                            {offer.termsAndConditions}
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="pd__block__bottom__line" />

              <div className="pd__warranty__size__block pd__common__main__block">
                <div className="row pd__warranty__block">
                  <p className="col-3 pd__warranty__title">Warranty :</p>
                  <p className="col-9 pd__warranty__text">
                    {product.warrantyText}
                  </p>
                </div>
                <div className="row pd__size__block">
                  <p className="col-3 col-sm-3 col-md-12 col-lg-3 pd__size__title">
                    Size :
                  </p>
                  <div className="col-9 col-sm-9 col-md-12 col-lg-9 pd__size__button__block">
                    {product.size.map((size, sizeIndex) => {
                      return (
                        <button
                          key={size.id}
                          onClick={() =>
                            sizeButtonClick(sizeIndex, size.cm, size.inch)
                          }
                          className={
                            sizeButtonIndex === sizeIndex
                              ? "pd__size__button__active"
                              : "pd__size__button"
                          }
                        >{`${size.cm} cm (${size.inch})`}</button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr className="pd__block__bottom__line" />

              <div className="pd__delivery__block pd__common__main__block">
                <p className="pd__block__title">Delivery</p>
                <div className="pd__form__block">
                  <div className="pd__form__field">
                    <input
                      type="number"
                      inputmode="numeric"
                      className="pd__input__field"
                      placeholder="Enter Delivery Code"
                      name="pincode"
                      value={pincode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pd__form__field">
                    <button
                      type="submit"
                      className="pd__input__button"
                      onClick={handleSubmit}
                    >
                      CHECK
                    </button>
                  </div>
                </div>
                <p className="pd__delivery__text">
                  {product.delivery.deliveryText}
                </p>
                <p className="pd__delivery__note">
                  Enter pincode for exact delivery dates/charges
                </p>
                <div className="pd__pickup__block">
                  <p className="pd__block__title">Pick Up From Store</p>
                  {product.delivery.pickupStore.map((store, storeIndex) => {
                    return (
                      <div key={store.id} className="pd__store__block">
                        <img
                          src={pickup_store}
                          alt=""
                          className="pd__store__icon"
                        />
                        <div className="pickup__text__block">
                          <p className="pd__pickup__text">
                            <span className="pd__pickup__only__text">
                              Pickup:
                            </span>
                            {` ${store.pickupText}`}
                          </p>
                          {storeIndex === 0 ? (
                            <Link
                              className="pd__store__location__link"
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
              <hr className="pd__block__bottom__line" />

              <div className="pd__protect__block pd__common__main__block">
                <p className="pd__title__block">
                  {`Protect your TV`}
                  {"  "}
                </p>
                <p className="pd__block__title__span">
                  (Most popular protection plan for your product)
                </p>
                <div className="pd__rating__block">
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
                    className="pd__product__rating__icon"
                  />
                  <p className="pd__product__rating">{product.rating}</p>
                  <p className="pd__product__totalRating">
                    {product.totalRatings.toString().length > 3
                      ? `(${product.totalRatings
                          .toString()
                          .slice(0, -3)},${product.totalRatings
                          .toString()
                          .slice(-3)}) Rating`
                      : `(${product.totalRatings.toString().slice(-3)}) Rating`}
                  </p>
                </div>
                <div className="pd__protect__selection__block">
                  {product.protection.map((protect, protectIndex) => {
                    return (
                      <div
                        key={protect.id}
                        className="pd__protection__selection"
                      >
                        <div className="pd__protection__form__block">
                          <input
                            type="checkbox"
                            className="pd__input__check"
                            name="pincode"
                            value={1}
                            onChange={handleChange}
                          />
                          <p className="pd__protection__text">
                            {protect.protectionText}
                          </p>
                        </div>
                        <div className="pd__protection__price__block">
                          <p className="pd__protection__price">
                            {" "}
                            {protect.price.toString().length > 3
                              ? `SAR${protect.price
                                  .toString()
                                  .slice(0, -3)},${protect.price
                                  .toString()
                                  .slice(-3)}.00`
                              : `SAR${protect.price.toString().slice(-3)}.00`}
                          </p>
                          <p className="pd__protection__monthly__price">
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
              <hr className="pd__block__bottom__line" />

              <div className="row pd__super__coin__block pd__common__main__block">
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-5 pd__super__coin__image__block">
                  <img
                    src={super_coin_image}
                    alt=""
                    className="ps__super__coin__image"
                  />
                </div>
                <div className="col-8 col-sm-6 col-md-8 col-lg-8 col-xl-7 pd__super__coin__text__block">
                  <p className="pd__super__coin__title">
                    For every SAR200 Spent,
                  </p>
                  <p className="pd__super__coin__title">
                    you earn <img src={coin} alt="" className="pd__coin" /> 2
                    SuperCoins
                  </p>
                  <p className="pd__super__coin__condition">
                    Max 50 coins per order
                  </p>
                </div>
              </div>
              <hr className="pd__block__bottom__line" />

              <div className="row pd__bundle__cart__button__block pd__common__main__block">
                <div className="col-6 pd__bundle__button__block">
                  <div className="pd__bundle__button">Build A Bundle</div>
                </div>
                <div className="col-6 pd__addToCart__button__block">
                  <div className="pd__addToCart__button">
                    <img
                      src={add_cart_white}
                      alt=""
                      className="pd__addToCart__icon"
                    />
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-3 product__details__right__block">
            <p className="pd__mb__block__title">People Ultimately Bought</p>
            {peopleUltimatelyBoughtData.map((product, productIndex) => {
              return (
                <div key={product.id} className="row pd__mb__product__block">
                  <div className="col-4 pd__mb__product__image__block">
                    <img
                      src={product.image}
                      alt=""
                      className="pd__mb__product__image"
                    />
                  </div>
                  <div className="col-8 pd__mb__product__detail__block">
                    <p className="pd__mb__product__name">{product.name}</p>
                    <div className="pd__mb__rating__block">
                      <div className="pd__mbrating__block">
                        <Rating
                          // onClick={handleRating}
                          size={15}
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
                        className="pd__product__rating__icon"
                      />
                      <div className="pd__mb__rating__text__block">
                        <p className="pd__product__rating">{product.rating}</p>
                        <p className="pd__product__totalRating">
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
                    </div>
                    <p className="pd__mb__product__price">
                      {product.price.toString().length > 3
                        ? `SAR${product.price
                            .toString()
                            .slice(0, -3)},${product.price
                            .toString()
                            .slice(-3)}.00`
                        : `SAR${product.price.toString().slice(-3)}.00`}
                      <span className="pd__mb__product__oldPrice">
                        {product.oldPrice.toString().length > 3
                          ? `SAR${product.oldPrice
                              .toString()
                              .slice(0, -3)},${product.oldPrice
                              .toString()
                              .slice(-3)}.00`
                          : `SAR${product.oldPrice.toString().slice(-3)}.00`}
                      </span>
                    </p>
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
              );
            })}
          </div>
        </div>
      </div>
      {/* <ImageGallery
   thumbnailPosition="left"
   items={images} /> */}
      <Footer />
    </>
  );
}

export default Product_Details_Page;
