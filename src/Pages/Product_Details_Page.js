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
import pickup_store from "./../Assets/Icon/pickup_store.svg";
import add_to_cart from "./../Assets/Icon/add_to_cart.svg";

import add_cart_white from "./../Assets/Icon/add_cart_white.svg";
import add_cart_black from "./../Assets/Icon/add_cart_black.svg";

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
import ExpertProducts from "../Components/ExpertProducts";
import Accordian from "../Components/Accordian";
import SimilarProducts from "../Components/SimilarProducts";
import NewsLetter from "../Components/NewsLetter";
import Protecttion from "../Components/MostSharedComponent/Protection";
import Heading3 from "../Components/Font/Heading3";
import RatingBlock from "../Components/MostSharedComponent/RatingBlock";
import Price from "../Components/Font/Price";
import OldPrice from "../Components/Font/OldPrice";
import Heading7 from "../Components/Font/Heading7";
import Text3 from "../Components/Font/Text3";
import Text4 from "../Components/Font/Text4";
import AvailableOffers from "../Components/MostSharedComponent/AvailableOffers";
import PickupStore from "../Components/MostSharedComponent/PickupStore";
import Heading5 from "../Components/Font/Heading5";
import SuperCoin from "../Components/MostSharedComponent/SuperCoin";
import PriceBlock from "../Components/MostSharedComponent/PriceBlock";
import Heading1 from "../Components/Font/Heading1";
import Heading6 from "../Components/Font/Heading6";

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
    productName:
      "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
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
    productName: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
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
    productName:
      "SONY X85J Smart TV 50' 4K Ultra HD High Dynamic Range(Google TV)",
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
    productName: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
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
    productName: 'Sony KD55X80JS 55" 4K Ultra HD DLED Android TV',
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
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 1,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 3,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 3,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 3.5,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 4,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 2.5,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 5,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 5,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 6,
//     image: newArrivals_01,
//     productName: "Camera",
//     rating: 3.2,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 7,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 4.8,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 8,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 2,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 9,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 1,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 10,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 3,
//     oldPrice: 1999,
//     price: 1699,
//   },
// ];

const productOverviewData = {
  title: "Product Overview",
  description:
    "Improve your viewing experience with this 55-inch Samsung smart TV. The variety of applications offer easy access to content on popular streaming services, and the intuitive interface makes finding your favorite shows simple. Boasting native 4K resolution and advanced HDR technology, this Samsung smart TV enriches your movie nights with stunningly detailed visuals and lifelike colors.",
  keyValueTitle: "Features",
  keyValueData: [
    {
      id: 0,
      key: "Crystal Processor 4K",
      value:
        "The ultrafast processor transforms everything you watch into stunning 4K.",
    },
    {
      id: 1,
      key: "Crystal display",
      value:
        "Experience crystal-clear colors that are fine-tuned to deliver a naturally crisp and vivid picture.",
    },
    {
      id: 2,
      key: "Universal guide",
      value:
        "Powerful AI technology recommends streaming and live TV content all in one simple onscreen guide.",
    },
    {
      id: 3,
      key: "Boundless design",
      value: "An ultra-thin bezel on all sides for a stunningly clean look.",
    },
    {
      id: 4,
      key: "4K Ultra HD (2160p resolution)",
      value:
        "Enjoy breathtaking 4K movies and TV shows at 4x the resolution of Full HD, and upscale your current content to Ultra HD-level picture quality.",
    },
    {
      id: 5,
      key: "Smart TV powered by Tizen",
      value:
        "Go beyond Smart TV with next-generation apps, super easy control, and a host of enhancements that elevate your TV-watching experience.",
    },
  ],
};

