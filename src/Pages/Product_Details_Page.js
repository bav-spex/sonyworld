import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./../SCSS/_productDetailsPage.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Rating } from "react-simple-star-rating";
import * as services from './../services/services'

import BreadCrumbs from "../Components/BreadCrumbs";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";
import ProductCarousel from "../Components/ProductCarousel";
import ProductContainer from "../Components/ProductContainer";

// import product_01 from "./../assets/NewArrivals/newArrivals_01.png";

import sony_logo from "./../assets/Icon/sony_logo.svg";
import black_favorite from "./../assets/Icon/black_favorite.svg";
import empty_favourite from "./../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../assets/Icon/fulfill_favourite.svg";
import black_down_arrow from "./../assets/Icon/black_down_arrow.svg";
import unlock from "./../assets/Icon/unlock.svg";
import grey_right_arrow from "./../assets/Icon/grey_right_arrow.svg";
import return_period from "./../assets/Icon/return_period.svg";
import pickup_store from "./../assets/Icon/pickup_store.svg";
import add_to_cart from "./../assets/Icon/add_to_cart.svg";
import plus from "./../assets/Icon/plus.svg";
import minus from "./../assets/Icon/minus.svg";

import shopping_cart from "./../assets/Icon/shopping_cart.svg";
import add_cart_black from "./../assets/Icon/add_cart_black.svg";

import facebook from "./../assets/Icon/facebook.png";
import twitter from "./../assets/Icon/twitter.png";
import messanger from "./../assets/Icon/messanger.png";
import whatsapp from "./../assets/Icon/whatsapp.png";
import pinterest from "./../assets/Icon/pinterest.png";

import product_01 from "./../assets/Product/product_01.png";
import product_02 from "./../assets/Product/product_02.png";
import product_03 from "./../assets/Product/product_03.png";
import product_04 from "./../assets/Product/product_04.png";
import product_05 from "./../assets/Product/product_05.png";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";
import { Link } from "react-router-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import ExpertProducts from "../Components/ProductType/ExpertProducts";
import Accordian from "../Components/Accordian";
import SimilarProducts from "../Components/SimilarProducts";
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
import { getProductDetail } from "../services/pdp.service";
import { addToCart, deleteFromCart } from "../services/cart.service";
import { loadCartData, loadProductDetailData } from "../redux/appAction";
import MobileProductDetailPage from "./MobilePages/Mobile_Product_Detail_Page";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../services/wishlist.services";

