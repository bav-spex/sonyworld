import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as types from "./../../redux/actionType";
import navbar_logo from "./../../assets/Logo/navbar_logo.svg";
import white_side_menu_icon from "./../../assets/Icon/white_side_menu_icon.svg";
import navbar_white_down_arrow from "./../../assets/Icon/navbar_white_down_arrow.svg";
import white_down_arrow from "./../../assets/Icon/white_down_arrow.svg";
import popup_right_arrow from "./../../assets/Icon/popup_right_arrow.svg";
import close_icon from "./../../assets/Icon/cancel-white.png";
import user_icon from "./../../assets/Icon/user.png";
import "./../../SCSS/Common/_header.scss";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
// import "./../../SCSS/_variables.scss"

import search from "./../../assets/Icon/search.svg";
import white_search from "./../../assets/Icon/white_search.svg";
import language from "./../../assets/Icon/language.svg";
import backarrow from "./../../assets/Icon/backarrow-mb_black.svg";
import customer_support from "./../../assets/Icon/customer_support.svg";
import favourite from "./../../assets/Icon/favourite.svg";
import location from "./../../assets/Icon/location.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import user from "./../../assets/Icon/user.svg";

import menu from "./../../assets/Icon/menu.svg";

import product_01 from "./../../assets/Product/product_01.jpg";
import NavbarAdBanner_01 from "./../../assets/NavbarAdBanner/NavbarAdBanner_01.jpg";
import MobilePopup from "../MobilePopup";
import Text5 from "../Font/Text5";
import Heading3 from "../Font/Heading3";
import { withTheme } from "styled-components";
import LoginWrapper from "../Login/LoginWrapper";
import CartPopup from "../Popup/CartPopup";
import sony_logo from "./../../assets/Icon/sony_logo.svg";