const productSpecificationData = {
  title: "Specifications",
  keyValueTitle: "Key Specs",
  keyValueData: [
    {
      id: 0,
      key: "Model",
      value: "UN55TU7000FXZASKU",
    },
    {
      id: 1,
      key: "SKU",
      value: "6401735",
    },
    {
      id: 2,
      key: "Display Type",
      value: "LED",
    },
    {
      id: 3,
      key: "Resolution",
      value: "4K (2160p)",
    },
    {
      id: 4,
      key: "HDR (High Definition Range)",
      value: "Yes",
    },
    {
      id: 5,
      key: "Specific Manufacturer Technologies",
      value:
        "Crystal Processor 4K, Digital Clean View, Contrast Enhancer, PurColor, Game Enhancer, LED Clear Motion",
    },
  ],
};
const newArrivalData = [
  {
    id: 0,
    image: newArrivals_01,
    productName: "Camera",
    rating: 4.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 3.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 2.5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 5,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    image: newArrivals_01,
    productName: "Camera",
    rating: 3.2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    image: newArrivals_02,
    productName: "Silver Porto Headset",
    rating: 4.8,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 8,
    image: newArrivals_03,
    productName: "Car Audio Speaker KM100",
    rating: 2,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 9,
    image: newArrivals_04,
    productName: "Sony Viao Laptop",
    rating: 1,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 10,
    image: newArrivals_05,
    productName: "Network Camera",
    rating: 3,
    oldPrice: 1999,
    price: 1699,
  },
];