// const product = {
//   id: 1,
//   logo: sony_logo,
//   name: "Z8H | Full Array LED | 8K | High Dynamic Range (HDR) | Smart TV (Android TV)",
//   categoryTagline: "Experience the brilliance of big-screen Sony 8K HDR",
//   rating: 4.6,
//   totalRatings: 6183,
//   price: 799,
//   oldPrice: 1050,
//   saving: 10,
//   monthlySavingTagline: "get it for SAR 500 in 6 equal installments",
//   returnPeriod: 15,
//   availableOffer: [
//     {
//       id: 1,
//       offerType: "",
//       offerText: "Save $50-$300 on a sound bar with TV",
//       termsAndConditions: "",
//     },
//     {
//       id: 2,
//       offerType: "Bank Offer",
//       offerText: "5% Unlimited Cashback on Axis Bank Credit Card",
//       termsAndConditions: "T&C",
//     },
//     {
//       id: 3,
//       offerType: "Credit Card Offer",
//       offerText: "5% Unlimited Cashback on Sony Credit Card",
//       termsAndConditions: "T&C",
//     },
//   ],
//   warrantyText: "1 Year Warranty on Product",
//   size: [
//     {
//       id: 1,
//       cm: 139,
//       inch: 55,
//     },
//     {
//       id: 2,
//       cm: 164,
//       inch: 65,
//     },
//     {
//       id: 3,
//       cm: 195,
//       inch: 77,
//     },
//   ],
//   delivery: {
//     deliveryText: "Buy in next 2 hours and receive the TV by Tomorrow",
//     pickupStore: [
//       {
//         id: 1,
//         pickupText:
//           "Available today at Riyadh Act Fast – Only 3 left at your store!>",
//       },
//       {
//         id: 2,
//         pickupText:
//           "Available today at Riyadh Act Fast – Only 3 left at your store!>",
//       },
//       {
//         id: 3,
//         pickupText:
//           "Available today at Riyadh Act Fast – Only 3 left at your store!>",
//       },
//     ],
//   },
//   protection: [
//     {
//       id: 1,
//       protectionText: "2-Year Standard Geek Squad Protection",
//       price: 79,
//       month: 12,
//     },
//     {
//       id: 2,
//       protectionText: "1-Year Standard Geek Squad Protection",
//       price: 89,
//       month: 12,
//     },
//   ],
// };
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
// const newArrivalData = [
//   {
//     id: 0,
//     image: newArrivals_01,
//     productName: "Camera",
//     rating: 4.5,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 1,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 3,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 3,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 3.5,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 4,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 2.5,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 5,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 5,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 6,
//     image: newArrivals_01,
//     productName: "Camera",
//     rating: 3.2,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 7,
//     image: newArrivals_02,
//     productName: "Silver Porto Headset",
//     rating: 4.8,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 8,
//     image: newArrivals_03,
//     productName: "Car Audio Speaker KM100",
//     rating: 2,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 9,
//     image: newArrivals_04,
//     productName: "Sony Viao Laptop",
//     rating: 1,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
//   {
//     id: 10,
//     image: newArrivals_05,
//     productName: "Network Camera",
//     rating: 3,
//     totalRatings:2183,
//     oldPrice: 1999,
//     price: 1699,
//   },
// ];
const data = {
  store_id: ["0"],
  page_id: "174",
  title: "Sony Web Home 12",
  page_layout: "1column",
  meta_keywords: null,
  meta_description: null,
  identifier: "sony-web-home-en-118",
  content_heading: "Sony Web Home 12",
  content: [
    {
      type: "multiple_banner",
      inner_type: "slider",
      items: [
        {
          image_id: "",
          deeplinkUrl: "https://www.mestores.com/en-sa/mestores-c-516",
          imageUrl: "https://alpha-m2.mestores.com/pub/media/banner_01.jpg",
          action: "https",
          actionParam: "//www.mestores.com/en-sa/mestores-c-516",
        },
      ],
    },
    {
      type: "category",
      inner_type: "main_category",
      title: "",
      categories: [
        {
          id: "516",
          name: "Gaming Week ",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/Gaming-Week-Icon-AR.png",
          width: 270,
          height: 270,
        },
        {
          id: "430",
          name: "New Arrivals",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/11.png",
          width: 270,
          height: 270,
        },
        {
          id: "270",
          name: "TV",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/TV.png",
          width: 270,
          height: 270,
        },
        {
          id: "273",
          name: "Cameras",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/Cameras.png",
          width: 270,
          height: 270,
        },
        {
          id: "272",
          name: "Home Cinema & Audio",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/Cenimaa.png",
          width: 270,
          height: 270,
        },
        {
          id: "274",
          name: "Headphone and Audio",
          image:
            "https://alpha-m2.mestores.com/pub/media/catalog/category/Headphone.png",
          width: 270,
          height: 270,
        },
        {},
      ],
    },
    {
      type: "slider",
      title: "Televisions",
      products: [
        {
          id: "18065",
          sku: "VJZS14V3ME001P",
          labels: {
            plp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/3216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "1080",
                height: "1080",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1ValidGift1.png",
                position: "center_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "1080",
                height: "1080",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/ValidGift1.png",
                position: "center_bottom",
              },
            ],
          },
          name: "VAIO Z  Laptop 14 Inch i7 intel core 32GB RAM Win 10 Pro Black",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 354,
              is_parent: true,
              is_virtual: "false",
              position: 10,
              name: "VAIO",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 430,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "New Arrivals",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 18999.000501,
          price_rounded: 18999,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/v/a/vaio_z_product_002_.jpg",
          description:
            "The World’s First Contoured Carbon Fiber Laptop\nVAIO heralds a new era of ultra-durable laptop designs. Sporting a chassis comprising solely of carbon fiber – the material of the future previously only used in parts of a laptop, VAIO® Z unleashes the premium performance that hides within. The svelte and minimalistic chassis is precisely crafted to boast the natural aesthetic of carbon fiber and what it has to offer. Complementing its stunning outlook is superlative performance, making VAIO® Z more desirable inside and out.",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/v/a/vaio_z_product_002_.jpg",
                  url: null,
                  position: "1",
                  width: "2677",
                  height: "1785",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 2,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "VJZS14V3ME001P",
                labelArr: ["VJZS14V3ME001P"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4894811073249",
                labelArr: ["4894811073249"],
                id: "4894811073249",
              },
            },
            {
              filterable: false,
              code: "laptop_screen_size",
              visibility: false,
              attribute: {
                label: "screen size",
                id: 267,
              },
              selected_option: {
                label: "14",
                labelArr: ["14"],
                id: "14",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "VAIO Z  Laptop 14 Inch i7 intel core 32GB RAM Win 10 Pro Black",
                labelArr: [
                  "VAIO Z  Laptop 14 Inch i7 intel core 32GB RAM Win 10 Pro Black",
                ],
                id: "VAIO Z  Laptop 14 Inch i7 intel core 32GB RAM Win 10 Pro Black",
              },
            },
            {
              filterable: true,
              code: "brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 218,
              },
              selected_option: {
                label: "VAIO",
                labelArr: ["VAIO"],
                id: "605",
              },
            },
            {
              filterable: false,
              code: "internal_memory",
              visibility: true,
              attribute: {
                label: "Internal Memory",
                id: 223,
              },
              selected_option: {
                label: "32GB",
                labelArr: ["32GB"],
                id: "383",
              },
            },
            {
              filterable: true,
              code: "processor",
              visibility: true,
              attribute: {
                label: "Processor",
                id: 231,
              },
              selected_option: {
                label: "i7",
                labelArr: ["i7"],
                id: "610",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "30",
          meza: {
            points: 16521,
            money_equivalent: 496,
          },
          qitaf: {
            points: 950,
            money_equivalent: 284,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              JS15: "1.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "17787",
          sku: "VJE15V2ME027P",
          labels: {
            plp: [
              {
                type: "image",
                width: "1080",
                height: "1080",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1ValidGift.png",
                position: "center_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "1080",
                height: "1080",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/ValidGift.png",
                position: "center_bottom",
              },
            ],
          },
          name: "VAIO Laptop |15.6 | 8GB RAM | 512GB SSD Hard Disk | WINDOWS 10 | Backlit Keyboard |Silver",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 354,
              is_parent: true,
              is_virtual: "false",
              name: "VAIO",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 36,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 619,
              is_parent: true,
              is_virtual: "false",
              name: "VAIO ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 3499.001501,
          price_rounded: 3499,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/eee_1.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/eee_1.jpg",
                url: null,
                position: "1",
                width: "359",
                height: "322",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/eee_1.jpg",
                url: null,
                position: "1",
                width: "359",
                height: "322",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/eee_1.jpg",
                url: null,
                position: "1",
                width: "359",
                height: "322",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/eee_1.jpg",
                url: null,
                position: "1",
                width: "359",
                height: "322",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/e/e/ee_1.jpg",
                  url: null,
                  position: "3",
                  width: "776",
                  height: "517",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 20,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "VJE15V2ME027P",
                labelArr: ["VJE15V2ME027P"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "VAIO Laptop |15.6 | 8GB RAM | 512GB SSD Hard Disk | WINDOWS 10 | Backlit Keyboard |Silver",
                labelArr: [
                  "VAIO Laptop |15.6 | 8GB RAM | 512GB SSD Hard Disk | WINDOWS 10 | Backlit Keyboard |Silver",
                ],
                id: "VAIO Laptop |15.6 | 8GB RAM | 512GB SSD Hard Disk | WINDOWS 10 | Backlit Keyboard |Silver",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "estimated_time",
              visibility: false,
              attribute: {
                label: "Estimated Days",
                id: 341,
              },
              selected_option: {
                label: "3",
                labelArr: [3],
                id: "3",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "30",
          meza: {
            points: 3043,
            money_equivalent: 92,
          },
          qitaf: {
            points: 175,
            money_equivalent: 52,
          },
          custom_related_products: [
            "VJFE42F11W003P",
            "VJFE52F11W003P",
            "VJFE42F11W005P",
            "VJFE42F11W007P",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS04: "1.00000",
            },
            {
              RS06: "1.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              RS15: "3.00000",
            },
            {
              JS15: "3.00000",
            },
            {
              JS06: "3.00000",
            },
            {
              JS08: "1.00000",
            },
            {
              JS02: "2.00000",
            },
            {
              RS17: "3.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_keywords:
            "VJE15V2ME027P,sony vaio, vaio, laptop, laptops, new vaio, windows 10, new laptop, vaio laptop, فايو, لابتوب, سوني فايو, لابتوب جديد, لابتوبات, لابتوبات جديده, لابتوب فايو",
          bundle_discount_products: [],
          additional_estimated_day: 3,
        },
      ],
      total_count: 2,
      requested_count: 10,
      query_filter_param:
        "filterBy=sku:VJZS14V3ME001P&filterBy=sku:VJFE52F11W003P&filterBy=sku:VJFE42F11W003P&filterBy=sku:VJFE42F11W005P&filterBy=sku:VJE15V2ME027P",
      query_filter_param_and:
        "filterBy=sku:VJZS14V3ME001P&filterBy=sku:VJFE52F11W003P&filterBy=sku:VJFE42F11W003P&filterBy=sku:VJFE42F11W005P&filterBy=sku:VJE15V2ME027P",
    },
    {
      type: "slider",
      title: "Recently Viewed Products",
      products: [
        {
          id: "17215",
          sku: "KD-55X80J",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
          },
          name: "SONY Smart TV (Google TV)  55' X80J | 4K Ultra HD | High Dynamic Range (HDR) |KD-55X80J",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 270,
              is_parent: true,
              is_virtual: "false",
              position: 15,
              name: "TV",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 278,
              is_parent: true,
              is_virtual: "false",
              name: "Smart 4K TV",
              parent_id: "270",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 565,
              is_parent: true,
              is_virtual: "false",
              name: "2021 TV's ",
              parent_id: "270",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 601,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: " Offers",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 604,
              is_parent: true,
              is_virtual: "false",
              position: 1,
              name: "Gaming Tv's ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 20,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 614,
              is_parent: true,
              is_virtual: "false",
              name: "Tv's",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 625,
              is_parent: true,
              is_virtual: "false",
              name: "Free Gaming Chair With Gaming Tv ",
              parent_id: "270",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 626,
              is_parent: true,
              is_virtual: "false",
              name: "TV's Offers ",
              parent_id: "270",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 635,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "Gaming Offers And Bundels ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 3998.998501,
          price_rounded: 3999,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-11 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55x80j.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_6__1.png",
                  url: null,
                  position: "1",
                  width: "800",
                  height: "511",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_1__1.png",
                  url: null,
                  position: "2",
                  width: "660",
                  height: "622",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/2/_2__2_5.jpg",
                  url: null,
                  position: "2",
                  width: "540",
                  height: "540",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_2__1.png",
                  url: null,
                  position: "3",
                  width: "764",
                  height: "622",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_3__1.png",
                  url: null,
                  position: "4",
                  width: "800",
                  height: "501",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 22,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "KD-55X80J",
                labelArr: ["KD-55X80J"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "12468204",
                labelArr: ["12468204"],
                id: "12468204",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Smart TV (Google TV)  55' X80J | 4K Ultra HD | High Dynamic Range (HDR) |KD-55X80J",
                labelArr: [
                  "SONY Smart TV (Google TV)  55' X80J | 4K Ultra HD | High Dynamic Range (HDR) |KD-55X80J",
                ],
                id: "SONY Smart TV (Google TV)  55' X80J | 4K Ultra HD | High Dynamic Range (HDR) |KD-55X80J",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "3216.52",
                labelArr: [3216.52],
                id: "3216.52",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "21",
          meza: {
            points: 3478,
            money_equivalent: 105,
          },
          qitaf: {
            points: 200,
            money_equivalent: 59,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "1",
            },
            {
              KS03: "2.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              KS07: "1.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS03: "1.00000",
            },
            {
              RS06: "2.00000",
            },
            {
              RS09: "1.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              RS15: "1.00000",
            },
            {
              JS15: "1.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS07: "2.00000",
            },
            {
              JS02: "1.00000",
            },
            {
              JS01: "1.00000",
            },
            {
              RS17: "2.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "17596",
          sku: "KD-65X80J",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/3216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
          },
          name: "SONY Smart TV  (Google TV) X80J 65' | 4K Ultra HD | High Dynamic Range (HDR) | KD-65X80J",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 270,
              is_parent: true,
              is_virtual: "false",
              position: 21,
              name: "TV",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 430,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "New Arrivals",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 565,
              is_parent: true,
              is_virtual: "false",
              name: "2021 TV's ",
              parent_id: "270",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 601,
              is_parent: true,
              is_virtual: "false",
              position: 14,
              name: " Offers",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 604,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "Gaming Tv's ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 40,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 614,
              is_parent: true,
              is_virtual: "false",
              name: "Tv's",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 626,
              is_parent: true,
              is_virtual: "false",
              name: "TV's Offers ",
              parent_id: "270",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 5199.000501,
          price_rounded: 5199,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-11 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-65x80j.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_6_.png",
                  url: null,
                  position: "3",
                  width: "800",
                  height: "511",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_1_.png",
                  url: null,
                  position: "4",
                  width: "660",
                  height: "622",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_2_.png",
                  url: null,
                  position: "5",
                  width: "764",
                  height: "622",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/0/800x800_3_.png",
                  url: null,
                  position: "6",
                  width: "800",
                  height: "501",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 24,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "KD-65X80J",
                labelArr: ["KD-65X80J"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "12467804",
                labelArr: ["12467804"],
                id: "12467804",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Smart TV  (Google TV) X80J 65' | 4K Ultra HD | High Dynamic Range (HDR) | KD-65X80J",
                labelArr: [
                  "SONY Smart TV  (Google TV) X80J 65' | 4K Ultra HD | High Dynamic Range (HDR) | KD-65X80J",
                ],
                id: "SONY Smart TV  (Google TV) X80J 65' | 4K Ultra HD | High Dynamic Range (HDR) | KD-65X80J",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "4086.09",
                labelArr: [4086.09],
                id: "4086.09",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "21",
          meza: {
            points: 4521,
            money_equivalent: 136,
          },
          qitaf: {
            points: 260,
            money_equivalent: 77,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS03: "2.00000",
            },
            {
              KS04: "1",
            },
            {
              KS07: "1.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "2.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS15: "3.00000",
            },
            {
              JS15: "3.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS08: "1.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "2.00000",
            },
            {
              JS01: "1.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "12827",
          sku: "KD-55A8H",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "2160",
                height: "2160",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1X90J.png",
                position: "left_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "2160",
                height: "2160",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/X90J.png",
                position: "left_top",
              },
            ],
          },
          name: 'SONY Smart TV 55" A8H |  Android TV)| OLED | 4K Ultra HD | High Dynamic Range (HDR)   |  KD-55A8H  ',
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 270,
              is_parent: true,
              is_virtual: "false",
              position: 25,
              name: "TV",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 281,
              is_parent: true,
              is_virtual: "false",
              name: "Smart OLED TV",
              parent_id: "270",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 436,
              is_parent: true,
              is_virtual: "false",
              name: "TV",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 475,
              is_parent: true,
              is_virtual: "false",
              name: "Perfect for Gaming",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 479,
              is_parent: true,
              is_virtual: "false",
              name: "TV's",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 518,
              is_parent: true,
              is_virtual: "false",
              name: "TV's",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 568,
              is_parent: true,
              is_virtual: "false",
              name: "Euro Cup ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 570,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "June Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 601,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: " Offers",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 614,
              is_parent: true,
              is_virtual: "false",
              name: "Tv's",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 646,
              is_parent: true,
              is_virtual: "false",
              name: "TV",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 5199.000501,
          price_rounded: 5199,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-11 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_2_.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_front.jpg",
                  url: null,
                  position: "1",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_ccw.jpg",
                  url: null,
                  position: "2",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_btya2.jpg",
                  url: null,
                  position: "3",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_cw.jpg",
                  url: null,
                  position: "4",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_btya1.jpg",
                  url: null,
                  position: "5",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_bz.jpg",
                  url: null,
                  position: "6",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_back.jpg",
                  url: null,
                  position: "7",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/5/65_a8h_a8_blk_dark_sil_chevron_btyc.jpg",
                  url: null,
                  position: "8",
                  width: "2571",
                  height: "1714",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/r/m/rmf-tx500p_front.jpg",
                  url: null,
                  position: "9",
                  width: "3000",
                  height: "4200",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/k/d/kd-55a8h_3_.png",
                  url: null,
                  position: "10",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 34,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "KD-55A8H",
                labelArr: ["KD-55A8H"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736115866",
                labelArr: ["4548736115866"],
                id: "4548736115866",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "KD-55A8H_AF1",
                labelArr: ["KD-55A8H_AF1"],
                id: "KD-55A8H_AF1",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  'SONY Smart TV 55" A8H |  Android TV)| OLED | 4K Ultra HD | High Dynamic Range (HDR)   |  KD-55A8H  ',
                labelArr: [
                  'SONY Smart TV 55" A8H |  Android TV)| OLED | 4K Ultra HD | High Dynamic Range (HDR)   |  KD-55A8H  ',
                ],
                id: 'SONY Smart TV 55" A8H |  Android TV)| OLED | 4K Ultra HD | High Dynamic Range (HDR)   |  KD-55A8H  ',
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "4520.86",
                labelArr: [4520.86],
                id: "4520.86",
              },
            },
            {
              filterable: false,
              code: "hdr",
              visibility: true,
              attribute: {
                label: "High Dynamic Range",
                id: 233,
              },
              selected_option: {
                label: "4K HDR",
                labelArr: ["4K HDR"],
                id: "472",
              },
            },
            {
              filterable: false,
              code: "type_of_connection",
              visibility: true,
              attribute: {
                label: "Type of connection",
                id: 236,
              },
              selected_option: {
                label: "Wi-Fi / Bluetooth",
                labelArr: ["Wi-Fi / Bluetooth"],
                id: "481",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 218,
              },
              selected_option: {
                label: "SONY",
                labelArr: ["SONY"],
                id: "354",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "screen_size",
              visibility: true,
              attribute: {
                label: "Screen Size",
                id: 221,
              },
              selected_option: {
                label: "55",
                labelArr: ["55"],
                id: "450",
              },
            },
            {
              filterable: true,
              code: "operating_system",
              visibility: true,
              attribute: {
                label: "Operating System",
                id: 225,
              },
              selected_option: {
                label: "Smart TV",
                labelArr: ["Smart TV"],
                id: "478",
              },
            },
            {
              filterable: true,
              code: "processor",
              visibility: true,
              attribute: {
                label: "Processor",
                id: 231,
              },
              selected_option: {
                label: "X1 HDR Processor",
                labelArr: ["X1 HDR Processor"],
                id: "503",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "21",
          meza: {
            points: 4521,
            money_equivalent: 136,
          },
          qitaf: {
            points: 260,
            money_equivalent: 77,
          },
          custom_related_products: [
            "KLV-32R302E",
            "KDL-32W600D",
            "KD-77A9G",
            "KD-85Z8H",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS07: "2.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS06: "4.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS15: "4.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              JS08: "2.00000",
            },
            {
              JS07: "2.00000",
            },
            {
              JS02: "3.00000",
            },
            {
              JS01: "3.00000",
            },
            {
              RS17: "4.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title:
            "A8H | OLED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV)KD-55A8H",
          meta_keywords:
            "شاشات 4 كي      شاشات, تلفاز, شاشة, تلفزيون , تلفزيونات , شاشات كي 4 , شاشة 4k, بوصة , شاشة k , شاشات سوني , شاشات بلايستيشن, شاشات ps5 , شاشات , شاشه , تي في , شاشات افلام , تلفزيونات افلام , شاشات كبيرة , شاشة سمارت , سمارت تي في , عروض الشاشات , شاشة ب",
          meta_description:
            "Buy A8H | OLED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV) at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "17260",
          sku: "XR-65A80J",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/3216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1Asset10.png",
                position: "right_top",
              },
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "586",
                height: "286",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/FreeShahidEnglish01.jpeg",
                position: "left_bottom",
              },
            ],
          },
          name: 'SONY Smart TV 65" A80J |BRAVIA XR| ‏MASTER Series | ‏OLED |  4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)|XR-65A80J',
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 270,
              is_virtual: "false",
              position: 41,
              name: "TV",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 430,
              is_parent: true,
              is_virtual: "false",
              position: 10,
              name: "New Arrivals",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 458,
              is_parent: true,
              is_virtual: "false",
              name: "4K TV Gaming ",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 53,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 565,
              is_parent: true,
              is_virtual: "false",
              name: "2021 TV's ",
              parent_id: "270",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 568,
              is_parent: true,
              is_virtual: "false",
              name: "Euro Cup ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 604,
              is_parent: true,
              is_virtual: "false",
              name: "Gaming Tv's ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 626,
              is_parent: true,
              is_virtual: "false",
              name: "TV's Offers ",
              parent_id: "270",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 646,
              is_parent: true,
              is_virtual: "false",
              name: "TV",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 9698.996501,
          price_rounded: 9699,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-11 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
          description:
            "Extraordinary OLED pictures, as perceived by the human eye, Turn any sound into a truly immersive experience, Thousands of movies and shows, at the sound of your voice, Feel more depth and texture with pure blacks and dazzling light, A wide palette of naturally beautiful colors, The screen is the speaker, sound perfectly matches action",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j.png",
                  url: null,
                  position: "1",
                  width: "968",
                  height: "608",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_1.png",
                  url: null,
                  position: "2",
                  width: "1011",
                  height: "644",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_new_sony_tv_1.png",
                  url: null,
                  position: "3",
                  width: "1140",
                  height: "757",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_sony_2021_tv_1.png",
                  url: null,
                  position: "4",
                  width: "1133",
                  height: "751",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_sony_new_tv_1.png",
                  url: null,
                  position: "5",
                  width: "1136",
                  height: "752",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_sony_2021_1.png",
                  url: null,
                  position: "6",
                  width: "1133",
                  height: "749",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_sony_tv_1.png",
                  url: null,
                  position: "7",
                  width: "1137",
                  height: "749",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-55a80j_new_tv_1.png",
                  url: null,
                  position: "8",
                  width: "1119",
                  height: "746",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/x/r/xr-65a80j_2_.png",
                  url: null,
                  position: "9",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 24,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "XR-65A80J",
                labelArr: ["XR-65A80J"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  'SONY Smart TV 65" A80J |BRAVIA XR| ‏MASTER Series | ‏OLED |  4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)|XR-65A80J',
                labelArr: [
                  'SONY Smart TV 65" A80J |BRAVIA XR| ‏MASTER Series | ‏OLED |  4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)|XR-65A80J',
                ],
                id: 'SONY Smart TV 65" A80J |BRAVIA XR| ‏MASTER Series | ‏OLED |  4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Google TV)|XR-65A80J',
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "12487204",
                labelArr: ["12487204"],
                id: "12487204",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "XR65A80J",
                labelArr: ["XR65A80J"],
                id: "XR65A80J",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "7825.21",
                labelArr: [7825.21],
                id: "7825.21",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "21",
          meza: {
            points: 8434,
            money_equivalent: 254,
          },
          qitaf: {
            points: 485,
            money_equivalent: 145,
          },
          custom_related_products: [
            "HT-RT3",
            "XR-55A80J",
            "XR-65A90J",
            "XR-65X90J",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "2.00000",
            },
            {
              KS03: "2.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS03: "1.00000",
            },
            {
              RS06: "2.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS15: "1.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS08: "1.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "2.00000",
            },
            {
              JS01: "1.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title:
            "A80J ‏| BRAVIA XR | ‏MASTER Series | ‏OLED | | ‏4K بوضوح عال فائق | نطاق ديناميكي عالٍ (HDR) | تلفزيون ذكي (Google TV)",
          meta_keywords:
            "XR-65A80J,2021, new tvs, new generation,2021 tvs, 2021 tv,تلفزيونات 2021, سوني الجيل الجديد, تلفزيونات جديده, تلفزيون جديد, 65 بوصه,  شاشات, تلفاز, شاشة, تلفزيون , تلفزيونات , شاشات كي 4 , شاشة 4k, بوصة , شاشة k , شاشات سوني , شاشات بلايستيشن, شاشات ps5 ,",
          meta_description:
            "BRAVIA XR MASTER Series موديل A80J  إعادة تعريف OLED مع السطوع والذكاء البشري المذهلَين شاهد أفضل تلفزيون OLED لدينا على الإطلاق، مدعوم بمعالج Cognitive Processor XR™‎ الثوري. ويمكنك الاستمتاع بتباين لا مثيل له مع سطوع فائق وألوان سوداء نقية في تصميم Seam",
          bundle_discount_products: [],
        },
      ],

      total_count: 4,
      requested_count: 10,
      query_filter_param:
        "filterBy=sku:KD-55X80J&filterBy=sku:KD-55A8H&filterBy=sku:XR-65A80J&filterBy=sku:KD-65X80J",
      query_filter_param_and:
        "filterBy=sku:KD-55X80J&filterBy=sku:KD-55A8H&filterBy=sku:XR-65A80J&filterBy=sku:KD-65X80J",
    },
    {
      type: "single_banner",
      items: [
        {
          image_id: "",
          deeplinkUrl: "https://www.mestores.com/en-sa/ps5-accessories-c-431",
          imageUrl: "https://alpha-m2.mestores.com/pub/media/16.png",
          action: "https",
          actionParam: "//www.mestores.com/en-sa/ps5-accessories-c-431",
        },
      ],
    },
    {
      type: "slider",
      title: "New Arrivals",
      products: [
        {
          id: "18208",
          sku: "CFI-ZCT1/BLACK",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Wireless Controller | Black | PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              position: 2,
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 10,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 555,
              is_parent: true,
              is_virtual: "false",
              name: "PS5",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 569,
              is_parent: true,
              is_virtual: "false",
              position: 1,
              name: "PS5 Accessories & Games ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 573,
              is_virtual: "false",
              position: 2,
              name: "PS5 Accessories",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 574,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "Dualsense",
              parent_id: "573",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 603,
              is_parent: true,
              is_virtual: "false",
              name: "Others ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 636,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "PS5 Accessories ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 349.002001,
          price_rounded: 349,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2022-01-23 00:00:00",
          discounted_price_to: "2022-01-31 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/h/q/hqdefault_7.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_2.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_2.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-midnight-black-screenshot-03-en-10may21.jpg",
                  url: null,
                  position: "1",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-midnight-black-screenshot-02-en-10may21.jpg",
                  url: null,
                  position: "2",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-midnight-black-screenshot-04-en-10may21.jpg",
                  url: null,
                  position: "3",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
              ],
            },
            "external-video": [
              {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/h/q/hqdefault_7.jpg",
                url: "https://www.youtube.com/watch?v=SebzB8W3bVU",
                position: "0",
                width: "480",
                height: "360",
                type: "video",
              },
            ],
          },
          stock: 111,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "CFI-ZCT1/BLACK",
                labelArr: ["CFI-ZCT1/BLACK"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Wireless Controller | Black | PS5",
                labelArr: ["PlayStation Wireless Controller | Black | PS5"],
                id: "PlayStation Wireless Controller | Black | PS5",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "300",
                labelArr: [300],
                id: "300",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 304,
            money_equivalent: 10,
          },
          qitaf: {
            points: 18,
            money_equivalent: 5,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "1",
            },
            {
              KS03: "10.00000",
            },
            {
              KS04: "10.00000",
            },
            {
              KS07: "3.00000",
            },
            {
              KS08: "10.00000",
            },
            {
              RS03: "3.00000",
            },
            {
              RS06: "4.00000",
            },
            {
              RS09: "5.00000",
            },
            {
              RS11: "9.00000",
            },
            {
              RS15: "10.00000",
            },
            {
              JS15: "10.00000",
            },
            {
              JS06: "5.00000",
            },
            {
              JS08: "6.00000",
            },
            {
              JS07: "2.00000",
            },
            {
              JS02: "5.00000",
            },
            {
              JS01: "7.00000",
            },
            {
              RS17: "11.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "DUALSENSE WIRELESS CONTROLLER - BLACK CFI-ZCT1/BLACK",
          meta_keywords:
            "DUALSENSE WIRELESS CONTROLLER - BLACK ,CFI-ZCT1/BLACK",
          meta_description:
            "Buy DUALSENSE WIRELESS CONTROLLER - BLACK  at mestores.com",
          relatedChannels: ["0"],
          bundle_discount_products: [],
        },
        {
          id: "18212",
          sku: "CFI-ZCT1/RED",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Wireless Controller |Red | PS5 ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              position: 3,
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 9,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 555,
              is_parent: true,
              is_virtual: "false",
              name: "PS5",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 569,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "PS5 Accessories & Games ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 573,
              is_virtual: "false",
              position: 3,
              name: "PS5 Accessories",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 574,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "Dualsense",
              parent_id: "573",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 603,
              is_parent: true,
              is_virtual: "false",
              name: "Others ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 636,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "PS5 Accessories ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 369.000501,
          price_rounded: 369,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
                url: null,
                position: "0",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/a/r/artboard_1_1_.png",
                  url: null,
                  position: "0",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-cosmic-red-screenshot-03-en-10may21.jpg",
                  url: null,
                  position: "1",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-cosmic-red-screenshot-02-en-10may21.jpg",
                  url: null,
                  position: "2",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-cosmic-red-screenshot-04-en-10may21.jpg",
                  url: null,
                  position: "3",
                  width: "1600",
                  height: "1067",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 109,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "CFI-ZCT1/RED",
                labelArr: ["CFI-ZCT1/RED"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Wireless Controller |Red | PS5 ",
                labelArr: ["PlayStation Wireless Controller |Red | PS5 "],
                id: "PlayStation Wireless Controller |Red | PS5 ",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Red",
                labelArr: ["Red"],
                id: "58",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 321,
            money_equivalent: 10,
          },
          qitaf: {
            points: 19,
            money_equivalent: 5,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "5.00000",
            },
            {
              KS03: "10.00000",
            },
            {
              KS04: "9.00000",
            },
            {
              KS07: "3.00000",
            },
            {
              KS08: "10.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "5.00000",
            },
            {
              RS09: "5.00000",
            },
            {
              RS11: "10.00000",
            },
            {
              RS15: "9.00000",
            },
            {
              JS15: "10.00000",
            },
            {
              JS06: "5.00000",
            },
            {
              JS08: "5.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "5.00000",
            },
            {
              JS01: "6.00000",
            },
            {
              RS17: "9.00000",
            },
          ],
          hex_code: ["#ff0000"],
          meta_title: "DUALSENSE WIRELESS CONTROLLER - RED CFI-ZCT1/RED",
          meta_keywords: "DUALSENSE WIRELESS CONTROLLER - RED ,CFI-ZCT1/RED",
          meta_description:
            "Buy DUALSENSE WIRELESS CONTROLLER - RED  at mestores.com",
          relatedChannels: ["0"],
          bundle_discount_products: [],
        },
        {
          id: "19267",
          sku: "RET-PS5-FIFA22",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Game |FIFA 22  Standard Edition | PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 344,
              is_parent: true,
              is_virtual: "false",
              position: 5,
              name: "Pre-Order Products",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_virtual: "false",
              position: 22,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 633,
              is_parent: true,
              is_virtual: "false",
              name: "Pre-order Games ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 299.000001,
          price_rounded: 299,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps5_002_.jpg",
                  url: null,
                  position: "1",
                  width: "1525",
                  height: "1900",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 0,
          orderType: "pre-order",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "RET-PS5-FIFA22",
                labelArr: ["RET-PS5-FIFA22"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "5030942124781",
                labelArr: ["5030942124781"],
                id: "5030942124781",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Game |FIFA 22  Standard Edition | PS5",
                labelArr: ["PlayStation Game |FIFA 22  Standard Edition | PS5"],
                id: "PlayStation Game |FIFA 22  Standard Edition | PS5",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 260,
            money_equivalent: 8,
          },
          qitaf: {
            points: 15,
            money_equivalent: 4,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [],
          hex_code: ["#000000"],
          meta_title:
            "PlayStation Game |FIFA 22  Standard Edition | PS5RET-PS5-FIFA22",
          meta_keywords:
            "PlayStation Game |FIFA 22  Standard Edition | PS5,RET-PS5-FIFA22",
          meta_description:
            "Buy PlayStation Game |FIFA 22  Standard Edition | PS5 at mestores.com",
          relatedChannels: ["0"],
          bundle_discount_products: [],
        },
        {
          id: "19268",
          sku: "RET-PS4-FIFA22",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Game |FIFA 22  Standard Edition | PS4",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 344,
              is_parent: true,
              is_virtual: "false",
              position: 6,
              name: "Pre-Order Products",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_virtual: "false",
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 633,
              is_parent: true,
              is_virtual: "false",
              name: "Pre-order Games ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 268.996501,
          price_rounded: 269,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
                url: null,
                position: "1",
                width: "1525",
                height: "1900",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/f/i/fifa22_ps4_002_.jpg",
                  url: null,
                  position: "1",
                  width: "1525",
                  height: "1900",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 0,
          orderType: "pre-order",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "RET-PS4-FIFA22",
                labelArr: ["RET-PS4-FIFA22"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "5030948123771",
                labelArr: ["5030948123771"],
                id: "5030948123771",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Game |FIFA 22  Standard Edition | PS4",
                labelArr: ["PlayStation Game |FIFA 22  Standard Edition | PS4"],
                id: "PlayStation Game |FIFA 22  Standard Edition | PS4",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 234,
            money_equivalent: 8,
          },
          qitaf: {
            points: 14,
            money_equivalent: 4,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [],
          hex_code: ["#000000"],
          meta_title:
            "PlayStation Game |FIFA 22  Standard Edition | PS4RET-PS4-FIFA22",
          meta_keywords:
            "PlayStation Game |FIFA 22  Standard Edition | PS4,RET-PS4-FIFA22",
          meta_description:
            "Buy PlayStation Game |FIFA 22  Standard Edition | PS4 at mestores.com",
          relatedChannels: ["0"],
          bundle_discount_products: [],
        },
        {
          id: "17734",
          sku: "SC-PS5-RATCHET",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Game |Ratchet & Clank | PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_parent: true,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_virtual: "false",
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 583,
              is_parent: true,
              is_virtual: "false",
              position: 11,
              name: "PS5 Games",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 634,
              is_parent: true,
              is_virtual: "false",
              name: "New Games",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 299.000001,
          price_rounded: 299,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/g/h/gh_1.jpg",
                  url: null,
                  position: "0",
                  width: "500",
                  height: "500",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 75,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "SC-PS5-RATCHET",
                labelArr: ["SC-PS5-RATCHET"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "711719826798",
                labelArr: ["711719826798"],
                id: "711719826798",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Game |Ratchet & Clank | PS5",
                labelArr: ["PlayStation Game |Ratchet & Clank | PS5"],
                id: "PlayStation Game |Ratchet & Clank | PS5",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 260,
            money_equivalent: 8,
          },
          qitaf: {
            points: 15,
            money_equivalent: 4,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "5.00000",
            },
            {
              KS03: "5.00000",
            },
            {
              KS04: "5.00000",
            },
            {
              KS07: "4.00000",
            },
            {
              KS08: "5.00000",
            },
            {
              RS03: "3.00000",
            },
            {
              RS06: "5.00000",
            },
            {
              RS09: "5.00000",
            },
            {
              RS11: "5.00000",
            },
            {
              RS15: "5.00000",
            },
            {
              JS15: "5.00000",
            },
            {
              JS06: "3.00000",
            },
            {
              JS08: "4.00000",
            },
            {
              JS07: "3.00000",
            },
            {
              JS02: "4.00000",
            },
            {
              JS01: "3.00000",
            },
            {
              RS17: "6.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "12883",
          sku: "CFI-ZMR1",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Media Controller | PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              position: 12,
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_virtual: "false",
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 555,
              is_parent: true,
              is_virtual: "false",
              name: "PS5",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 569,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 Accessories & Games ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 573,
              is_virtual: "false",
              position: 7,
              name: "PS5 Accessories",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 578,
              is_parent: true,
              is_virtual: "false",
              name: "Media Remote",
              parent_id: "573",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 636,
              is_parent: true,
              is_virtual: "false",
              position: 6,
              name: "PS5 Accessories ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 149.005501,
          price_rounded: 149.01,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-10-19 00:00:00",
          discounted_price_to: "2021-10-29 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
          description:
            "<p>Conveniently control movies, streaming services4 and more on your PS5 console with an intuitive layout.</p>\r\n<p>Effortlessly control a wide range of blockbuster entertainment on PS5™.</p>\r\n<p>Quickly navigate media with built-in play/pause, fast forward and fast reverse buttons. </p>\r\n<p>Power on your PS5 console and navigate its menus directly with the remote for ultimate convenience.</p>\r\n<p>Adjust the volume and power settings of compatible TVs with the built-in IR transmitter2</p>",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_1.jpg",
                  url: null,
                  position: "1",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/m/e/media_remoteartboard_2.jpg",
                  url: null,
                  position: "2",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 123,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "CFI-ZMR1",
                labelArr: ["CFI-ZMR1"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation®5 Media Controller",
                labelArr: ["PlayStation®5 Media Controller"],
                id: "PlayStation®5 Media Controller",
              },
            },
            {
              filterable: true,
              code: "limit_product_quantity",
              visibility: false,
              attribute: {
                label: "Quantity Limit Per Customer",
                id: 290,
              },
              selected_option: {
                label: "2",
                labelArr: ["2"],
                id: "2",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "120",
                labelArr: [120],
                id: "120",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "White",
                labelArr: ["White"],
                id: "59",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 130,
            money_equivalent: 4,
          },
          qitaf: {
            points: 8,
            money_equivalent: 2,
          },
          custom_related_products: [
            "CFI-ZCT1/WHITE",
            "SC-PS5-DSOULS",
            "CFI-ZEY1",
            "CFI-1016B",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "7.00000",
            },
            {
              KS03: "9.00000",
            },
            {
              KS04: "6.00000",
            },
            {
              KS07: "4.00000",
            },
            {
              KS08: "10.00000",
            },
            {
              RS03: "5.00000",
            },
            {
              RS06: "5.00000",
            },
            {
              RS09: "7.00000",
            },
            {
              RS11: "10.00000",
            },
            {
              RS15: "10.00000",
            },
            {
              JS15: "10.00000",
            },
            {
              JS06: "5.00000",
            },
            {
              JS08: "7.00000",
            },
            {
              JS07: "5.00000",
            },
            {
              JS02: "7.00000",
            },
            {
              JS01: "7.00000",
            },
            {
              RS17: "9.00000",
            },
          ],
          hex_code: ["#ffffff"],
          meta_title: "PlayStation®5 Media ControllerCFI-ZMR1",
          meta_keywords:
            "PlayStation®5 Media Controller,CFI-ZMR1,ps5 controller, ps controller, ريموت بلايستيشن, ريموت بلايستيشن5, جهاز تحكم, جهاز تحكم بلايستيشن, جهاز تحكم بلايستيشن, جهاز تحكم, ",
          meta_description:
            "Buy PlayStation®5 Media Controller at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "12811",
          sku: "CFI-ZCT1/WHITE",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Wireless Controller | White | PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              position: 13,
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 516,
              is_parent: true,
              is_virtual: "false",
              position: 17,
              name: "Gaming Week ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 553,
              is_parent: true,
              is_virtual: "false",
              name: "special offer ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 555,
              is_parent: true,
              is_virtual: "false",
              name: "PS5",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 569,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 Accessories & Games ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 573,
              is_virtual: "false",
              position: 1,
              name: "PS5 Accessories",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 574,
              is_parent: true,
              is_virtual: "false",
              position: 1,
              name: "Dualsense",
              parent_id: "573",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 603,
              is_parent: true,
              is_virtual: "false",
              name: "Others ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 636,
              is_parent: true,
              is_virtual: "false",
              position: 1,
              name: "PS5 Accessories ",
              parent_id: "516",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 349.002001,
          price_rounded: 349,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-10-19 00:00:00",
          discounted_price_to: "2021-10-28 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
          description:
            "<p><strong>Bring gaming worlds to life</strong></p>\r\n<p>o        Feel your in-game actions and environment simulated through haptic feedback<sup>2</sup>.</p>\r\n<p>o        Experience varying force and tension at your fingertips with adaptive triggers<sup>2</sup>.</p>\r\n<p> </p>\r\n<p><strong>Find your voice, share your passion</strong></p>\r\n<p>o        Chat online through the built-in microphone<sup>3</sup>.</p>\r\n<p>o        Connect a headset directly via the 3.5mm jack.</p>\r\n<p>o        Switch voice capture on and off using the dedicated mute button.</p>\r\n<p>o        Record and broadcast your epic gaming moments with the create button<sup>3</sup>.</p>\r\n<p> </p>\r\n<p><strong>A gaming icon in your hands</strong></p>\r\n<p>o        Enjoy a comfortable, evolved design with an iconic layout and enhanced sticks.</p>\r\n<p>o        Charge and play with a built-in battery and USB Type-C® port<sup>4</sup>.</p>\r\n<ul>\r\n<li>Intuitively interact with select games using the integrated motion sensor.</li>\r\n<li>Hear higher-fidelity<sup>1</sup> sound effects through the built-in speaker in supported games.</li>\r\n</ul>",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
                url: null,
                position: "1",
                width: "1200",
                height: "800",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
                url: null,
                position: "1",
                width: "1200",
                height: "800",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
                url: null,
                position: "1",
                width: "1200",
                height: "800",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
                url: null,
                position: "1",
                width: "1200",
                height: "800",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense1200x800.jpg",
                  url: null,
                  position: "1",
                  width: "1200",
                  height: "800",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-screenshotsartboard_4.jpg",
                  url: null,
                  position: "2",
                  width: "890",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-screenshotsartboard_2.jpg",
                  url: null,
                  position: "3",
                  width: "890",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/d/u/dualsense-screenshotsartboard_3.jpg",
                  url: null,
                  position: "4",
                  width: "890",
                  height: "500",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 612,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "CFI-ZCT1/WHITE",
                labelArr: ["CFI-ZCT1/WHITE"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "DualSense™ wireless controller",
                labelArr: ["DualSense™ wireless controller"],
                id: "DualSense™ wireless controller",
              },
            },
            {
              filterable: true,
              code: "limit_product_quantity",
              visibility: false,
              attribute: {
                label: "Quantity Limit Per Customer",
                id: 290,
              },
              selected_option: {
                label: "2",
                labelArr: ["2"],
                id: "2",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "100",
                labelArr: [100],
                id: "100",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "White",
                labelArr: ["White"],
                id: "59",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 304,
            money_equivalent: 10,
          },
          qitaf: {
            points: 18,
            money_equivalent: 5,
          },
          custom_related_products: [
            "CFI-1016A",
            "SC-PS5-MSMMORALES",
            "CFI-ZEY1",
            "CFI-ZWH1",
          ],
          enable_shipping: true,
          cross_sell_products: [
            "CFI-1016A",
            "SC-PS5-DSOULS",
            "SC-PS5-SACKBOY",
            "SC-PS5-MSMMORALES",
          ],
          inventory_qty: [
            {
              KS01: "30.00000",
            },
            {
              KS03: "36.00000",
            },
            {
              KS04: "35.00000",
            },
            {
              KS07: "20.00000",
            },
            {
              KS08: "41.00000",
            },
            {
              RS03: "35.00000",
            },
            {
              RS06: "25.00000",
            },
            {
              RS09: "42.00000",
            },
            {
              RS11: "47.00000",
            },
            {
              RS15: "47.00000",
            },
            {
              JS15: "51.00000",
            },
            {
              JS06: "20.00000",
            },
            {
              JS08: "32.00000",
            },
            {
              JS07: "20.00000",
            },
            {
              JS02: "40.00000",
            },
            {
              JS01: "40.00000",
            },
            {
              RS17: "51.00000",
            },
          ],
          hex_code: ["#ffffff"],
          meta_title: "DualSense™ wireless controllertina-Ps5-controller ",
          meta_keywords:
            "DualSense™ wireless controller,tina-Ps5-controller, ps5, playstation5, ps conroller, playstation5 controller, يد تحكم, يد بلايستيشن, يد بلايستيشن5 , بلايستيشن, بلايستيشن5 , ",
          meta_description:
            "Buy DualSense™ wireless controller at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "19010",
          sku: "GK-51313",
          labels: {
            plp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/3216.png",
                position: "right_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/216.png",
                position: "right_bottom",
              },
            ],
          },
          name: "Playstation GamerTek  | PS5 Bag ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_parent: true,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 313,
              is_parent: true,
              is_virtual: "false",
              name: "Playstation Accessories",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 149.005501,
          price_rounded: 149.01,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/b/a/bag_-_side.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/b/a/bag_-_side.jpg",
                  url: null,
                  position: "0",
                  width: "2252",
                  height: "2514",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/b/a/bag_front.jpg",
                  url: null,
                  position: "1",
                  width: "2532",
                  height: "2820",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/i/side_view_-_full.jpg",
                  url: null,
                  position: "2",
                  width: "2589",
                  height: "3179",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/i/side_-_full.jpg",
                  url: null,
                  position: "3",
                  width: "3024",
                  height: "2521",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/i/side_view.jpg",
                  url: null,
                  position: "4",
                  width: "2832",
                  height: "3456",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/o/top_-_close_up.jpg",
                  url: null,
                  position: "5",
                  width: "3024",
                  height: "3818",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/o/top_-_acc.jpg",
                  url: null,
                  position: "8",
                  width: "2705",
                  height: "3702",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/o/top_-_full.jpg",
                  url: null,
                  position: "9",
                  width: "3024",
                  height: "3397",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/o/top_-_empty.jpg",
                  url: null,
                  position: "10",
                  width: "3024",
                  height: "4032",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/i/side_-_empty.jpg",
                  url: null,
                  position: "11",
                  width: "2806",
                  height: "2991",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/c/l/close_up_1.jpg",
                  url: null,
                  position: "12",
                  width: "3024",
                  height: "4032",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/c/l/close_up_2.jpg",
                  url: null,
                  position: "13",
                  width: "3024",
                  height: "4032",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 37,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "GK-51313",
                labelArr: ["GK-51313"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "616985063598",
                labelArr: ["616985063598"],
                id: "616985063598",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "Playstation GamerTek  | PS5 Bag ",
                labelArr: ["Playstation GamerTek  | PS5 Bag "],
                id: "Playstation GamerTek  | PS5 Bag ",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 130,
            money_equivalent: 4,
          },
          qitaf: {
            points: 8,
            money_equivalent: 2,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "5.00000",
            },
            {
              KS03: "3.00000",
            },
            {
              KS04: "3.00000",
            },
            {
              KS07: "3.00000",
            },
            {
              KS08: "3.00000",
            },
            {
              RS03: "3.00000",
            },
            {
              RS06: "3.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "5.00000",
            },
            {
              RS15: "3.00000",
            },
            {
              JS02: "1.00000",
            },
            {
              RS17: "3.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "12815",
          sku: "SC-PS5-MSMMORALES",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Game |Spider-Man Miles Morales| PS5",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 312,
              is_parent: true,
              is_virtual: "false",
              name: "Video Games",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 431,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 & Accessories ",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 567,
              is_parent: true,
              is_virtual: "false",
              name: "Days of play",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 569,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 Accessories & Games ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 583,
              is_parent: true,
              is_virtual: "false",
              name: "PS5 Games",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 218.994501,
          price_rounded: 218.99,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-05-30 00:00:00",
          discounted_price_to: "2021-06-09 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/p/s/ps5_msmmm_packshot_2d_ksa.png",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/0/1080x1080-spiderman-miles.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/0/1080x1080-spiderman-miles.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/0/1080x1080-spiderman-miles.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/0/1080x1080-spiderman-miles.jpg",
                url: null,
                position: "1",
                width: "1080",
                height: "1080",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/0/1080x1080-spiderman-miles.jpg",
                  url: null,
                  position: "1",
                  width: "1080",
                  height: "1080",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/p/s/ps5_msmmm_packshot_2d_ksa.png",
                  url: null,
                  position: "2",
                  width: "1955",
                  height: "2259",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 79,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "SC-PS5-MSMMORALES",
                labelArr: ["SC-PS5-MSMMORALES"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Game |Spider-Man Miles Morales| PS5",
                labelArr: ["PlayStation Game |Spider-Man Miles Morales| PS5"],
                id: "PlayStation Game |Spider-Man Miles Morales| PS5",
              },
            },
            {
              filterable: true,
              code: "limit_product_quantity",
              visibility: false,
              attribute: {
                label: "Quantity Limit Per Customer",
                id: 290,
              },
              selected_option: {
                label: "2",
                labelArr: ["2"],
                id: "2",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "155.65",
                labelArr: [155.65],
                id: "155.65",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "34",
          meza: {
            points: 191,
            money_equivalent: 6,
          },
          qitaf: {
            points: 11,
            money_equivalent: 3,
          },
          custom_related_products: [
            "CFI-1016A",
            "CFI-ZCT1/WHITE",
            "SC-PS5-DSOULS",
          ],
          enable_shipping: true,
          cross_sell_products: ["SC-PS5-DSOULS", "SC-PS5-SACKBOY"],
          inventory_qty: [
            {
              KS01: "3.00000",
            },
            {
              KS03: "8.00000",
            },
            {
              KS04: "5.00000",
            },
            {
              KS07: "2.00000",
            },
            {
              KS08: "5.00000",
            },
            {
              RS03: "3.00000",
            },
            {
              RS06: "5.00000",
            },
            {
              RS09: "4.00000",
            },
            {
              RS11: "8.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS15: "6.00000",
            },
            {
              JS06: "3.00000",
            },
            {
              JS08: "6.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "4.00000",
            },
            {
              JS01: "7.00000",
            },
            {
              RS17: "7.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "Marvel's Spider-Man Miles MoralesSC-PS4-MSMMORALES",
          meta_keywords:
            "Marvel's Spider-Man Miles Morales,SC-PS4-MSMMORALES, playstation5, playstation,ps5,ps, بلايستيشن5, بلايستيشن",
          meta_description:
            "Buy Marvel's Spider-Man Miles Morales at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "18202",
          sku: "T2-PS4-HADES",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "PlayStation Game |HADES | PS4",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 275,
              is_parent: true,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 312,
              is_parent: true,
              is_virtual: "false",
              name: "Video Games",
              parent_id: "275",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 584,
              is_parent: true,
              is_virtual: "false",
              name: "PS4 Games",
              parent_id: "275",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 139.000501,
          price_rounded: 139,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
                url: null,
                position: "0",
                width: "500",
                height: "500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3__1.jpg",
                  url: null,
                  position: "0",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/x/_x90j_3_.jpg",
                  url: null,
                  position: "1",
                  width: "540",
                  height: "540",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 20,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "T2-PS4-HADES",
                labelArr: ["T2-PS4-HADES"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "5026555429207",
                labelArr: ["5026555429207"],
                id: "5026555429207",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "PlayStation Game |HADES | PS4",
                labelArr: ["PlayStation Game |HADES | PS4"],
                id: "PlayStation Game |HADES | PS4",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "17",
          meza: {
            points: 121,
            money_equivalent: 4,
          },
          qitaf: {
            points: 7,
            money_equivalent: 2,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "2.00000",
            },
            {
              KS03: "2.00000",
            },
            {
              KS08: "2.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS11: "2.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS15: "2.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              JS08: "2.00000",
            },
            {
              RS17: "2.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
      ],
      total_count: 13,
      requested_count: 10,
      query_filter_param:
        "filterBy=sku:GK-51313&filterBy=sku:RET-PS5-FIFA22&filterBy=sku:RET-PS4-FIFA22&filterBy=sku:SC-PS5-MSMMORALES&filterBy=sku:CFI-ZMR1&filterBy=sku:CFI-ZCT1/BLACK&filterBy=sku:CFI-ZCT1/RED&filterBy=sku:55X9+1016A-MSMM-DS&filterBy=sku:SC-PS5-RATCHET&filterBy=sku:CFI-ZCT1/WHITE&filterBy=sku:T2-PS4-HADES&filterBy=sku:CFI-ZWH1&filterBy=sku:RET-PS4-B4BLOOD&filterBy=sku:RET-PS5-B4BLOOD",
      query_filter_param_and:
        "filterBy=sku:GK-51313&filterBy=sku:RET-PS5-FIFA22&filterBy=sku:RET-PS4-FIFA22&filterBy=sku:SC-PS5-MSMMORALES&filterBy=sku:CFI-ZMR1&filterBy=sku:CFI-ZCT1/BLACK&filterBy=sku:CFI-ZCT1/RED&filterBy=sku:55X9+1016A-MSMM-DS&filterBy=sku:SC-PS5-RATCHET&filterBy=sku:CFI-ZCT1/WHITE&filterBy=sku:T2-PS4-HADES&filterBy=sku:CFI-ZWH1&filterBy=sku:RET-PS4-B4BLOOD&filterBy=sku:RET-PS5-B4BLOOD",
    },
    {
      type: "slider",
      title: "Top Trending",
      products: [
        {
          id: "18338",
          sku: "WH-1000XM4/W",
          labels: {
            plp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/3216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "1620",
                height: "1620",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1ThisItemWillBeVale4.png",
                position: "center_bottom",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "3240",
                height: "3240",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/216.png",
                position: "right_bottom",
              },
              {
                type: "image",
                width: "1620",
                height: "1620",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/ThisItemWillBeVale4.png",
                position: "center_bottom",
              },
            ],
          },
          name: " SONY Wireless Noise Cancelling Headphones | WH-1000XM4/W",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 1,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 430,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "New Arrivals",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 12,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 613,
              is_parent: true,
              is_virtual: "false",
              name: "HeadPhones & Spikers ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 1898.995001,
          price_rounded: 1899,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2022-01-23 00:00:00",
          discounted_price_to: "2022-01-31 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
          description:
            "ONLY MUSIC.NOTHING ELSE.\nIt’s just you and your music with the WH-1000XM4 headphones. The easy way to enjoy less noise and even purer sound, with smart listening technology that automatically personalises your experience\nIndustry-leading noise cancellation\nWhether you’re flying long-haul or relaxing in a café, the WH-1000XM4 headphones deliver our best ever noise cancelling performance, keeping out even more high and mid frequency sounds",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
                url: null,
                position: "6",
                width: "600",
                height: "523",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
                url: null,
                position: "6",
                width: "600",
                height: "523",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
                url: null,
                position: "6",
                width: "600",
                height: "523",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
                url: null,
                position: "6",
                width: "600",
                height: "523",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_001_wh-1000xm4-w_1.png.png",
                  url: null,
                  position: "6",
                  width: "600",
                  height: "523",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_002_wh-1000xm4-w.png.png",
                  url: null,
                  position: "7",
                  width: "600",
                  height: "523",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_003_wh-1000xm4-w.png.png",
                  url: null,
                  position: "8",
                  width: "600",
                  height: "523",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_004_wh-1000xm4-w.png.png",
                  url: null,
                  position: "9",
                  width: "600",
                  height: "523",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/t/h/thumbnails_large__default_upload_bucket_005_wh-1000xm4-w.png.png",
                  url: null,
                  position: "10",
                  width: "600",
                  height: "523",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 6,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WH-1000XM4/W",
                labelArr: ["WH-1000XM4/W"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  " SONY Wireless Noise Cancelling Headphones | WH-1000XM4/W",
                labelArr: [
                  " SONY Wireless Noise Cancelling Headphones | WH-1000XM4/W",
                ],
                id: " SONY Wireless Noise Cancelling Headphones | WH-1000XM4/W",
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736119048",
                labelArr: ["4548736119048"],
                id: "4548736119048",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "1600",
                labelArr: [1600],
                id: "1600",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 1652,
            money_equivalent: 50,
          },
          qitaf: {
            points: 95,
            money_equivalent: 28,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "2.00000",
            },
            {
              RS11: "2.00000",
            },
            {
              JS15: "2.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "17939",
          sku: "WF-1000XM4/S",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Headphones Wireless Noise-Cancelling | Silver | WF-1000XM4/S",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 2,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 3,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 1299.005501,
          price_rounded: 1299.01,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_01.jpg",
          description:
            "Adaptive Sound Control automatically adjusts to your situation. WF-1000XM4 truly wireless headphones combine Evolved Digital Noise Cancelling with Integrated Processor V1, Sound quality with High-Resolution Audio Wireless,  Smart listening and clear call quality, Ergonomic surface design for stable fit, Water resistant and long battery life for everyday use.",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_01.jpg",
                  url: null,
                  position: "1",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_02.jpg",
                  url: null,
                  position: "2",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_03.jpg",
                  url: null,
                  position: "3",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_04.jpg",
                  url: null,
                  position: "4",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_05.jpg",
                  url: null,
                  position: "5",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_06.jpg",
                  url: null,
                  position: "6",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_s_07.jpg",
                  url: null,
                  position: "7",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 21,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WF-1000XM4/S",
                labelArr: ["WF-1000XM4/S"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736121201",
                labelArr: ["4548736121201"],
                id: "4548736121201",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Headphones Wireless Noise-Cancelling | Silver | WF-1000XM4/S",
                labelArr: [
                  "SONY Headphones Wireless Noise-Cancelling | Silver | WF-1000XM4/S",
                ],
                id: "SONY Headphones Wireless Noise-Cancelling | Silver | WF-1000XM4/S",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 1130,
            money_equivalent: 34,
          },
          qitaf: {
            points: 65,
            money_equivalent: 19,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS03: "1.00000",
            },
            {
              KS04: "2.00000",
            },
            {
              KS07: "1.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "1.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS07: "3.00000",
            },
            {
              JS02: "3.00000",
            },
            {
              JS01: "3.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "7250",
          sku: "WH-XB900/L",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Headphones Wireless Noise-Cancelling Bluetooth | Blue | WH-XB900/L",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_virtual: "false",
              position: 3,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 305,
              is_parent: true,
              is_virtual: "false",
              name: "Bluetooth Headphone & Earphone",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 326,
              is_parent: true,
              is_virtual: "false",
              name: "Weekly Offers",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 363,
              is_virtual: "false",
              name: "PlayStation",
              parent_id: "359",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 368,
              is_virtual: "false",
              name: "SONY Cameras",
              parent_id: "359",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 370,
              is_virtual: "false",
              name: "SONY Headphones & Audio",
              parent_id: "359",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 402,
              is_virtual: "false",
              name: "SONY Audio systems",
              parent_id: "370",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 459,
              is_virtual: "false",
              name: "Employee Clearance ",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 461,
              is_parent: true,
              is_virtual: "false",
              name: "TV - Clearance",
              parent_id: "459",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 462,
              is_parent: true,
              is_virtual: "false",
              name: "Audio - Clearance",
              parent_id: "459",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 13,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 613,
              is_parent: true,
              is_virtual: "false",
              name: "HeadPhones & Spikers ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 17,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 798.997001,
          price_rounded: 799,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
          description:
            '<ul>\r\n<li>Feel the power of EXTRA BASS</li>\r\n<li><span class="a-list-item"> Next-level digital noise cancelling technology </span></li>\r\n<li><span class="a-list-item"> Get up to 30 hours of battery life </span></li>\r\n<li><span class="a-list-item"> Touch Sensor controls to pause,play,skip tracks, control volume, activate your voice assistant, and answer phone calls </span></li>\r\n<li><span class="a-list-item"> Quick Attention Mode for effortless conversations without taking your headphones off </span></li>\r\n<li><span class="a-list-item"> Activate Alexa, the Google Assistant, or your voice assistant with a simple touch </span></li>\r\n<li><span class="a-list-item"> Optimize your sound settings with the Sony-Headphones Connect app </span></li>\r\n<li><span class="a-list-item">Clear hands-free calling</span></li>\r\n<li><span class="a-list-item">High quality wireless audio with Bluetooth and NFC, plus LDAC</span></li>\r\n<li><span class="a-list-item">In the Box: Carrying Pouch, Connection Cable (Headphone cable (approx. 1. 2m, stereo mini plug), USB Cable, Card, Operating Instructions, Reference Guide</span></li>\r\n</ul>\r\n<!--  Loading EDP related metadata -->\r\n<p> </p>\r\n<div class="a-row a-expander-container a-expander-inline-container" aria-live="polite"> </div>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
                url: null,
                position: "0",
                width: "1286",
                height: "1500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
                url: null,
                position: "0",
                width: "1286",
                height: "1500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
                url: null,
                position: "0",
                width: "1286",
                height: "1500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
                url: null,
                position: "0",
                width: "1286",
                height: "1500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/816qio27asl._sl1500_.jpg",
                  url: null,
                  position: "0",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/7/1/71bm2a5ra5l._sl1500_.jpg",
                  url: null,
                  position: "1",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/7/1/71f-cuaudgl._sl1500_.jpg",
                  url: null,
                  position: "2",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81dvg5wuufl._sl1500_.jpg",
                  url: null,
                  position: "3",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81l3s2quxrl._sl1500_.jpg",
                  url: null,
                  position: "4",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81vedag2iwl._sl1500_.jpg",
                  url: null,
                  position: "5",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81za6m_8ijl._sl1500_.jpg",
                  url: null,
                  position: "6",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81zwxi6w9wl._sl1500_.jpg",
                  url: null,
                  position: "7",
                  width: "1286",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/1/612gugq0nil._sl1200_.jpg",
                  url: null,
                  position: "8",
                  width: "1200",
                  height: "800",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 10,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WH-XB900/L",
                labelArr: ["WH-XB900/L"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736089709",
                labelArr: ["4548736089709"],
                id: "4548736089709",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "WH-XB900N/LCE",
                labelArr: ["WH-XB900N/LCE"],
                id: "WH-XB900N/LCE",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Headphones Wireless Noise-Cancelling Bluetooth | Blue | WH-XB900/L",
                labelArr: [
                  "SONY Headphones Wireless Noise-Cancelling Bluetooth | Blue | WH-XB900/L",
                ],
                id: "SONY Headphones Wireless Noise-Cancelling Bluetooth | Blue | WH-XB900/L",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "521.74",
                labelArr: [521.74],
                id: "521.74",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Blue",
                labelArr: ["Blue"],
                id: "50",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 695,
            money_equivalent: 21,
          },
          qitaf: {
            points: 40,
            money_equivalent: 11,
          },
          custom_related_products: [
            "WI-C310/L",
            "WI-XB400/B",
            "WH-CH710N/B",
            "SRS-XB23/L",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "4.00000",
            },
            {
              RS11: "2.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              JS02: "2.00000",
            },
          ],
          hex_code: ["#0000ff"],
          meta_title:
            "Sony WH-XB900N Wireless Noise Canceling Extra Bass Headphones, Blue ",
          meta_keywords:
            "Sony WH-XB900N Wireless Noise Canceling Extra Bass Headphones Blue, Sony WH-XB900N, sony  Wireless Noise Canceling Extra Bass Headphones  Blue ",
          meta_description:
            "buy Sony WH-XB900N Wireless Noise Canceling Extra Bass Headphones, Blue at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "6183",
          sku: "WF-1000XM3/B",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Headphones Wireless Noise-Cancelling  | Black| WF-1000XM3/B",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 304,
              is_parent: true,
              is_virtual: "false",
              name: "Truly Wireless",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 439,
              is_parent: true,
              is_virtual: "false",
              name: "Audio",
              parent_id: "435",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 483,
              is_parent: true,
              is_virtual: "false",
              name: "Best Items on the offer ",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 520,
              is_parent: true,
              is_virtual: "false",
              name: "Headphones & Audio ",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 20,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 899.001001,
          price_rounded: 899,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
          description:
            '<p>WF-1000XM3 truly wireless headphones combine industry-leading noise cancellation<sup class="footNoteNumber footNoteNumber_done" data-footnote="As of June 1st 2020. According to research by Sony Corporation, measured using JEITA-compliant guidelines in Truly Wireless style noise cancelling headphones market." data-hasqtip="10"><button class="btn-link footnote-link js-footnote-link" name="1" aria-label="Footnote 1">1</button></sup> with high quality sound, smart listening features, Bluetooth® and NFC connectivity, all-day battery life, and long-listening comfort.  </p>\r\n<p> </p>\r\n<ul class="feature-list">\r\n<li>\r\n<div class="ghost-center-wrap">\r\n<p class="copy ghost-center with-icon">Digital Noise Cancelling with HD Noise Cancelling Processor QN1e and Dual Noise Sensor Technology</p>\r\n</div>\r\n</li>\r\n<li>\r\n<div class="ghost-center-wrap">\r\n<p class="icon ghost-center"> </p>\r\n<p class="copy ghost-center with-icon">Truly wireless design with BLUETOOTH® wireless technology</p>\r\n</div>\r\n</li>\r\n<li>\r\n<div class="ghost-center-wrap">\r\n<p class="icon ghost-center"> </p>\r\n<p class="copy ghost-center with-icon">Up to 24 hours of battery life<sup class="footNoteNumber footNoteNumber_done" data-footnote="3 times charging with the charging case is required - 6hrs (earbuds) + 18hrs (charging case ), total 24hrs when using Noise Cancelling and Bluetooth® connection. 8hrs (earbuds) + 24hrs (charging case), total 32hrs when using Bluetooth® connection with Noise Cancelling switched off." data-hasqtip="11"><button class="btn-link footnote-link js-footnote-link" name="3" aria-label="Footnote 3">3</button></sup> for all-day listening</p>\r\n</div>\r\n</li>\r\n<li>\r\n<div class="ghost-center-wrap">\r\n<p class="icon ghost-center"> </p>\r\n<p class="copy ghost-center with-icon">Quick Attention function lets you chat easily without removing your headphones</p>\r\n</div>\r\n</li>\r\n<li>\r\n<div class="ghost-center-wrap">\r\n<p class="icon ghost-center"> </p>\r\n<p class="copy ghost-center with-icon">Modern classic design sits securely in your ears</p>\r\n</div>\r\n</li>\r\n</ul>\r\n<p> </p>\r\n<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
                url: null,
                position: "2",
                width: 800,
                height: 800,
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
                url: null,
                position: "2",
                width: 800,
                height: 800,
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
                url: null,
                position: "2",
                width: 800,
                height: 800,
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
                url: null,
                position: "2",
                width: 800,
                height: 800,
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-1_0007_wf-1000xm3_b_case3-mid.jpg",
                  url: null,
                  position: "2",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0001_wf-1000xm3_colorvariation-mid.jpg",
                  url: null,
                  position: "3",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0002_wf-1000xm3_b_wearingangle-mid.jpg",
                  url: null,
                  position: "4",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0003_wf-1000xm3_b_standard-mid.jpg",
                  url: null,
                  position: "5",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0004_wf-1000xm3_b_keyvisual-mid.jpg",
                  url: null,
                  position: "6",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0005_wf-1000xm3_b_front-mid.jpg",
                  url: null,
                  position: "7",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0006_wf-1000xm3_b_design-mid.jpg",
                  url: null,
                  position: "8",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0008_wf-1000xm3_b_case2-mid.jpg",
                  url: null,
                  position: "9",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0009_wf-1000xm3_b_case1-mid.jpg",
                  url: null,
                  position: "10",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_0010_wf-1000xm3_b_case_with_hand-mid.jpg",
                  url: null,
                  position: "11",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/u/n/untitled-1_00100_wf-1000xm3_supplieditems-mid.jpg",
                  url: null,
                  position: "12",
                  width: 800,
                  height: 800,
                  type: "image",
                },
              ],
            },
            "external-video": [
              {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/h/q/hqdefault_1.jpg",
                url: "https://www.youtube.com/watch?v=Vu36eoC50i0",
                position: "2",
                width: 0,
                height: 0,
                type: "video",
              },
            ],
          },
          stock: 32,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WF-1000XM3/B",
                labelArr: ["WF-1000XM3/B"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Headphones Wireless Noise-Cancelling  | Black| WF-1000XM3/B",
                labelArr: [
                  "SONY Headphones Wireless Noise-Cancelling  | Black| WF-1000XM3/B",
                ],
                id: "SONY Headphones Wireless Noise-Cancelling  | Black| WF-1000XM3/B",
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736088825",
                labelArr: ["4548736088825"],
                id: "4548736088825",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "WF-1000XM3BME",
                labelArr: ["WF-1000XM3BME"],
                id: "WF-1000XM3BME",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "703.57",
                labelArr: [703.57],
                id: "703.57",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 782,
            money_equivalent: 24,
          },
          qitaf: {
            points: 45,
            money_equivalent: 13,
          },
          custom_related_products: [
            "SRS-XB12/B",
            "SRS-XB12/R",
            "ECM-AW4",
            "WH-CH510/L",
          ],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "2.00000",
            },
            {
              KS03: "3.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              KS07: "2.00000",
            },
            {
              KS08: "3.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "3.00000",
            },
            {
              RS09: "1.00000",
            },
            {
              RS11: "2.00000",
            },
            {
              JS15: "3.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS07: "2.00000",
            },
            {
              JS02: "4.00000",
            },
            {
              JS01: "2.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title:
            "SONY Truly Wireless Headphones - Noise Cancelling - Black - WF-1000XM3/B",
          meta_keywords:
            "SONY,Truly,Wireless,Headphones,Noise,Cancelling,Black,WF1000XM3B",
          meta_description:
            "Buy SONY Truly Wireless Headphones - Noise Cancelling - Black - WF-1000XM3/B From mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "12659",
          sku: "WH-1000XM4/B",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY  Wireless Noise Cancelling Headphones| Black | WH-1000XM4",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_virtual: "false",
              position: 5,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 305,
              is_parent: true,
              is_virtual: "false",
              name: "Bluetooth Headphone & Earphone",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 439,
              is_parent: true,
              is_virtual: "false",
              name: "Audio",
              parent_id: "435",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 520,
              is_parent: true,
              is_virtual: "false",
              name: "Headphones & Audio ",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 522,
              is_parent: true,
              is_virtual: "false",
              name: "Our Chooses ",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 563,
              is_parent: true,
              is_virtual: "false",
              name: "Ready For Everything ",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 6,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 1398.998001,
          price_rounded: 1399,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/productno_selection",
          description:
            "SPECIFICATIONS AND FEATURES\r\nIntelligent and intuitive, the WH-1000XM4 headphones offer further improvements to our industry-leading noise cancelation, exceptional sound quality, and smart listening that adjusts to your behavior and your location.\r\n \r\nHD Noise-Canceling Processor QN1, Bluetooth Audio SoC and a dual noise sensor let you listen without distractions\r\n\r\n \r\n\r\nPersonal noise canceling optimizer and atmospheric pressure optimizing\r\n\r\n \r\n\r\nHigh-quality audio with DSEE Extreme™ and LDAC\r\n\r\n \r\n\r\nAdaptive Sound Control automatically adjusts ambient sound settings to suit your location and behavior\r\n\r\n \r\n\r\nWireless freedom with BLUETOOTH® technology",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {},
            "external-video": [],
          },
          stock: 55,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WH-1000XM4/B",
                labelArr: ["WH-1000XM4/B"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY  Wireless Noise Cancelling Headphones| Black | WH-1000XM4",
                labelArr: [
                  "SONY  Wireless Noise Cancelling Headphones| Black | WH-1000XM4",
                ],
                id: "SONY  Wireless Noise Cancelling Headphones| Black | WH-1000XM4",
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736112124",
                labelArr: ["4548736112124"],
                id: "4548736112124",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "1094.87",
                labelArr: [1094.87],
                id: "1094.87",
              },
            },
            {
              filterable: false,
              code: "qitaf_eligible",
              visibility: true,
              attribute: {
                label: "Qitaf Eligible",
                id: 392,
              },
              selected_option: {
                label: "Qitaf Eligible",
                labelArr: ["Qitaf Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 1217,
            money_equivalent: 37,
          },
          qitaf: {
            points: 70,
            money_equivalent: 20,
          },
          custom_related_products: [
            "WH-1000XM2N",
            "WH-1000XM3B",
            "WH-1000XM3S",
            "WH-1000XM4/S",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              RS03: "4.00000",
            },
            {
              RS06: "4",
            },
            {
              RS09: "4.00000",
            },
            {
              RS11: "6.00000",
            },
            {
              RS15: "4.00000",
            },
            {
              JS15: "5.00000",
            },
            {
              JS06: "3.00000",
            },
            {
              JS08: "4.00000",
            },
            {
              JS07: "5.00000",
            },
            {
              JS02: "5.00000",
            },
            {
              JS01: "3.00000",
            },
            {
              RS17: "8.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title:
            "سماعات رأس مانعة للتشويش لاسلكية WH-1000XM4 -اسودWH-1000XM4",
          meta_keywords:
            "سماعات رأس مانعة للتشويش لاسلكية WH-1000XM4 -اسود,WH-1000XM4 , WH-1000XM4/B",
          meta_description:
            "Buy سماعات رأس مانعة للتشويش لاسلكية WH-1000XM4 -اسود at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "12275",
          sku: "WF-SP800N/B",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "Truly Wireless Noise Cancelling Sports In-Ear Headphones WF-SP800N/B",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_virtual: "false",
              position: 7,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 304,
              is_parent: true,
              is_virtual: "false",
              name: "Truly Wireless",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 563,
              is_parent: true,
              is_virtual: "false",
              name: "Ready For Everything ",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 14,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 848.999001,
          price_rounded: 849,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_c02_wearing2_bk-large.jpg",
          description:
            "<ul>\r\n<li>Customer can enjoy and concentrate well on their indoor/outdoor workouts with the help of noise cancelling and ambient sound control feature.</li>\r\n<li><strong>Secure Fitting </strong>with new shape earbuds &amp; Arc supporter</li>\r\n<li>Punchier basslines with Extra bass</li>\r\n<li>Water resistant and dust resistant(IP55) for wider usage in daily life</li>\r\n<li>Enjoy up to total 18hrs battery life (9hrs + 9hrs charging case)</li>\r\n<li>Quick charge of 10=60mins music playback</li>\r\n<li>Stereo calling ( L + R)</li>\r\n<li>USB type C charging</li>\r\n</ul>",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_c02_wearing2_bk-large.jpg",
                  url: null,
                  position: "1",
                  width: 3000,
                  height: 2250,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_c03_front_bk-large.jpg",
                  url: null,
                  position: "2",
                  width: 3000,
                  height: 2250,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_case_close_led-on_bk-large.jpg",
                  url: null,
                  position: "3",
                  width: 3000,
                  height: 3000,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_case_open_led-off_bk-large.jpg",
                  url: null,
                  position: "4",
                  width: 3000,
                  height: 3000,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-sp800n_kv_bk_thumbnail-large.jpg",
                  url: null,
                  position: "5",
                  width: 3000,
                  height: 1860,
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 15,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WF-SP800N/B",
                labelArr: ["WF-SP800N/B"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736112216",
                labelArr: ["4548736112216"],
                id: "4548736112216",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "Truly Wireless Noise Cancelling Sports In-Ear Headphones WF-SP800N/B",
                labelArr: [
                  "Truly Wireless Noise Cancelling Sports In-Ear Headphones WF-SP800N/B",
                ],
                id: "Truly Wireless Noise Cancelling Sports In-Ear Headphones WF-SP800N/B",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "607.83",
                labelArr: [607.83],
                id: "607.83",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 739,
            money_equivalent: 23,
          },
          qitaf: {
            points: 43,
            money_equivalent: 12,
          },
          custom_related_products: [
            "WH-CH510/B",
            "WI-C200/W",
            "WI-C310/L",
            "WF-XB700/B",
          ],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS03: "3.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              KS07: "1.00000",
            },
            {
              KS08: "2.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "1.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "2970",
          sku: "MDR-XB550AP/W",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Over-Ear Headphones with Mic | EXTRA BASS™ | White | MDR-XB550AP",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 8,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 303,
              is_parent: true,
              is_virtual: "false",
              name: "Headband",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 14,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 613,
              is_parent: true,
              is_virtual: "false",
              name: "HeadPhones & Spikers ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 218.994501,
          price_rounded: 218.99,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-03-11 00:00:00",
          discounted_price_to: "2021-04-03 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
          description: '<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
                url: null,
                position: "1",
                width: 800,
                height: 800,
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
                url: null,
                position: "1",
                width: 800,
                height: 800,
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
                url: null,
                position: "1",
                width: 800,
                height: 800,
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
                url: null,
                position: "1",
                width: 800,
                height: 800,
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0006_mdr-xb550ap_w_cw-large.jpg",
                  url: null,
                  position: "1",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0004_mdr-xb550ap_w_swivel-large.jpg",
                  url: null,
                  position: "3",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0000_mdr-xb550ap_w_front.jpg",
                  url: null,
                  position: "4",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0005_mdr-xb550ap_w_side2-large.jpg",
                  url: null,
                  position: "5",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0001_xb550ap_w_with_xblogo-large.jpg",
                  url: null,
                  position: "6",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0002_xb550ap_w_situation-large.jpg",
                  url: null,
                  position: "7",
                  width: 800,
                  height: 800,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/_/0/_0003_xb550ap_w_1-large.jpg",
                  url: null,
                  position: "8",
                  width: 800,
                  height: 800,
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 52,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "MDR-XB550AP/W",
                labelArr: ["MDR-XB550AP/W"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736045866",
                labelArr: ["4548736045866"],
                id: "4548736045866",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "MDRXB550APW",
                labelArr: ["MDRXB550APW"],
                id: "MDRXB550APW",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Over-Ear Headphones with Mic | EXTRA BASS™ | White | MDR-XB550AP",
                labelArr: [
                  "SONY Over-Ear Headphones with Mic | EXTRA BASS™ | White | MDR-XB550AP",
                ],
                id: "SONY Over-Ear Headphones with Mic | EXTRA BASS™ | White | MDR-XB550AP",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "171.39",
                labelArr: [171.39],
                id: "171.39",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "White",
                labelArr: ["White"],
                id: "59",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 191,
            money_equivalent: 6,
          },
          qitaf: {
            points: 11,
            money_equivalent: 3,
          },
          custom_related_products: [
            "MDR-E9LP/B",
            "MDR-EX15AP/W",
            "MDR-XB550AP/B",
            "MDR-E9LP/W",
          ],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "3.00000",
            },
            {
              KS03: "4.00000",
            },
            {
              KS04: "3.00000",
            },
            {
              KS07: "3.00000",
            },
            {
              KS08: "3.00000",
            },
            {
              RS06: "3.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              RS15: "5.00000",
            },
            {
              JS15: "2.00000",
            },
            {
              JS06: "4.00000",
            },
            {
              JS08: "3.00000",
            },
            {
              JS07: "6.00000",
            },
            {
              JS02: "2.00000",
            },
            {
              JS01: "3.00000",
            },
            {
              RS17: "3",
            },
          ],
          hex_code: ["#ffffff"],
          meta_title:
            "SONY Wired Headphones - Extra Bass - Build-in Microphone - Blue - MDR-XB550AP/W",
          meta_keywords:
            "SONY,Wired,Headphones,Extra,Bass,Buildin,Microphone,Blue,MDRXB550APW,سماعات,رأسية,لاسلكية,من,سوني,Walkman®‎,مقاوم,للمياه,ومقاوم,للأتربةNW-WS413/B",
          meta_description:
            "Buy SONY Wired Headphones - Extra Bass - Build-in Microphone - Blue - MDR-XB550AP/W From mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "17938",
          sku: "WF-1000XM4/B",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY Headphones Wireless Noise-Cancelling | Black| WF-1000XM4/B",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 9,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 4,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 1299.005501,
          price_rounded: 1299.01,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_01.jpg",
          description:
            "Adaptive Sound Control automatically adjusts to your situation. WF-1000XM4 truly wireless headphones combine Evolved Digital Noise Cancelling with Integrated Processor V1, Sound quality with High-Resolution Audio Wireless,  Smart listening and clear call quality, Ergonomic surface design for stable fit, Water resistant and long battery life for everyday use.",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_01.jpg",
                  url: null,
                  position: "1",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_02.jpg",
                  url: null,
                  position: "2",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_03.jpg",
                  url: null,
                  position: "3",
                  width: "3000",
                  height: "2250",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_04.jpg",
                  url: null,
                  position: "4",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_05.jpg",
                  url: null,
                  position: "5",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_06.jpg",
                  url: null,
                  position: "6",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/w/f/wf-1000xm4_b_07.jpg",
                  url: null,
                  position: "7",
                  width: "3000",
                  height: "2000",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 27,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WF-1000XM4/B",
                labelArr: ["WF-1000XM4/B"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736121157",
                labelArr: ["4548736121157"],
                id: "4548736121157",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Headphones Wireless Noise-Cancelling | Black| WF-1000XM4/B",
                labelArr: [
                  "SONY Headphones Wireless Noise-Cancelling | Black| WF-1000XM4/B",
                ],
                id: "SONY Headphones Wireless Noise-Cancelling | Black| WF-1000XM4/B",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 1130,
            money_equivalent: 34,
          },
          qitaf: {
            points: 65,
            money_equivalent: 19,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "3.00000",
            },
            {
              KS04: "3.00000",
            },
            {
              KS07: "2.00000",
            },
            {
              KS08: "3.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "3.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              JS08: "3.00000",
            },
            {
              JS02: "3.00000",
            },
            {
              JS01: "3.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_description: "WF-1000XM4",
          bundle_discount_products: [],
        },
        {
          id: "8326",
          sku: "WH-CH510/B",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Headphones | Smart listening | 35hrs battery | Black |WH-CH510/B",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 10,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 305,
              is_parent: true,
              is_virtual: "false",
              name: "Bluetooth Headphone & Earphone",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 520,
              is_parent: true,
              is_virtual: "false",
              name: "Headphones & Audio ",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              position: 28,
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 650,
              is_parent: true,
              is_virtual: "false",
              name: "PA",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              position: 18,
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 198.996001,
          price_rounded: 199,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
          description:
            "<p>The lightweight design and swivel earcups mean you can slip your headphones into a bag when you’re on the move. Plus, the slim, adjustable headband is designed to both look and feel good</p>",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
                url: null,
                position: "1",
                width: "959",
                height: "1500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
                url: null,
                position: "1",
                width: "959",
                height: "1500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
                url: null,
                position: "1",
                width: "959",
                height: "1500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
                url: null,
                position: "1",
                width: "959",
                height: "1500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/-/1-811u6qewqxl._ac_sl1500_.jpg",
                  url: null,
                  position: "1",
                  width: "959",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/2/-/2-81ok4yaxzil._ac_sl1500_.jpg",
                  url: null,
                  position: "2",
                  width: "783",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/3/-/3-081bswottlkl._ac_sl1500_.jpg",
                  url: null,
                  position: "3",
                  width: "728",
                  height: "1500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/3/-/3-818eixsxxul._ac_sl1500_.jpg",
                  url: null,
                  position: "4",
                  width: "1500",
                  height: "1043",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/5/-/5-71x_7l4ocgl._ac_sl1500_.jpg",
                  url: null,
                  position: "5",
                  width: "1500",
                  height: "1024",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/-/6-81kffftewpl._ac_sl1500_.jpg",
                  url: null,
                  position: "6",
                  width: "1500",
                  height: "1010",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/8/1/81cnqz8dril._ac_sl1500_.jpg",
                  url: null,
                  position: "7",
                  width: "1500",
                  height: "1000",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 95,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "WH-CH510/B",
                labelArr: ["WH-CH510/B"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736101432",
                labelArr: ["4548736101432"],
                id: "4548736101432",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY Headphones | Smart listening | 35hrs battery | Black |WH-CH510/B",
                labelArr: [
                  "SONY Headphones | Smart listening | 35hrs battery | Black |WH-CH510/B",
                ],
                id: "SONY Headphones | Smart listening | 35hrs battery | Black |WH-CH510/B",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "155.74",
                labelArr: [155.74],
                id: "155.74",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 174,
            money_equivalent: 6,
          },
          qitaf: {
            points: 10,
            money_equivalent: 2,
          },
          custom_related_products: [
            "WI-C310",
            "WI-C310/L",
            "WH-CH710N/B",
            "SRS-XB23/L",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "9.00000",
            },
            {
              KS03: "10.00000",
            },
            {
              KS04: "4.00000",
            },
            {
              KS07: "4.00000",
            },
            {
              KS08: "6.00000",
            },
            {
              RS03: "4.00000",
            },
            {
              RS06: "3.00000",
            },
            {
              RS09: "4.00000",
            },
            {
              RS11: "9.00000",
            },
            {
              RS15: "5.00000",
            },
            {
              JS15: "4.00000",
            },
            {
              JS06: "4.00000",
            },
            {
              JS08: "5.00000",
            },
            {
              JS07: "5.00000",
            },
            {
              JS02: "10.00000",
            },
            {
              JS01: "5.00000",
            },
            {
              RS17: "4.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "BT  Headphones/Smart listening/35hrs battery",
          meta_keywords: "BT, Headphones, Smart listening,35hrs battery",
          meta_description:
            "buy BT  Headphones/Smart listening/35hrs battery at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "4189",
          sku: "MDR-EX15LP/W",
          labels: {
            plp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/11YEARSENG.png",
                position: "right_top",
              },
            ],
            pdp: [
              {
                type: "image",
                width: "139",
                height: "139",
                url: "https://alpha-m2.mestores.com/pub/media/amasty/amlabel/1YEARSENG.png",
                position: "right_top",
              },
            ],
          },
          name: "SONY Headphones | Black |MDR-EX15LP/W ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 274,
              is_parent: true,
              is_virtual: "false",
              name: "Headphone and Audio",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 299,
              is_parent: true,
              is_virtual: "false",
              position: 11,
              name: "Headphones & MP3 Players",
              parent_id: "274",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 422,
              is_parent: true,
              is_virtual: "false",
              name: "Earphone",
              parent_id: "299",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 481,
              is_parent: true,
              is_virtual: "false",
              name: "headphones audio",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 43.999001,
          price_rounded: 44,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-08-19 00:00:00",
          discounted_price_to: "2021-09-04 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
          description: '<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
                url: null,
                position: "1",
                width: "1100",
                height: "1100",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
                url: null,
                position: "1",
                width: "1100",
                height: "1100",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
                url: null,
                position: "1",
                width: "1100",
                height: "1100",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
                url: null,
                position: "1",
                width: "1100",
                height: "1100",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/m/d/mdr-ex15lp-w.jpg",
                  url: null,
                  position: "1",
                  width: "1100",
                  height: "1100",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 36,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "MDR-EX15LP/W",
                labelArr: ["MDR-EX15LP/W"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4905524940695",
                labelArr: ["4905524940695"],
                id: "4905524940695",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "MDREX15LP/WCE",
                labelArr: ["MDREX15LP/WCE"],
                id: "MDREX15LP/WCE",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY Headphones | Black |MDR-EX15LP/W ",
                labelArr: ["SONY Headphones | Black |MDR-EX15LP/W "],
                id: "SONY Headphones | Black |MDR-EX15LP/W ",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "34.43",
                labelArr: [34.43],
                id: "34.43",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "White",
                labelArr: ["White"],
                id: "59",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "22",
          meza: {
            points: 39,
            money_equivalent: 2,
          },
          qitaf: {
            points: 3,
            money_equivalent: 0,
          },
          custom_related_products: [
            "WH-XB700/B",
            "WH-XB700/L",
            "SRS-XB12/R",
            "ECM-AW4",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "5.00000",
            },
            {
              KS03: "5.00000",
            },
            {
              KS04: "5.00000",
            },
            {
              KS08: "4.00000",
            },
            {
              RS15: "6.00000",
            },
            {
              JS06: "3.00000",
            },
            {
              JS01: "3.00000",
            },
            {
              RS17: "5",
            },
          ],
          hex_code: ["#ffffff"],
          meta_title: "MDR-EX15LP In-ear Headphones",
          meta_keywords:
            "MDREX15LPW , سماعات,سلكية,من,سوني,ميكروفون,مدمج,أسود,MDR-ZX310AP,BMDR-ZX310AP/B",
          meta_description:
            "Buy MDR-EX15LP In-ear Headphones From mestores.com",
          bundle_discount_products: [],
        },
      ],
      total_count: 56,
      requested_count: 10,
      query_filter_param: "filterBy=category:299",
      query_filter_param_and: "filterBy=category:299",
    },
    {
      type: "single_banner",
      items: [
        {
          image_id: "",
          deeplinkUrl: "",
          imageUrl: "https://alpha-m2.mestores.com/pub/media/9.png",
          action: "",
          actionParam: "",
        },
      ],
    },
    {
      type: "single_banner",
      inner_type: "",
      items: [
        {
          image_id: "",
          deeplinkUrl: "",
          imageUrl: "https://alpha-m2.mestores.com/pub/media/10.png",
          action: "",
          actionParam: "",
        },
      ],
    },
    {
      type: "slider",
      title: "Top Rated Products",
      products: [
        {
          id: "18698",
          sku: "ZV-E10",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY ZV-E10 Lens Vlog Camera Interchangeable",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 296,
              is_parent: true,
              is_virtual: "false",
              name: "Compact Cameras",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 344,
              is_parent: true,
              is_virtual: "false",
              position: 17,
              name: "Pre-Order Products",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 616,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 649,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 3299.005001,
          price_rounded: 3299.01,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "",
          discounted_price_to: "",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv.png",
          description:
            "Find a lens to match your style\nProfessional-looking vlogs are easy with the ZV-E10, thanks to interchangeable lenses that capture the world however you choose to see it\n\nEasy, impressive vlogs\n\nWide and dynamic footage\nAttention-grabbing background\nSuper close-ups highlight the details\nExpand your vlogging with over 60 lenses\nOne-touch control of background blurring\nAdd drama with slow and quick motion\nIdeal for product-review videos\nHigh-quality video even when you're moving\nAutomatic, precise focus\nSmooth, professional focus transition\nShooting grip for smoother vlogging\nThe larger sensor makes a difference in quality\nClean footage in dim lighting\n\n",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv.png",
                url: null,
                position: "0",
                width: "923",
                height: "495",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv.png",
                url: null,
                position: "0",
                width: "923",
                height: "495",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv.png",
                url: null,
                position: "0",
                width: "923",
                height: "495",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv.png",
                url: null,
                position: "0",
                width: "923",
                height: "495",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/v/l/vloge.png",
                  url: null,
                  position: "1",
                  width: "557",
                  height: "558",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/c/a/camera.png",
                  url: null,
                  position: "2",
                  width: "836",
                  height: "574",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/z/v/zv1.png",
                  url: null,
                  position: "3",
                  width: "839",
                  height: "582",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/o/sonyy.png",
                  url: null,
                  position: "4",
                  width: "909",
                  height: "581",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/3/_/3.5.png",
                  url: null,
                  position: "5",
                  width: "899",
                  height: "539",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 0,
          orderType: "pre-order",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "ZV-E10",
                labelArr: ["ZV-E10"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736128798",
                labelArr: ["4548736128798"],
                id: "4548736128798",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY ZV-E10 Lens Vlog Camera Interchangeable",
                labelArr: ["SONY ZV-E10 Lens Vlog Camera Interchangeable"],
                id: "SONY ZV-E10 Lens Vlog Camera Interchangeable",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 2869,
            money_equivalent: 87,
          },
          qitaf: {
            points: 165,
            money_equivalent: 49,
          },
          custom_related_products: [],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [],
          hex_code: ["#000000"],
          bundle_discount_products: [],
        },
        {
          id: "12633",
          sku: "ZV-1",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY ZV-1 Vlog Camera ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 297,
              is_parent: true,
              is_virtual: "false",
              name: "Action Cameras",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 452,
              is_parent: true,
              is_virtual: "false",
              name: "Com Camera",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 472,
              is_parent: true,
              is_virtual: "false",
              name: "cameras",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 478,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 482,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 521,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 522,
              is_parent: true,
              is_virtual: "false",
              name: "Our Chooses ",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              position: 55,
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 616,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 649,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 3398.997501,
          price_rounded: 3399,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/s/o/sony-zv1_pic1.jpg",
          description:
            "<p><em>“An easy-to-use vlog camera that makes your appeal standout”</em></p>\r\n<p><strong>Attention Grabbing</strong></p>\r\n<ul>\r\n<li>AF performance &gt; Smooth focused transition, Real-time eye AF and Real time tracking</li>\r\n<li><strong>New Skin-tone optimization, Face priority AE always keeps faces bright, even in backlit or dim condition</strong></li>\r\n<li><strong>SteadyShot™ Active mode</strong> for more stable images</li>\r\n<li>Clear Voice Recording &gt; Directional <strong>3-Capsule Mic, New noise-reduction design</strong> and <strong>Detachable wind screen</strong> supplied in kit</li>\r\n</ul>\r\n<p><strong>Easy Operation</strong></p>\r\n<ul>\r\n<li><strong>One Push Functions &gt; </strong>Bokeh Switch / Product Showcase Setting</li>\r\n</ul>\r\n<p><strong>Design</strong></p>\r\n<ul>\r\n<li>Designed for vlog &gt; Varied-angle LCD Screen / Lightweight / Body grip / Operability</li>\r\n</ul>\r\n<p><strong>Various Accessories</strong></p>\r\n<ul>\r\n<li>Wide range of accessories compatibility</li>\r\n</ul>",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                type: "image",
              },
              featured: {
                type: "image",
              },
              smallsquare: {
                type: "image",
              },
              plpPackshot: {
                type: "image",
              },
              screenshots: [],
            },
            "external-video": [],
          },
          stock: 23,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "ZV-1",
                labelArr: ["ZV-1"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "DCZV1/B",
                labelArr: ["DCZV1/B"],
                id: "DCZV1/B",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY ZV-1 Vlog Camera ",
                labelArr: ["SONY ZV-1 Vlog Camera "],
                id: "SONY ZV-1 Vlog Camera ",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "2607.82",
                labelArr: [2607.82],
                id: "2607.82",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 2956,
            money_equivalent: 89,
          },
          qitaf: {
            points: 170,
            money_equivalent: 50,
          },
          custom_related_products: [
            "DSC-RX100M6",
            "MPK-AS3",
            "DSC-RX100M5/DIS",
            "GTK-PG10/DIS",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "2.00000",
            },
            {
              KS03: "2.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              KS08: "2.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "2.00000",
            },
            {
              RS09: "1.00000",
            },
            {
              RS15: "2.00000",
            },
            {
              JS15: "1.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              JS08: "1.00000",
            },
            {
              JS07: "1.00000",
            },
            {
              JS02: "1.00000",
            },
            {
              JS01: "2.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "Vlog Camera ZV-1ZV-1",
          meta_keywords:
            "Vlog Camera ZV-1,ZV-1, camera, cameras, lense, lenses, كاميرا , كاميرات, عدسه, عدسة, عدسات, لينس, لنس, كاميرات تصوير, كاميرا سوني, كاميرا سوني 4K",
          meta_description: "Buy Vlog Camera ZV-1 at mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "2380",
          sku: "ILCE-7M3K",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY ILCE-7M3K Alpha 7 III with 35mm full-frame image sensor",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 295,
              is_parent: true,
              is_virtual: "false",
              name: "MirrorLess Cameras",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 358,
              is_parent: true,
              is_virtual: "false",
              name: "Badel products ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 435,
              is_virtual: "false",
              name: "Homepage",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 472,
              is_parent: true,
              is_virtual: "false",
              name: "cameras",
              parent_id: "435",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 482,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 517,
              is_parent: true,
              is_virtual: "false",
              name: "Eid Offers",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "1",
            },
            {
              category_id: 521,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "517",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 598,
              is_parent: true,
              is_virtual: "false",
              name: " Offers ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 610,
              is_parent: true,
              is_virtual: "false",
              name: "Back to school ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 616,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "610",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 641,
              is_parent: true,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 649,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 8859.025001,
          price_rounded: 8859.03,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
          description: '<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950545.jpg",
                  url: null,
                  position: "2",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519695934000_1394219.jpg",
                  url: null,
                  position: "3",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519771396000_img_949933.jpg",
                  url: null,
                  position: "4",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_949932_1_.jpg",
                  url: null,
                  position: "5",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_949932.jpg",
                  url: null,
                  position: "6",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_949934.jpg",
                  url: null,
                  position: "7",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1519828788000_img_950543.jpg",
                  url: null,
                  position: "8",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961058000_img_950544.jpg",
                  url: null,
                  position: "9",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961058000_img_950548.jpg",
                  url: null,
                  position: "10",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961058000_img_951163.jpg",
                  url: null,
                  position: "11",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961058000_img_985427.jpg",
                  url: null,
                  position: "12",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961059000_img_950549.jpg",
                  url: null,
                  position: "13",
                  width: "500",
                  height: "500",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/1/5/1525961059000_img_950678.jpg",
                  url: null,
                  position: "14",
                  width: "500",
                  height: "500",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 16,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "ILCE-7M3K",
                labelArr: ["ILCE-7M3K"],
                id: -1,
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  "SONY ILCE-7M3K Alpha 7 III with 35mm full-frame image sensor",
                labelArr: [
                  "SONY ILCE-7M3K Alpha 7 III with 35mm full-frame image sensor",
                ],
                id: "SONY ILCE-7M3K Alpha 7 III with 35mm full-frame image sensor",
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "32829540",
                labelArr: ["32829540"],
                id: "32829540",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "ILCE-7M3K/BCAP2",
                labelArr: ["ILCE-7M3K/BCAP2"],
                id: "ILCE-7M3K/BCAP2",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "6346.98",
                labelArr: [6346.98],
                id: "6346.98",
              },
            },
            {
              filterable: true,
              code: "megapixels",
              visibility: true,
              attribute: {
                label: "Megapixels",
                id: 249,
              },
              selected_option: {
                label: "42.4MP",
                labelArr: ["42.4MP"],
                id: "516",
              },
            },
            {
              filterable: false,
              code: "image_sensor",
              visibility: true,
              attribute: {
                label: "Sensor",
                id: 250,
              },
              selected_option: {
                label: "35mm Full-frame",
                labelArr: ["35mm Full-frame"],
                id: "520",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "autofocus_type",
              visibility: true,
              attribute: {
                label: "Focus Type",
                id: 251,
              },
              selected_option: {
                label: "Fast Hybird AF",
                labelArr: ["Fast Hybird AF"],
                id: "526",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "continuous_shooting",
              visibility: true,
              attribute: {
                label: "Continuous Shooting",
                id: 252,
              },
              selected_option: {
                label: "Continuous Shooting",
                labelArr: ["Continuous Shooting"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "interface",
              visibility: true,
              attribute: {
                label: "Interface",
                id: 253,
              },
              selected_option: {
                label: "wifi, NFC",
                labelArr: ["wifi, NFC"],
                id: "530",
              },
            },
            {
              filterable: false,
              code: "shutter_speed",
              visibility: true,
              attribute: {
                label: "Shutter speed",
                id: 254,
              },
              selected_option: {
                label: "1/8000",
                labelArr: ["1/8000"],
                id: "532",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "sensor_type",
              visibility: true,
              attribute: {
                label: "Sensor Type",
                id: 256,
              },
              selected_option: {
                label: "Exmor R CMOS Sensor",
                labelArr: ["Exmor R CMOS Sensor"],
                id: "543",
              },
            },
            {
              filterable: false,
              code: "lens",
              visibility: false,
              attribute: {
                label: "Lens",
                id: 257,
              },
              selected_option: {
                label: "Sony E-mount lenses",
                labelArr: ["Sony E-mount lenses"],
                id: "545",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: true,
              code: "brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 218,
              },
              selected_option: {
                label: "SONY",
                labelArr: ["SONY"],
                id: "354",
              },
            },
            {
              filterable: true,
              code: "processor",
              visibility: true,
              attribute: {
                label: "Processor",
                id: 231,
              },
              selected_option: {
                label: "BIONZ X",
                labelArr: ["BIONZ X"],
                id: "546",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 7704,
            money_equivalent: 232,
          },
          qitaf: {
            points: 443,
            money_equivalent: 132,
          },
          custom_related_products: [
            "DSC-H300",
            "DSC-W800(BLK)",
            "DSC-W800(SIL)",
            "FDR-AX43",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "1.00000",
            },
            {
              KS03: "2.00000",
            },
            {
              KS08: "1.00000",
            },
            {
              RS03: "2.00000",
            },
            {
              RS06: "3.00000",
            },
            {
              RS11: "1.00000",
            },
            {
              RS15: "1.00000",
            },
            {
              JS15: "1.00000",
            },
            {
              JS06: "1.00000",
            },
            {
              JS08: "1.00000",
            },
            {
              JS01: "1.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title:
            "SONY Camera Œ±7 III with 35mm full-frame image sensor + Body + 28-70mm Zoom Lens - 25.3MP - BIONZ X - ILCE-7M3K",
          meta_keywords:
            "SONY,Camera,Œ±7,III,with,35mm,fullframe,image,sensor,Body,2870mm,Zoom,Lens,25.3MP,BIONZ,X,ILCE7M3K",
          meta_description:
            "Buy SONY Camera Œ±7 III with 35mm full-frame image sensor + Body + 28-70mm Zoom Lens - 25.3MP - BIONZ X - ILCE-7M3K From mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "2406",
          sku: "SEL2470Z",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY SEL2470Z Lens T* FE 24-70mm",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 415,
              is_parent: true,
              is_virtual: "false",
              name: "MirrorLess Cameras Lens",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 641,
              is_virtual: "false",
              name: "SONY Festival ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 649,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "641",
              is_active: "0",
              include_in_menu: "0",
            },
          ],
          price: 3398.997501,
          price_rounded: 3399,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
                url: null,
                position: "2",
                width: "500",
                height: "500",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel2470z.jpg",
                  url: null,
                  position: "2",
                  width: "500",
                  height: "500",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 7,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "SEL2470Z",
                labelArr: ["SEL2470Z"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "32844350",
                labelArr: ["32844350"],
                id: "32844350",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "SEL2470Z",
                labelArr: ["SEL2470Z"],
                id: "SEL2470Z",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY SEL2470Z Lens T* FE 24-70mm",
                labelArr: ["SONY SEL2470Z Lens T* FE 24-70mm"],
                id: "SONY SEL2470Z Lens T* FE 24-70mm",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "2825.22",
                labelArr: [2825.22],
                id: "2825.22",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 2956,
            money_equivalent: 89,
          },
          qitaf: {
            points: 170,
            money_equivalent: 50,
          },
          custom_related_products: [
            "SEL35F14Z",
            "SEL85F14GM",
            "SEL100400GM",
            "SEL50F12GM",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "1.00000",
            },
            {
              KS03: "1.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              RS06: "1.00000",
            },
            {
              JS15: "2.00000",
            },
            {
              RS17: "1.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "SONY Lens E 18-135mm F3.5-5.6 OSS - SEL2470Z",
          meta_keywords:
            "SONY Lens E 18-135mm F3.5-5.6 OSS - SEL2470Z,camera, cameras, lense, lenses, كاميرا , كاميرات, عدسه, عدسة, عدسات, لينس, لنس, كاميرات تصوير, كاميرا سوني, كاميرا سوني 4K",
          meta_description: "SONY Lens E 18-135mm F3.5-5.6 OSS - SEL2470Z ",
          bundle_discount_products: [],
        },
        {
          id: "4307",
          sku: "SEL50M28",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY SEL50M28 Lens FE 50mm ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 368,
              is_virtual: "false",
              name: "SONY Cameras",
              parent_id: "359",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 415,
              is_parent: true,
              is_virtual: "false",
              name: "MirrorLess Cameras Lens",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 623,
              is_parent: true,
              is_virtual: "false",
              name: "Clearance",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 2629.015001,
          price_rounded: 2629.02,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: true,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
          description: '<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
                url: null,
                position: "1",
                width: "1500",
                height: "1160",
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
                url: null,
                position: "1",
                width: "1500",
                height: "1160",
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
                url: null,
                position: "1",
                width: "1500",
                height: "1160",
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
                url: null,
                position: "1",
                width: "1500",
                height: "1160",
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28.jpg",
                  url: null,
                  position: "1",
                  width: "1500",
                  height: "1160",
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/s/e/sel50m28_1_.jpg",
                  url: null,
                  position: "2",
                  width: "2656",
                  height: "2656",
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 0,
          orderType: "out-of-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "SEL50M28",
                labelArr: ["SEL50M28"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736043954",
                labelArr: ["4548736043954"],
                id: "4548736043954",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "SEL50M28/C_SYX",
                labelArr: ["SEL50M28/C_SYX"],
                id: "SEL50M28/C_SYX",
              },
            },
            {
              filterable: true,
              code: "google_product_category",
              visibility: false,
              attribute: {
                label: "Google Product Category",
                id: 322,
              },
              selected_option: {
                label: "222",
                labelArr: ["222"],
                id: "222",
              },
            },
            {
              filterable: false,
              code: "fb_product_brand",
              visibility: true,
              attribute: {
                label: "Brand",
                id: 323,
              },
              selected_option: {
                label: "Sony",
                labelArr: ["Sony"],
                id: "Sony",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY SEL50M28 Lens FE 50mm ",
                labelArr: ["SONY SEL50M28 Lens FE 50mm "],
                id: "SONY SEL50M28 Lens FE 50mm ",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "1828.88",
                labelArr: [1828.88],
                id: "1828.88",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: false,
              code: "is_count_down",
              visibility: true,
              attribute: {
                label: "Is Count Down",
                id: 340,
              },
              selected_option: {
                label: "Is Count Down",
                labelArr: ["Is Count Down"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 2287,
            money_equivalent: 69,
          },
          qitaf: {
            points: 132,
            money_equivalent: 39,
          },
          custom_related_products: [
            "SEL1635GM",
            "SEL35F14Z",
            "SEL50F18F",
            "SEL50F12GM",
          ],
          enable_shipping: true,
          cross_sell_products: [],
          inventory_qty: [],
          hex_code: ["#000000"],
          meta_title:
            "Sony SEL50M28 FE 50mm F2.8 Full Frame E-mount Lens (Black)",
          meta_keywords:
            "Sony,SEL50M28,FE,50mm,F2.8,Full,Frame,Emount,Lens,Black,camera, cameras, lense, lenses, كاميرا , كاميرات, عدسه, عدسة, عدسات, لينس, لنس, كاميرات تصوير, كاميرا سوني, كاميرا سوني 4K",
          meta_description:
            "Buy Sony SEL50M28 FE 50mm F2.8 Full Frame E-mount Lens (Black) From mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "5369",
          sku: "ECM-CG60",
          labels: {
            plp: [],
            pdp: [],
          },
          name: " Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit ",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 359,
              is_virtual: "false",
              name: "B2B",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 368,
              is_virtual: "false",
              name: "SONY Cameras",
              parent_id: "359",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 482,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 929.004501,
          price_rounded: 929,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
          description:
            '<div class="desc p3">يحسن الميكروفون أحادي الصوت عالي الأداء مع الاتجاهية ذات الشكل القلبي الفائق استهداف الصوت. صغير الحجم بشكل مناسب للكاميرات ذات العدسات القابلة للتغيير. يستخدم مصادر طاقة مختلفة للتصوير في الأماكن المفتوحة لفترات طويلة.</div>\r\n<p> </p>\r\n<p> </p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
                url: null,
                position: "1",
                width: 1000,
                height: 1000,
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
                url: null,
                position: "1",
                width: 1000,
                height: 1000,
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
                url: null,
                position: "1",
                width: 1000,
                height: 1000,
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
                url: null,
                position: "1",
                width: 1000,
                height: 1000,
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/5/1/51phdf07xtl._sl1000_.jpg",
                  url: null,
                  position: "1",
                  width: 1000,
                  height: 1000,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/6/1/61erdxtlg8l._sl1000_.jpg",
                  url: null,
                  position: "2",
                  width: 1000,
                  height: 1000,
                  type: "image",
                },
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/7/1/71omtxrggyl._sl1500_.jpg",
                  url: null,
                  position: "3",
                  width: 1500,
                  height: 1500,
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 17,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "ECM-CG60",
                labelArr: ["ECM-CG60"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736008427",
                labelArr: ["4548736008427"],
                id: "4548736008427",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label:
                  " Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit ",
                labelArr: [
                  " Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit ",
                ],
                id: " Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit ",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "686.66",
                labelArr: [686.66],
                id: "686.66",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 808,
            money_equivalent: 25,
          },
          qitaf: {
            points: 47,
            money_equivalent: 13,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "3.00000",
            },
            {
              KS03: "2.00000",
            },
            {
              KS04: "1.00000",
            },
            {
              RS11: "2.00000",
            },
            {
              JS15: "4.00000",
            },
            {
              JS06: "2.00000",
            },
            {
              RS17: "3.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: " ECM-CG60 سوني ميكروفون موجه",
          meta_keywords:
            " Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit, ECM-CG60,  ECM-CG60 سوني ميكروفون موجه",
          meta_description:
            "اشتري Sony ECM-CG60 Shotgun Microphone with LED Video Light & Diffusers + Kit على mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "2767",
          sku: "LCS-U21",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "SONY Soft Carrying Case for Camera - Black - LCS-U21",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 482,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 88.998501,
          price_rounded: 89,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
          description: '<p><span style="display: none;">description</span></p>',
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
                url: null,
                position: "0",
                width: 500,
                height: 500,
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
                url: null,
                position: "0",
                width: 500,
                height: 500,
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
                url: null,
                position: "0",
                width: 500,
                height: 500,
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
                url: null,
                position: "0",
                width: 500,
                height: 500,
                type: "image",
              },
              screenshots: [
                {
                  image:
                    "https://alpha-m2.mestores.com/pub/media/catalog/product/L/C/LCS-U21.jpg",
                  url: null,
                  position: "0",
                  width: 500,
                  height: 500,
                  type: "image",
                },
              ],
            },
            "external-video": [],
          },
          stock: 75,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "LCS-U21",
                labelArr: ["LCS-U21"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4905524909074",
                labelArr: ["4905524909074"],
                id: "4905524909074",
              },
            },
            {
              filterable: false,
              code: "mpn",
              visibility: false,
              attribute: {
                label: "MPN",
                id: 200,
              },
              selected_option: {
                label: "LCS-U21",
                labelArr: ["LCS-U21"],
                id: "LCS-U21",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "SONY Soft Carrying Case for Camera - Black - LCS-U21",
                labelArr: [
                  "SONY Soft Carrying Case for Camera - Black - LCS-U21",
                ],
                id: "SONY Soft Carrying Case for Camera - Black - LCS-U21",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "65.78",
                labelArr: [65.78],
                id: "65.78",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SG",
                labelArr: ["SG"],
                id: "18",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "20",
          meza: {
            points: 78,
            money_equivalent: 3,
          },
          qitaf: {
            points: 5,
            money_equivalent: 1,
          },
          custom_related_products: [],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "4.00000",
            },
            {
              KS03: "5.00000",
            },
            {
              KS04: "7.00000",
            },
            {
              KS07: "3.00000",
            },
            {
              KS08: "5.00000",
            },
            {
              RS03: "4.00000",
            },
            {
              RS06: "6.00000",
            },
            {
              RS09: "2.00000",
            },
            {
              RS11: "4.00000",
            },
            {
              RS15: "5.00000",
            },
            {
              JS15: "5.00000",
            },
            {
              JS06: "6.00000",
            },
            {
              JS08: "3.00000",
            },
            {
              JS07: "3.00000",
            },
            {
              JS02: "3.00000",
            },
            {
              JS01: "5.00000",
            },
            {
              RS17: "5.00000",
            },
          ],
          hex_code: ["#000000"],
          meta_title: "SONY Soft Carrying Case for Camera - Black - LCS-U21",
          meta_keywords: "SONY,Soft,Carrying,Case,for,Camera,Black,LCSU21",
          meta_description:
            "Buy SONY Soft Carrying Case for Camera - Black - LCS-U21 From mestores.com",
          bundle_discount_products: [],
        },
        {
          id: "6897",
          sku: "HVL-F45RM",
          labels: {
            plp: [],
            pdp: [],
          },
          name: "External Flash with Wireless Radio Control",
          categories: [
            {
              category_id: 2,
              is_virtual: "false",
              name: "All Categories",
              parent_id: "1",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 273,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras",
              parent_id: "2",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 298,
              is_parent: true,
              is_virtual: "false",
              name: "Camera Accessories",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 358,
              is_parent: true,
              is_virtual: "false",
              name: "Badel products ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 460,
              is_parent: true,
              is_virtual: "false",
              name: "End of the Year Offer's",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 478,
              is_parent: true,
              is_virtual: "false",
              name: "50 Years anniversary ",
              parent_id: "2",
              is_active: "0",
              include_in_menu: "0",
            },
            {
              category_id: 482,
              is_parent: true,
              is_virtual: "false",
              name: "Cameras ",
              parent_id: "478",
              is_active: "1",
              include_in_menu: "1",
            },
            {
              category_id: 629,
              is_parent: true,
              is_virtual: "false",
              name: "Photography Offers ",
              parent_id: "273",
              is_active: "1",
              include_in_menu: "1",
            },
          ],
          price: 1759.040001,
          price_rounded: 1759.04,
          discounted_price: null,
          discounted_price_rounded: null,
          discounted_price_from: "2021-09-01 00:00:00",
          discounted_price_to: "2021-09-30 00:00:00",
          is_count_down: false,
          baseImage:
            "https://alpha-m2.mestores.com/pub/media/catalog/product/d/o/download_3_.jpg",
          description: "",
          system_requirements: "",
          delivery_details: "",
          media: {
            image: {
              packshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/o/download_3_.jpg",
                url: null,
                position: "1",
                width: 272,
                height: 186,
                type: "image",
              },
              featured: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/o/download_3_.jpg",
                url: null,
                position: "1",
                width: 272,
                height: 186,
                type: "image",
              },
              smallsquare: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/o/download_3_.jpg",
                url: null,
                position: "1",
                width: 272,
                height: 186,
                type: "image",
              },
              plpPackshot: {
                image:
                  "https://alpha-m2.mestores.com/pub/media/catalog/product/d/o/download_3_.jpg",
                url: null,
                position: "1",
                width: 272,
                height: 186,
                type: "image",
              },
              screenshots: [],
            },
            "external-video": [],
          },
          stock: 4,
          orderType: "in-stock",
          currency: "SAR",
          options: [
            {
              code: "sku",
              visibility: true,
              attribute: {
                label: "SKU",
                id: -1,
              },
              selected_option: {
                label: "HVL-F45RM",
                labelArr: ["HVL-F45RM"],
                id: -1,
              },
            },
            {
              filterable: false,
              code: "ean",
              visibility: false,
              attribute: {
                label: "EAN",
                id: 199,
              },
              selected_option: {
                label: "4548736047440",
                labelArr: ["4548736047440"],
                id: "4548736047440",
              },
            },
            {
              filterable: true,
              code: "product_event_reporting",
              visibility: false,
              attribute: {
                label: "Product Event Reporting",
                id: 335,
              },
              selected_option: {
                label: "External Flash with Wireless Radio Control",
                labelArr: ["External Flash with Wireless Radio Control"],
                id: "External Flash with Wireless Radio Control",
              },
            },
            {
              filterable: false,
              code: "special_price",
              visibility: false,
              attribute: {
                label: "Special Price",
                id: 75,
              },
              selected_option: {
                label: "1300.17",
                labelArr: [1300.17],
                id: "1300.17",
              },
            },
            {
              filterable: false,
              code: "meza_eligible",
              visibility: false,
              attribute: {
                label: "Meza Eligible",
                id: 328,
              },
              selected_option: {
                label: "Meza Eligible",
                labelArr: ["Meza Eligible"],
                id: "true",
              },
            },
            {
              filterable: true,
              code: "color",
              visibility: true,
              attribute: {
                label: "Color",
                id: 90,
              },
              selected_option: {
                label: "Black",
                labelArr: ["Black"],
                id: "49",
              },
            },
            {
              filterable: false,
              code: "tax_class_id",
              visibility: false,
              attribute: {
                label: "Tax Class",
                id: 129,
              },
              selected_option: {
                label: "SH",
                labelArr: ["SH"],
                id: "19",
              },
            },
          ],
          item_type: "simple",
          attribute_set_id: "26",
          meza: {
            points: 1530,
            money_equivalent: 46,
          },
          qitaf: {
            points: 88,
            money_equivalent: 26,
          },
          custom_related_products: [
            "HVL-F60RM",
            "HVL-F20M",
            "HVL-F43M",
            "HVL-LE1",
          ],
          enable_shipping: false,
          cross_sell_products: [],
          inventory_qty: [
            {
              KS01: "1.00000",
            },
            {
              RS11: "1.00000",
            },
            {
              RS17: "2",
            },
          ],
          hex_code: ["#000000"],
          meta_keywords:
            "HVL-F45RM,camera, cameras, lense, lenses, كاميرا , كاميرات, عدسه, عدسة, عدسات, لينس, لنس, كاميرات تصوير, كاميرا سوني, كاميرا سوني 4K",
          bundle_discount_products: [],
        },
      ],
      total_count: 8,
      requested_count: 10,
      query_filter_param:
        "filterBy=sku:ZV-E10&filterBy=sku:ZV-1&filterBy=sku:ILCE-7M3K&filterBy=sku:SEL2470Z&filterBy=sku:SEL50M28&filterBy=sku:ECM-CG60&filterBy=sku:LCS-U21&filterBy=sku:HVL-F45RM",
      query_filter_param_and:
        "filterBy=sku:ZV-E10&filterBy=sku:ZV-1&filterBy=sku:ILCE-7M3K&filterBy=sku:SEL2470Z&filterBy=sku:SEL50M28&filterBy=sku:ECM-CG60&filterBy=sku:LCS-U21&filterBy=sku:HVL-F45RM",
    },
    {
      type: "single_banner",
      inner_type: "",
      items: [
        {
          image_id: "",
          deeplinkUrl: "",
          imageUrl: "https://alpha-m2.mestores.com/pub/media/18.png",
          action: "",
          actionParam: "",
        },
      ],
    },
  ],
  is_active: "1",
  sort_order: "0",
  layout_update_xml: null,
  custom_theme: null,
  custom_root_template: null,
  custom_layout_update_xml: null,
  custom_theme_from: null,
  custom_theme_to: null,
  meta_title: "",
  amasty_hreflang_uuid: "",
  bss_customer_group: "",
  schedule_from: null,
  schedule_to: null,
  created_at: "2022-06-16T16:17:35Z",
  updated_at: "2022-06-17T14:31:43Z",
};
function Product_Details_Page({handleChangeCartPopup}) {
  const contentData = JSON.parse(JSON.stringify(data)).content;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [productAvailableOffer, setProductAvailableOffer] = useState([
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
  ]);
  const [productWarrentyBlock, setProductWarrentyBlock] = useState({
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
  });
  const [productDelivery, setProductDelivery] = useState({
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
  });
  const [productProtection, setProtection] = useState([
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
  ]);
  // const dataLocation = useLocation()
  // console.log(dataLocation);
  // const dataNavigate = useNavigate()
  // console.log(dataNavigate);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductDetailData(id.replace(/[/]/g, "%2F")));
  }, [id]);
  const productData = useSelector((state) => state.appData.productData);
  // console.log("before",productData);
  // console.log(Object.values(productData).length);
  useEffect(() => {
    if (Object.values(productData).length !== 0) {
      setProduct(productData);
      setLoading(false);
      window.scrollTo(0,0)
      // console.log(product.reviewSummary.totals);
    }
  }, [productData]);

  // console.log("useEffect",productData);
  // console.log(product.reviewSummary.totals);
  const [newArrivalData, setNewArrivalData] = useState(
    contentData.find((con) => {
      return con.type === "slider" && con.title === "New Arrivals";
    }).products
  );
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [pincode, setPincode] = useState("");
  const [count, setCount] = useState(1);

  const deleteProductFromCart = async (id) => {
    console.log("id ", id);

    const data = {
      // items: [id],
      items: [id],
    };
    console.log("data ", data);

    await deleteFromCart(data)
      .then((res) => {
        console.log(res, "res>>>");
        dispatch(loadCartData());
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        // dispatch(services.notifyError({ message: err.response.data.message }));
      });
  };
  const decreaseCount = (sku) => {
    if (count === 0) {
      setCount(0);
    } else {
      // deleteProductFromCart(product.id)
      setCount(count - 1);
      // AddProductToCart(sku,count-1)
    }
  };
  const increaseCount = (sku) => {
    // deleteProductFromCart(product.id)
    setCount(count + 1);
    // AddProductToCart(sku,count+1)
  };
    
  const AddProductToCart = (sku,id) => {
    // deleteProductFromCart(id)
    const data = {
      items: [
        {
          sku: sku,
          qty: count,
        },
      ],
    };
    addToCart(data)
      .then((res) => {
        setCount(res.data.filter((pro) => pro.sku === product.sku)[0].qty);
        dispatch(loadCartData());
        handleChangeCartPopup(true)
      })
      .catch((err) => {
        console.log(err.response.data.message, "error >>>>");
        dispatch(services.notifyError({ message: err.response.data.message }));
      });
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

  const handleFavourite = () => {
    if (isFavourite) {
      setIsFavourite(false);
      // console.log(product.sku, "added");
    } else {
      setIsFavourite(true);
      // console.log(product.sku, "remove");
    }
  };
  useEffect(() => {
    const data = {
      items: [product.sku],
    };
    if (isFavourite) {
      addToWishlist(data);
      // console.log("added Successfully");
    }
    else{
      removeFromWL(product?.sku)
    //   // console.log("deleted Successfully");
    }
  }, [isFavourite]);
  // console.log(isFavourite);

  const removeFromWL = (sku) => {
    const data = {
      items: [sku],
    };
    deleteFromWishlist(data);
  };
  if (loading) {
    return <h1>Product Loading...</h1>;
  }
  return (
    <>
      {/* <TopNavbar /> */}

      <div className="bg-white d-none d-lg-block">
        <BreadCrumbs title="Z8H | Full Array LED | 8K | High Dynamic Range" />
      </div>
      {/* mobile pdp page */}
      <div className="mobile__product__detail__page d-block d-lg-none">
        <MobileProductDetailPage product={product} />
      </div>
      {/* mobile pdp page end */}

      <div className="container-fluid product__details__page__container d-none d-lg-block">
        <div className="row product__details__page__block">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 row product__details__left__block">
            <div className="row products__details__inner__block">
              <div className="col-12 col-sm-12 col-md-6 product__carousel__main__block">
                <div className="product__carousel__block">
                  <ProductCarousel
                    productImageData={product.media.image.screenshots}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 product__details__block">
                <img
                  src={sony_logo}
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
                  // text={product.categoryTagline}
                  text="Experience the brilliance of big-screen Sony 8K HDR"
                  color="#808080"
                  marginBottom={10}
                />
                {/* <Rating PriceBlock */}
                <RatingBlock
                  size={22}
                  rating={product.reviewSummary.avg}
                  totalRatings={Object.values(
                    product.reviewSummary.totals
                  ).reduce((a, b) => a + b)}
                  // totalRatings={0}
                  fillColor="#DC3A1A"
                  emptyColor="#C8C8C8"
                />
                {/* <div className="row pdp__sticky__counter__block">
                  <div
                    onClick={() => decreaseCount()}
                    className="col-4 counter__decrease__block"
                  >
                    <img src={minus} alt="minus" />
                  </div>
                  <div className="col-4 counter">{count}</div>
                  <div
                    onClick={() => increaseCount()}
                    className="col-4 counter__increase__block"
                  >
                    <img src={plus} alt="plus" />
                  </div>
                </div> */}
                <hr className="pd__block__bottom__line" />

                {/* Price Block */}
                <PriceBlock
                  oldPrice={product.price_rounded + 200}
                  price={product.price_rounded}
                  currency={product.currency}
                  monthlySavingTagline="get it for SAR 500 in 6 equal installments"
                />

                {/* Unlock MemberShip Block */}
                <div className="pd__unlock__membership__block">
                  <div className="pd__unlock__membership">
                    <div className="pd__icon__block">
                      <img src={unlock} alt="" className="pd__unlock__icon" />
                    </div>

                    <p className="pd__unlock__membership__text">
                      Unlock up to 24 months of Best Buy Protection with our
                      Sony Membership
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
                    <Heading7 text={`15-Days Return Policy`} />
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
                  availableOffer={productAvailableOffer}
                  title="Available Offers"
                />

                <hr className="pd__block__bottom__line" />

                {/* Warranty Block */}
                <div className="pd__warranty__size__block pd__common__main__block">
                  <div className="row pd__warranty__block">
                    <p className="col-3 pd__warranty__title">Warranty :</p>
                    <p className="col-9 pd__warranty__text">
                      {productWarrentyBlock.warrantyText}
                    </p>
                  </div>
                  <div className="row pd__size__block">
                    <p className="col-3 col-sm-3 col-md-12 col-lg-3 pd__size__title">
                      Size :
                    </p>
                    <div className="col-9 col-sm-9 col-md-12 col-lg-9 pd__size__button__block">
                      {productWarrentyBlock.size.map((size, sizeIndex) => {
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
                    text={productDelivery.deliveryText}
                    marginBottom={0}
                  />
                  <Text3
                    text=" Enter pincode for exact delivery dates/charges"
                    color="#808080"
                    marginBottom={0}
                  />
                  <PickupStore
                    delivery={productDelivery}
                    title="Pick Up From Store"
                  />
                </div>

                <hr className="pd__block__bottom__line" />

                {/* Pretection Block */}
                <Protecttion
                  title="Protect Your TV"
                  tagline="Most popular protection plan for your product"
                  rating={product.reviewSummary.avg}
                  totalRatings={Object.values(
                    product.reviewSummary.totals
                  ).reduce((a, b) => a + b)}
                  protection={productProtection}
                />

                <hr className="pd__block__bottom__line" />

                {/* Super Coin Block */}
                <SuperCoin />

                <hr className="pd__block__bottom__line" />

                {/* Button Block */}
                <div className="row pd__bundle__cart__button__block pd__common__main__block">
                  <div className="col-xl-6 mb-1  pe-0 pe-xl-1 pd__bundle__button__block">
                    <div className="pd__bundle__button">Build A Bundle</div>
                  </div>
                  <div className="col-xl-6 mb-1 ps-0 ps-xl-1 pd__addToCart__button__block">
                    <div
                      className="pd__addToCart__button"
                      onClick={() => AddProductToCart(product.sku,product.id)}
                    >
                      <img
                        src={shopping_cart}
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
                  {product.relatedProducts[0].products
                    .slice(0, 4)
                    .map((product, productIndex) => {
                      return (
                        <div
                          key={product.id}
                          className="col-6 col-sm-6 col-xxl-3"
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
                        <Price
                          currency={product.currency}
                          price={99}
                          size="heading5"
                        />
                      </p>
                    </div>
                    <div className="exp__rd__package__total__block">
                      <p className="package__total__text">
                        {" "}
                        <Heading6 text="Package Total" marginBottom={0} />
                      </p>
                      <p className="package__total__price">
                        {" "}
                        <Price
                          currency={product.currency}
                          price={1999}
                          size="heading5"
                        />
                      </p>
                    </div>

                    <div className="exp__rd__addToCart__button">
                      <img
                        src={shopping_cart}
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
            {/* <Accordian data={productOverviewData} isDescription={true} /> */}
            {/* <Accordian data={productSpecificationData} isDescription={false} /> */}
            <div className="pd__newArrival__block">
              <CarouselTypeTwo
              handleChangeCartPopup={handleChangeCartPopup}
                productDetailPage={true}
                sectionTitle={product.relatedProducts[0].title}
                carouselData={product.relatedProducts[0].products}
                productType="productOne"
                containerClassName="carouselTypeTwo__inner__block"
              />
            </div>
            <div className="pd__similarProducts__block">
              <SimilarProducts
              handleChangeCartPopup={handleChangeCartPopup}
                productType="productTwo"
                productDetailPage={true}
                sectionTitle={product.relatedProducts[0].title}
                containerClassName="pd__similar__products__block"
                carouselData={product.relatedProducts[0].products}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12  col-lg-3 product__details__right__block">
            <Heading3 price="People Ultimately Bought" />
            <p className="pd__mb__block__title">People Ultimately Bought</p>
            {product.relatedProducts[0].products.map(
              (product, productIndex) => {
                return (
                  <div  key={product.id} className="row pd__mb__product__block">
                    <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`} className="col-xxl-4 pd__mb__product__image__block">
                      <img
                        src={product.baseImage}
                        alt=""
                        className="pd__mb__product__image"
                      />
                    </Link>
                    <div className="col-xxl-8 pd__mb__product__detail__block">
                      <Link className="pd__mb__product__name" to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
                      <Heading7 text={product.name} />
                      </Link>
                      <RatingBlock
                        size={15}
                        rating={4.5}
                        totalRatings={4199}
                        fillColor="#DC3A1A"
                        emptyColor="#C8C8C8"
                      />
                      <Price
                        price={product.price_rounded}
                        currency={product?.currency}
                        size="heading6"
                        span={true}
                      />

                      <OldPrice
                        oldPrice={product.price_rounded + 200}
                        size="text3"
                        color="#808080"
                        marginLeft={5}
                        marginBottom={0}
                        lineThrough={true}
                        span={true}
                        currency={product?.currency}
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
              }
            )}
          </div>
        </div>
      </div>
      <div className="pdp__sticky__add__to__cart__container d-lg-flex d-none">
        <div className="pdp__sticky__add__to__cart__block">
          <div className="row pdp__sticky__counter__block">
            <div
              onClick={() => decreaseCount(product.sku)}
              className="col-4 counter__decrease__block"
            >
              <img src={minus} alt="minus" />
            </div>
            <div className="col-4 counter">{count}</div>
            <div
              onClick={() => increaseCount(product.sku)}
              className="col-4 counter__increase__block"
            >
              <img src={plus} alt="plus" />
            </div>
          </div>
          <Price
            currency={product?.currency}
            price={product?.price_rounded * count}
            size="heading3"
          />
          <Link to={`/checkout`} className="buynow___button">
            Buy Now
          </Link>
          <button className="build__bundle___button">BUILD BUNDLE</button>
          <button
            className="addToCart__button"
            onClick={() =>  AddProductToCart(product.sku,product.id)}
          >
            <img src={shopping_cart} alt="" className="addToCart__icon" />
            Add To Cart
          </button>
        </div>
      </div>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Product_Details_Page;