import product_02 from "./../../assets/Product/product_02.png";
import product_03 from "./../../assets/Product/product_03.png";
import product_04 from "./../../assets/Product/product_04.png";
import product_05 from "./../../assets/Product/product_05.png";
import Text2 from "../Font/Text2";
import Heading5 from "../Font/Heading5";
import Heading4 from "../Font/Heading4";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import NotifySnackbar from "./notifySnackbar";
import { getCustomerLoginDetails } from "../helpers/utils/getCustomerLoginDetails";
import { customerDetailsSuccess } from "../../services/customer/customer";
import * as services from './../../services/services'
// const categoryData = [
//   {
//     id: 1,
//     mainCategory: "Play Station",
//     category: [
//       "Gaming PlayStation 4K",
//       "Gaming PlayStation 8K",
//       "2021 PlayStation's",
//       "Smart 4K PlayStation",
//       "Smart 4K PlayStation",
//       "Smart 8K PlayStation",
//       "Smart OLED PlayStation",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra PlayStation',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
//   {
//     id: 2,
//     mainCategory: "Television",
//     category: [
//       "Gaming TV 4K",
//       "Gaming TV 8K",
//       "2021 TV's",
//       "Smart 4K TV",
//       "Smart 4K TV",
//       "Smart 8K TV",
//       "Smart OLED TV",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra TV',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
//   {
//     id: 3,
//     mainCategory: "Home AV",
//     category: [
//       "Gaming Home AV 4K",
//       "Gaming Home AV 8K",
//       "2021 Home AV's",
//       "Smart 4K Home AV",
//       "Smart 4K Home AV",
//       "Smart 8K Home AV",
//       "Smart OLED Home AV",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Home AV',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
//   {
//     id: 4,
//     mainCategory: "Audio",
//     category: [
//       "Gaming Audio 4K",
//       "Gaming Audio 8K",
//       "2021 Audio's",
//       "Smart 4K Audio",
//       "Smart 4K Audio",
//       "Smart 8K Audio",
//       "Smart OLED Audio",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
//   {
//     id: 5,
//     mainCategory: "Home HV",
//     category: [
//       "Gaming Audio 4K",
//       "Gaming Audio 8K",
//       "2021 Audio's",
//       "Smart 4K Audio",
//       "Smart 4K Audio",
//       "Smart 8K Audio",
//       "Smart OLED Audio",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
//   {
//     id: 6,
//     mainCategory: "Sounds",
//     category: [
//       "Gaming Audio 4K",
//       "Gaming Audio 8K",
//       "2021 Audio's",
//       "Smart 4K Audio",
//       "Smart 4K Audio",
//       "Smart 8K Audio",
//       "Smart OLED Audio",
//     ],
//     productList: [
//       {
//         id: 0,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 1,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 2,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 3,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 4,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 5,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 6,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 7,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//       {
//         id: 8,
//         title: 'Sony KDDJKHKJFD 55" 4K Ultra Audio',
//         image: product_01,
//       },
//     ],
//     adBanner: [
//       {
//         id: 0,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 1,
//         image: NavbarAdBanner_01,
//       },
//       {
//         id: 2,
//         image: NavbarAdBanner_01,
//       },
//     ],
//   },
// ];
const cartData = [
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
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
    productFeatures: [
      {
        id: 1,
        text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
      },
      {
        id: 1,
        text: "Multi-position stand for versatile TV placement",
      },
      {
        id: 1,
        text: "HD Smart 2048 x 1366 Pixels",
      },
    ],
  },
];
const searchData = {
  searchResultTitle: [
    "television 24 tv inches",
    "television stands for 55 inch tv ",
    "television stands for 70 inch ",
    "television with roku",
    "television in 80cm (32') t4410",
    "smart hd tv",
    "television in gaming tv 4k",
    "television in 2022",
    "television in smart OLED ",
    "television in 8k smart ",
    "television in blue ray big screen",
    " television in black",
  ],
  searchResultProduct: [
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
      productFeatures: [
        {
          id: 1,
          text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
          id: 1,
          text: "Multi-position stand for versatile TV placement",
        },
        {
          id: 1,
          text: "HD Smart 2048 x 1366 Pixels",
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
      productFeatures: [
        {
          id: 1,
          text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
          id: 1,
          text: "Multi-position stand for versatile TV placement",
        },
        {
          id: 1,
          text: "HD Smart 2048 x 1366 Pixels",
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
      productFeatures: [
        {
          id: 1,
          text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
          id: 1,
          text: "Multi-position stand for versatile TV placement",
        },
        {
          id: 1,
          text: "HD Smart 2048 x 1366 Pixels",
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
      productFeatures: [
        {
          id: 1,
          text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
          id: 1,
          text: "Multi-position stand for versatile TV placement",
        },
        {
          id: 1,
          text: "HD Smart 2048 x 1366 Pixels",
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
      productFeatures: [
        {
          id: 1,
          text: "Netflix|Prime Video|Disney+Hotstar|Youtube",
        },
        {
          id: 1,
          text: "Multi-position stand for versatile TV placement",
        },
        {
          id: 1,
          text: "HD Smart 2048 x 1366 Pixels",
        },
      ],
    },
  ],
};
function Header({ reloadingHandle, reloadHeader, categoryData, handleChangeCartPopup }) {

  const { customerSignUpMsg, customerSignInMsg, customerDetails } = useSelector((state) => state.customerReducer);

  const dispatch = useDispatch();

  // language changing in project //
  // console.log(categoryData);
  // const [allCategoryData,setAllCategoryData] = useState(categoryData)
  const [lang, setLang] = useState("en");
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];

  useEffect(() => {
    if (customerSignUpMsg === true) {
      openLogoutPopup();
    }
  }, [customerSignUpMsg]);

  useEffect(() => {
    if (customerSignInMsg === true) {
      openLogoutPopup();
    }
  }, [customerSignInMsg]);

  // Find Current language from {language} object
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [currentLanguage, setCurentLanguage] = useState(
    languages.find((l) => l.code === currentLanguageCode)
  );

  const { t } = useTranslation();

  // changing layout from right to left for arabic language"
  useEffect(() => {
    // console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // language dropdown open and close

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const handleLanguageChange = (lang) => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    setCurentLanguage(lang);
    i18next.changeLanguage(lang.code);
  };

  const [height, setHeight] = useState(0);
  const { pathname } = useLocation();
  const [loginPopup, setLoginPopup] = useState(false);
  const [categoryPopup, setCategoryPopup] = useState(false);
  const [loginMode, setLoginMode] = useState("");
  const [loginWrapper, setLoginWrapper] = useState(false);
  const [userLoginPopup, setUserLoginPopup] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const openSearchPopup = (e) => {
    console.log(e.target.value);
    setSearchPopup(true);
    if (e.target.value === "") {
      setSearchPopup(false);
    }
  };
  const closeSearchPopup = () => {
    setSearchPopup(false);
  };
  // const [cartPopup, setCartPopup] = useState(false);
  // const closeCartPopup = () => {
  //   setCartPopup(false);
  // };
  // const handleChangeCartPopup = (value) => {
  //   setCartPopup(value);
  //   // setPopupProduct(product);
  // };
  //   useEffect(() => {
  //     // debugger
  //     if(localStorage.getItem('loginWrapper') ){

  //       async function init() {
  //         const latestLoginWrapper = await localStorage.getItem('loginWrapper');
  //         const latestLoginPopup = await localStorage.getItem('loginPopup');
  //         console.log(JSON.parse(latestLoginWrapper));
  //         console.log(JSON.parse(latestLoginPopup));
  //         setLoginWrapper(JSON.parse(latestLoginWrapper));
  //         setLoginPopup(JSON.parse(latestLoginPopup));
  //       }
  //       init();
  //     }
  // }, [])
  useEffect(() => {
    // debugger

    function init() {
      const latestLoginWrapper = localStorage.getItem("loginWrapper");
      const latestLoginPopup = localStorage.getItem("loginPopup");
      // console.log(JSON.parse(latestLoginWrapper));
      // console.log(JSON.parse(latestLoginPopup));
      setLoginWrapper(JSON.parse(latestLoginWrapper));
      setLoginPopup(JSON.parse(latestLoginPopup));
    }
    init();
  }, [
    JSON.parse(localStorage.getItem("loginWrapper")),
    JSON.parse(localStorage.getItem("loginPopup")),
    JSON.parse(localStorage.getItem("loginMode")),
  ]);

  //   useEffect(() => {
  //     // debugger
  //     if(localStorage.getItem('loginWrapper') ){

  //       async function init() {
  //         const latestLoginWrapper = await localStorage.getItem('loginWrapper');
  //         const latestLoginPopup = await localStorage.getItem('loginPopup');
  //         console.log(JSON.parse(latestLoginWrapper));
  //         console.log(JSON.parse(latestLoginPopup));
  //         setLoginWrapper(JSON.parse(latestLoginWrapper));
  //         setLoginPopup(JSON.parse(latestLoginPopup));
  //       }
  //       init();
  //     }
  // }, [reloadHeader])
  const openLoginPopup = () => {
    setUserLoginPopup(!userLoginPopup);
    setLoginPopup(userLoginPopup ? false : true);
    localStorage.setItem("loginPopup", JSON.stringify(true));
    setCategoryPopup(false);
    setLoginMode("");
  };
  const openProductPopup = () => {
    setCategoryPopup(!categoryPopup);
    setLoginPopup(false);
  };

  const openLoginWrapper = (mode) => {
    setLoginMode(mode);
    setLoginWrapper(true);
    setUserLoginPopup(false);
    console.log(loginWrapper);
    localStorage.setItem("loginMode", JSON.stringify(mode));
    localStorage.setItem("loginWrapper", JSON.stringify(true));
    localStorage.setItem("loginPopup", JSON.stringify(true));
  };
  const closeLoginPopup = () => {
    if (document.querySelector(".login__popup__container")) {
      // reloadingHeader()
      const element = document.querySelector(".login__popup__container");
      element.classList.remove("login__popup__container");
      element.classList.add("login__popup__container__disable");
    }
    localStorage.setItem("loginMode", JSON.stringify("signin"));
    localStorage.setItem("loginWrapper", JSON.stringify(false));
    localStorage.setItem("loginPopup", JSON.stringify(false));
    setLoginMode("");
    setLoginPopup(false);
    setLoginWrapper(false);
  };
  useEffect(() => {
    setLoginMode(loginMode);
  }, [loginWrapper]);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryData && categoryData?.children_data?.[0]
  );
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState();

  const [navIndex, setNavIndex] = useState("");
  const [menuIndex, setMenuIndex] = useState(0);
  const [className, setClassName] = useState({
    allCategories: "navbar__link active__navbar__link",
    topDeals: "navbar__link",
    dealsOfTheDay: "navbar__link",
    digitalCards: "navbar__link",
    topSellers: "navbar__link",
    others: "navbar__link",
    services: "navbar__link",
  });
  const [mobileClassName, setMobileClassName] = useState({
    home: "mobile__navbar__link active__mobile__navbar__link",
    playstation: "mobile__navbar__link",
    television: "mobile__navbar__link",
    camera: "mobile__navbar__link",
    laptops: "mobile__navbar__link",
    services: "mobile__navbar__link",
  });
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileShowPopup, setMobileShowPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeight(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [window.pageYOffset]);

  useEffect(() => {
    if (height > 112) {
      document.querySelector(".main__navbar__container").style.position =
        "fixed";
    } else if (height < 112) {
      document.querySelector(".main__navbar__container").style.position =
        "absolute";
    }
  }, [height]);
  useEffect(() => {
    let path = {
      allCategories: "navbar__link",
      topDeals: "navbar__link",
      dealsOfTheDay: "navbar__link",
      digitalCards: "navbar__link",
      topSellers: "navbar__link",
      others: "navbar__link",
      services: "navbar__link",
    };
    let mobilepath = {
      home: "mobile__navbar__link ",
      playstation: "mobile__navbar__link",
      television: "mobile__navbar__link",
      camera: "mobile__navbar__link",
      laptops: "mobile__navbar__link",
      others: "mobile__navbar__link",
      services: "mobile__navbar__link",
      allCategories: "mobile__navbar__link",
    };
    if (pathname.includes("/playstation")) {
      // path.playstation = "navbar__link active__navbar__link";
      mobilepath.playstation =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/television")) {
      // path.television = "navbar__link active__navbar__link";
      mobilepath.television =
        "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/camera")) {
      // path.camera = "navbar__link active__navbar__link";
      mobilepath.camera = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/laptops")) {
      // path.laptops = "navbar__link active__navbar__link";
      mobilepath.laptops = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/top-deals")) {
      path.topDeals = "navbar__link active__navbar__link";
      // mobilepath.topDeals = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/deals-of-the-day")) {
      path.dealsOfTheDay = "navbar__link active__navbar__link";
      // mobilepath.dealsOfTheDay = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/digital-cards")) {
      path.digitalCards = "navbar__link active__navbar__link";
      // mobilepath.digitalCards = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/top-sellers")) {
      path.topSellers = "navbar__link active__navbar__link";
      // mobilepath.topSellers = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/others")) {
      path.others = "navbar__link active__navbar__link";
      mobilepath.others = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/services")) {
      path.services = "navbar__link active__navbar__link";
      mobilepath.services = "mobile__navbar__link active__mobile__navbar__link";
    } else if (pathname.includes("/allCategories")) {
      path.allCategories = "navbar__link active__navbar__link";
      mobilepath.allCategories =
        "mobile__navbar__link active__mobile__navbar__link";
    } else {
      path = {
        allCategories: "navbar__link",
        topDeals: "navbar__link",
        dealsOfTheDay: "navbar__link",
        digitalCards: "navbar__link",
        topSellers: "navbar__link",
        others: "navbar__link",
        services: "navbar__link",
      };
      mobilepath = {
        allCategories: "mobile__navbar__link",
        topDeals: "mobile__navbar__link",
        dealsOfTheDay: "mobile__navbar__link",
        digitalCards: "mobile__navbar__link",
        topSellers: "mobile__navbar__link",
        others: "mobile__navbar__link",
        services: "mobile__navbar__link",
        allCategories: "mobile__navbar__link",
      };
    }
    setClassName(path);
    setMobileClassName(mobilepath);
  }, [pathname]);

  const navbarTab__mouseTab = (popupValue, navIndex, menuIndex) => {
    setCategoryPopup(popupValue);
    setNavIndex(navIndex);
    setMenuIndex(menuIndex);
  };
  const mobileNavbarTab__mouseTab = (
    popupValue,
    navIndex,
    newMenuIndex,
    currentCategory
  ) => {
    if (menuIndex === newMenuIndex) {
      setMobileShowPopup(popupValue);
    } else if (menuIndex !== newMenuIndex) {
      setMobileShowPopup(true);
    }
    setNavIndex(navIndex);
    setMenuIndex(newMenuIndex);
    setMobileSelectedCategory(currentCategory);
  };

  const changeSelectedCategory = (catObj) => {
    setSelectedCategory(catObj);
  };
  const changeReducerSelectedCategory = (catObj) => {
    dispatch({
      type: types.SET__SELECTED__CATEGORY,
      payload: catObj,
    });
  };
  const customerLogout = () => {
    localStorage.removeItem("custDetails");
    dispatch(customerDetailsSuccess(''));
    let params = {
      id: customerDetails.id
    }
    dispatch(services.customerLogout(params))
  }

  const openLogoutPopup = () => {
    setUserLoginPopup(!userLoginPopup);
  };

  return (
    <>
      <NotifySnackbar />
      <div className="container-fluid main__navbar__container">
        <div
          className="header__container"
          onMouseEnter={() => navbarTab__mouseTab(false, "")}
        >
          <div className="header">
            <div className="row header__row">
              <Link
                className="col-4  col-sm-6 col-lg-3  col-xl-2  header__link"
                to="/"
              >
                <img
                  src={white_side_menu_icon}
                  alt="header__sidemenu__icon"
                  className="header__sidemenu__icon"
                  onClick={() => setMobileNavbar(!mobileNavbar)}
                />
                <img src={navbar_logo} alt="logo" className="header__logo" />
              </Link>
              <div className="col-0  col-sm-0  col-lg-5 col-xl-7  search__box__block">
                <form autoComplete="off">
                  <div className="search__box">
                    <input
                      type="text"
                      name="search"
                      className="search__input"
                      placeholder="Type Your Search..."
                      onChange={(e) => openSearchPopup(e)}
                      autoComplete="off"
                    />
                    <img src={search} alt="" className="header__icon" />
                  </div>
                </form>

                <div
                  className={
                    searchPopup
                      ? "row search__box__result__popup"
                      : "row search__box__result__popup__disable"
                  }
                >
                  <div className="col-xl-5 search__result__left__part">
                    {searchData.searchResultTitle.map((title, titleIndex) => {
                      let firstWord = title.split(" ")[0].trim();
                      let remainWord = title
                        .split(" ")
                        .slice(2, title.length)
                        .join(" ")
                        .trim();

                      return (
                        <p key={titleIndex}>
                          <Text2 text={firstWord} span={true} />{" "}
                          <Heading5 text={remainWord} span={true} />
                        </p>
                      );
                    })}
                  </div>
                  <div className="col-xl-7 search__result__right__part">
                    {searchData.searchResultProduct.map(
                      (product, productIndex) => {
                        return (
                          <div
                            key={product.id}
                            className="row search__result__product__block mb-1"
                          >
                            <div className="col-2 search__result__product__image__block">
                              <img
                                className="search__result__product__image"
                                src={product.image}
                                alt={product.productName}
                              />
                            </div>
                            <div className="col-10 search__result__product__text">
                              <Heading7 text={product.productName} />
                              <RatingBlock
                                rating={product.rating}
                                totalRatings={product.totalRatings}
                              />
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-4  col-xl-3  ">
                <div className="header__icon__block">
                  <div></div>
                  <div className="header__icon__inner__block">
                    <img
                      src={white_search}
                      alt=""
                      className="header__search__icon header__icon"
                    />
                    <div className="main__language__selection">
                      <img
                        src={language}
                        alt=""
                        className="header__language__icon header__icon"
                        onClick={() =>
                          setIsLanguageMenuOpen(!isLanguageMenuOpen)
                        }
                      />
                      <div
                        className="language__selction"
                        onClick={() =>
                          setIsLanguageMenuOpen(!isLanguageMenuOpen)
                        }
                      >
                        <p className="language">{currentLanguage.name} </p>
                        <img
                          src={white_down_arrow}
                          alt=""
                          className="down__arrow__icon"
                        />
                      </div>
                      <div
                        className={
                          isLanguageMenuOpen
                            ? "language__option__dropdown"
                            : "language__option__dropdown__disable"
                        }
                      >
                        {languages.map((lang, langIndex) => {
                          return (
                            <p
                              onClick={() => handleLanguageChange(lang)}
                              className="language__option"
                              key={lang.country_code}
                              value={lang.code}
                            >
                              {lang.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <Link to="/findstore">
                      <img
                        src={location}
                        alt=""
                        className="location header__icon"
                      />
                    </Link>
                    <Link to="/user/wishlist">
                      <img
                        src={favourite}
                        alt=""
                        className="favourite header__icon"
                      />
                    </Link>
                    {customerDetails === "" ? (
                      <div className="header__user__block">
                        <img
                          src={user}
                          alt=""
                          className="user header__icon"
                          onClick={() => openLoginPopup()}
                        />
                        <div
                          className={
                            userLoginPopup
                              ? "signin__signup__popup"
                              : "signin__signup__popup__disable"
                          }
                        >
                          <button
                            onClick={() => openLoginWrapper("signin")}
                            className="signin__button"
                          >
                            SIGN IN
                          </button>
                          <button
                            onClick={() => openLoginWrapper("signup")}
                            className="signup__button"
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="header__user__block">
                          <img
                            src={user}
                            alt=""
                            className="user header__icon"
                            onClick={() => openLogoutPopup()}
                          />
                          <div
                            className={
                              userLoginPopup
                                ? "signin__signup__popup"
                                : "signin__signup__popup__disable"
                            }
                          >
                            {`${customerDetails.firstname !== null ? customerDetails.firstname : ""} ${customerDetails.lastname !== null ? customerDetails.lastname : ""}`}
                            <button
                              onClick={() => customerLogout("signin")}
                              className="signin__button"
                            >
                              LOG OUT
                            </button>
                          </div>
                        </div>
                      </>
                    )}

                    <Link to="/cart"
                      // onClick={() => handleChangeCartPopup(true)}
                      className="cart__icon__block"
                    >
                      <img
                        src={shopping_cart}
                        alt=""
                        className="shopping_cart header__icon"
                      />
                      <p className="cart__item__count">{99}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" navbar__container">
          <div className=" navbar__row">
            <div className=" navbar">
              <div className="navbar__link__block">
                <div
                  onClick={() => openProductPopup()}
                  className="navbar__allCategories"
                >
                  <img src={menu} alt="" className="navbar__menu__icon" />
                  <span className="all__categoriy__navabar__link">
                    {t("navbar.all_catetegories")}
                  </span>
                </div>
                <Link className={className.topDeals} to="/top-deals">
                  {t("navbar.top_deals")}
                </Link>
                <Link
                  className={className.dealsOfTheDay}
                  to="/deals-of-the-day"
                >
                  {t("navbar.delas_of_the_day")}
                </Link>
                <Link className={className.digitalCards} to="/digital-cards">
                  {t("navbar.digital_cards")}
                </Link>
                <Link className={className.topSellers} to="/top-sellers">
                  {t("navbar.top_sellers")}
                </Link>
                <Link className={className.others} to="/others">
                  {t("navbar.others")}
                </Link>
                <Link className={className.services} to="/services">
                  {t("navbar.services")}
                  <img
                    src={navbar_white_down_arrow}
                    alt=""
                    className="down__arrow__icon"
                  />
                </Link>
              </div>
              <div className="icon__block">
                <img src={menu} alt="" className="menu__icon" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            mobileNavbar ? "mobile__navbar" : "mobile__navbar__disable"
          }
        >
          <div
            className={
              mobileShowPopup
                ? "mobile__navbar__link__block__disable"
                : "mobile__navbar__link__block"
            }
          >
            <div className="mobile_top_header">
              <Link className="mobile_user_name" to="/">
                <span>
                  <img src={user_icon} alt="user" />
                </span>
                <p className="d-inline-block mb-0">
                  <strong>John Doe</strong>
                </p>
              </Link>
              <div
                className="mobile_close_icon"
                onClick={() => setMobileNavbar(!mobileNavbar)}
              >
                <img src={close_icon} alt="close" />
              </div>
            </div>
            {categoryData?.children_data?.map((catObj, catIndex) => {
              // console.log(catObj);

              return (
                <Link
                  key={catObj.id}
                  to="/"
                  onClick={() =>
                    mobileNavbarTab__mouseTab(
                      !mobileShowPopup,
                      catObj.name,
                      catObj.id,
                      catObj
                    )
                  }
                  className={
                    navIndex === catObj.name
                      ? "active__mobile__navbar__link mobile__navbar__link"
                      : mobileClassName.television
                  }
                >
                  {catObj.name}
                  <img
                    src={navbar_white_down_arrow}
                    alt=""
                    className="down__arrow__icon"
                  />
                </Link>
              );
            })}
            <Link
              to="/"
              onClick={() =>
                mobileNavbarTab__mouseTab(!mobileShowPopup, "services", 7, {})
              }
              className={
                navIndex === "services"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.services
              }
            >
              Services
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </Link>
            <Link
              to="/"
              onClick={() =>
                mobileNavbarTab__mouseTab(
                  !mobileShowPopup,
                  "allCategories",
                  7,
                  {}
                )
              }
              className={
                navIndex === "allCategories"
                  ? "active__mobile__navbar__link mobile__navbar__link"
                  : mobileClassName.allCategories
              }
            >
              All Categories
              <img
                src={navbar_white_down_arrow}
                alt=""
                className="down__arrow__icon"
              />
            </Link>
            <hr />
            <Link className="mobile__navbar__link" to="/top-deals">
              {t("navbar.top_deals")}
            </Link>
            <Link className="mobile__navbar__link" to="/deals-of-the-day">
              {t("navbar.delas_of_the_day")}
            </Link>
            <Link className="mobile__navbar__link" to="/digital-cards">
              {t("navbar.digital_cards")}
            </Link>
            <Link className="mobile__navbar__link" to="/top-sellers">
              {t("navbar.top_sellers")}
            </Link>
            <hr />
            <Link className="mobile__navbar__link" to="/support">
              My Profile
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              My Orders
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              My Wallet
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              My Whishlist
            </Link>
            <hr />
            <Link className="mobile__navbar__link" to="/support">
              Find Stores
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              About Us
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              Terms & Conditions
            </Link>
            <Link className="mobile__navbar__link" to="/services">
              Privacy Policy
            </Link>
            <Link className="mobile__navbar__link" to="/support">
              <strong>Log Out</strong>
            </Link>
          </div>
          <div
            className={
              mobileShowPopup
                ? "mobile__navbar__link__nested__block"
                : "mobile__navbar__link__nested__block__disable"
            }
          >
            <button
              onClick={() => setMobileShowPopup(!mobileShowPopup)}
              className="back__mobile__icon"
            >
              <img src={backarrow} />
            </button>
            <MobilePopup
              currentCategoryData={mobileSelectedCategory}
              menuIndex={menuIndex}
            />
          </div>
        </div>

        <div
          className={
            categoryPopup
              ? "container-fluid category__popup__container"
              : "container-fluid category__popup__container__disable"
          }
        >
          <div
            className="row category__popup__block"
            onMouseLeave={() => navbarTab__mouseTab(false, "")}
          >
            <div className="col-6 col-sm-6 col-md-3 category__popup__left__block">
              {categoryData?.children_data?.map((catObj, catIndex) => {
                return (
                  <Link
                    to={`${catObj.name
                      .toLowerCase()
                      .trim()
                      .replace(/ /g, "-")}-c-${catObj.id}`}
                    key={catObj.id}
                    onMouseOver={() => changeSelectedCategory(catObj)}
                    onClick={() => changeReducerSelectedCategory(catObj)}
                    className={
                      selectedCategory.name === catObj.name
                        ? "selected__mainCategory__block"
                        : "mainCategory__block"
                    }
                  >
                    <p className="mainCategory__left__block">{catObj.name}</p>
                    <img
                      src={popup_right_arrow}
                      alt=""
                      className="popup__right__arrow"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="col-6 col-sm-6 col-md-9 category__popup__right__block">
              <div className="mainCategory__title__block">
                <p className="mainCategory__right__block">
                  {selectedCategory?.display_name}
                </p>
              </div>
              <div className="subCategory__block">
                {selectedCategory?.children_data?.map((subcat, subcatIndex) => {
                  // console.log(`${subcat.name.toLowerCase().trim().replace(/ /g,"-")}-c-${subcat.id}`);
                  // console.log(.lowerCase().trim().replace(/ /g,"-")}-c-${subcat.id});
                  return (
                    <Link
                      key={subcatIndex}
                      className="subcategory"
                      to={`${subcat.name
                        .toLowerCase()
                        .trim()
                        .replace(/ /g, "-")}-c-${subcat.id}`}
                      onClick={() =>
                        changeReducerSelectedCategory(selectedCategory)
                      }
                    >
                      <p>{subcat.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            loginPopup
              ? "container-fluid login__popup__container"
              : "container-fluid login__popup__container__disable"
          }
        >
          {loginWrapper ? (
            <LoginWrapper
              loginMode={loginMode}
              closeLoginPopup={closeLoginPopup}
            />
          ) : (
            <LoginWrapper
              loginMode={loginMode}
              closeLoginPopup={closeLoginPopup}
            />
          )}
        </div>
      </div>

    </>
  );
}

export default Header;