function Product_Details_Page() {
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
  return (
    <>
      {/* <TopNavbar /> */}
      <BreadCrumbs />
      <div className="container-fluid product__details__page__container">
        <div className="row product__details__page__block">
          <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-9 row product__details__left__block">
            <div className="row products__details__inner__block">
              <div className="col-12 col-sm-12 col-md-6 product__carousel__main__block">
                <div className="product__carousel__block">
                  <ProductCarousel />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 product__details__block">
                <img
                  src={product.logo}
                  alt=""
                  className="pd__product__company__logo"
                />
                <Heading3 text={product.name} />
                <div className="pd__category__favourite__button__block">
                  <button className="pd__category__button">ALL TV's</button>
                  <button className="pd__favourite__button">
                    <img
                      onMouseEnter={() => setIsFavouriteHover(true)}
                      onClick={handleFavourite}
                      onMouseLeave={() => setIsFavouriteHover(false)}
                      className={
                        !isFavourite
                          ? "pd__favourite__icon"
                          : "pd__favourite__icon__disable"
                      }
                      src={
                        isFavouriteHover ? fulfill_favourite : empty_favourite
                      }
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
                <Text3
                  text={product.categoryTagline}
                  color="#808080"
                  marginBottom={10}
                />
                {/* <Rating PriceBlock */}
                <RatingBlock
                  size={22}
                  rating={product.rating}
                  totalRatings={product.totalRatings}
                  fillColor="#DC3A1A"
                  emptyColor="#C8C8C8"
                />

                <hr className="pd__block__bottom__line" />

                {/* Price Block */}
                <PriceBlock
                  oldPrice={product.oldPrice}
                  price={product.price}
                  monthlySavingTagline={product.monthlySavingTagline}
                />

                {/* Unlock MemberShip Block */}
                <div className="pd__unlock__membership__block">
                  <div className="pd__unlock__membership">
                    <div className="pd__icon__block">
                      <img src={unlock} alt="" className="pd__unlock__icon" />
                    </div>

                    <p className="pd__unlock__membership__text">
                      <Text4
                        text="Unlock up to 24 months of Best Buy Protection with our
                      Sony Membership"
                        marginBottom={0}
                      />
                    </p>
                  </div>
                  <img
                    src={grey_right_arrow}
                    alt=""
                    className="pd__gret__right__arrow__icon"
                  />
                </div>

                {/* Return Policy Block  */}
                <div className="pd__return__block ">
                  <div className="pd__icon__block">
                    <img
                      src={return_period}
                      alt=""
                      className="pd__return_period_icon"
                    />
                  </div>
                  <div className="pd__return__text__block">
                    <Heading7
                      text={`${product.returnPeriod}-Days Return Policy`}
                    />
                    <Text3
                      text="If received today, the last day to return this item would be Apr 15."
                      marginBottom={0}
                    />
                    <Link to="/learnmore" className="pd__learn__more__link">
                      {"Learn more >"}
                    </Link>
                  </div>
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Available Offer */}
                <AvailableOffers
                  availableOffer={product.availableOffer}
                  title="Available Offers"
                />

                <hr className="pd__block__bottom__line" />

                {/* Warranty Block */}
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

                {/* Delivery Block % Pickup Store */}
                <div className="pd__delivery__block pd__common__main__block">
                  <Heading5 text="Delivery" marginBottom={20} />
                  <div className="pd__form__block">
                    <div className="pd__form__field">
                      <input
                        type="number"
                        inputMode="numeric"
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
                  <Heading7
                    text={product.delivery.deliveryText}
                    marginBottom={0}
                  />
                  <Text3
                    text=" Enter pincode for exact delivery dates/charges"
                    color="#808080"
                    marginBottom={0}
                  />
                  <PickupStore delivery={product.delivery} title="Pick Up From Store"/>
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Pretection Block */}
                <Protecttion
                  title="Protect Your TV"
                  tagline="Most popular protection plan for your product"
                  rating={product.rating}
                  totalRatings={product.totalRatings}
                  protection={product.protection}
                />

                <hr className="pd__block__bottom__line" />

                {/* Super Coin Block */}
                <SuperCoin />

                <hr className="pd__block__bottom__line" />

                {/* Button Block */}
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
            <div className="col-12 exp__rd__block">
              <Heading1 text="Our experts Recommendation" />
              <div className="row exp__rd__main__block">
                <div className="col-12 col-lg-12 col-xl-9 row exp__rd__left__block">
                  {peopleUltimatelyBoughtData
                    .slice(0, 4)
                    .map((product, productIndex) => {
                      return (
                        <div
                          key={product.id}
                          className="col-6 col-sm-6 col-md-3"
                        >
                          <ExpertProducts product={product} />
                        </div>
                      );
                    })}
                </div>
                <div className="col-12 col-lg-12 col-xl-3 exp__rd__package__block">
                  <div className="exp__rd__package__inner__block">
                    <div className="exp__rd__package__saving__block">
                      <p className="package__saving__text">
                        {" "}
                        <Text3 text="Package Savings" marginBottom={0} />
                      </p>
                      <p className="package__saving__price">
                        <Price price={99} size="heading5" />
                      </p>
                    </div>
                    <div className="exp__rd__package__total__block">
                      <p className="package__total__text">
                        {" "}
                        <Heading6 text="Package Total" marginBottom={0} />
                      </p>
                      <p className="package__total__price">
                        {" "}
                        <Price price={1999} size="heading5" />
                      </p>
                    </div>

                    <div className="exp__rd__addToCart__button">
                      <img
                        src={add_cart_black}
                        alt=""
                        className="exp__rd__addToCart__icon"
                      />
                      ADD 4 ITEMS TO CART
                    </div>

                    <p className="exp__rd__package__link__text">
                      <Link to="/products/1" className="exp__rd__package__link">
                        {`Build your own package>`}{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Accordian data={productOverviewData} isDescription={true} />
            <Accordian data={productSpecificationData} isDescription={false} />
            <div className="pd__newArrival__block">
              <NewArrival
                productDetailPage={true}
                sectionTitle="People Who Bought Also Bought"
                carouselData={newArrivalData}
              />
            </div>
            <div className="pd__similarProducts__block">
              <SimilarProducts
                productDetailPage={true}
                sectionTitle="Similar Products"
                carouselData={peopleUltimatelyBoughtData}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-3 product__details__right__block">
            <Heading3 price="People Ultimately Bought" />
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
                    <Heading7 text={product.productName} />
                    <RatingBlock
                      size={15}
                      rating={product.rating}
                      totalRatings={product.totalRatings}
                      fillColor="#DC3A1A"
                      emptyColor="#C8C8C8"
                    />
                    <Price price={product.price} size="heading6" span={true} />

                    <OldPrice
                      oldPrice={product.oldPrice}
                      size="text3"
                      color="#808080"
                      marginLeft={5}
                      marginBottom={0}
                      lineThrough={true}
                      span={true}
                    />

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
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Product_Details_Page;
