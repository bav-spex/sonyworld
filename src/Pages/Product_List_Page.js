import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import "./../SCSS/ProductListPage/_productListPageFilterProductBlock.scss";
// import "./../SCSS/ProductListPage/_productListBannerSection.scss";
// import "./../SCSS/ProductListPage/_productListCategorySection.scss";
// import "./../SCSS/ProductListPage/_productListFilter.scss";

import "./../SCSS/_productListPage.scss";
import PLPBannerAndCategorySection from "../Components/ProductListPageComponent/PLPBannerAndCategorySection";
import PLPFilterProductBlock from "../Components/ProductListPageComponent/PLPFilterProductBlock";
import PLPBannerTwo from "../Components/ProductListPageComponent/PLPBannerTwo";
import PLPSimilarProduct from "../Components/ProductListPageComponent/PLPSimilarProduct";

import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import white_tv from "./../assets/Icon/white_tv.svg";
import red_tv from "./../assets/Icon/red_tv.svg";
import white_accessories from "./../assets/Icon/white_accessories.svg";
import red_accessories from "./../assets/Icon/red_accessories.svg";
import bannerImg1 from "./../assets/Product/plp_banner_two.png";

import sony_logo from "./../assets/Icon/sony_logo.svg";
import product_01 from "./../assets/Product/product_01.png";
import product_02 from "./../assets/Product/product_02.png";
import product_03 from "./../assets/Product/product_03.png";
import product_04 from "./../assets/Product/product_04.png";
import product_05 from "./../assets/Product/product_05.png";
import PLPProductPopup from "../Components/Popup/PLPProductPopup";
import PLPComparePopup from "../Components/Popup/PLPComparePopup";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";
import MobileProductListPage from "./MobilePages/Mobile_Product_List_Page";
import { useParams } from "react-router";
import { loadCategoryFilterData } from "../redux/appAction";
import { getProductsOfCategory } from "../services/plp.service";

const categoryLists = [
  {
    title: "TELEVISION",
    defaultIcon: white_tv,
    selectedIcon: red_tv,
    bannerImage: feature_product_04,
  },
  {
    title: "OLED",
    defaultIcon: white_tv,
    selectedIcon: red_tv,
    bannerImage: product_01,
  },
  {
    title: "FULL ARRAY LED",
    defaultIcon: white_tv,
    selectedIcon: red_tv,
    bannerImage: feature_product_04,
  },
  {
    title: "ALL LEDS",
    defaultIcon: white_tv,
    selectedIcon: red_tv,
    bannerImage: product_04,
  },
  {
    title: "GOOGLE TV",
    defaultIcon: white_tv,
    selectedIcon: red_tv,
    bannerImage: product_05,
  },
  {
    title: "ACCESSORIES",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES1",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES2",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES3",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES4",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES5",
    defaultIcon: white_accessories,
    selectedIcon: red_accessories,
    bannerImage: feature_product_04,
  },
];

const bestSellersData = [
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
    id: 6,
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

const bannerImageData = [
  {
    image: feature_product_04,
    title: "Television",
  },
  {
    image: feature_product_04,
    title: "",
  },
  {
    image: feature_product_04,
    title: "Television",
  },
];
const compareData = [
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
];
const newArrivalData = [
  {
    id: 0,
    baseImage: newArrivals_01,
    name: "Camera",
    rating: 4.5,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 1,
    baseImage: newArrivals_02,
    name: "Silver Porto Headset",
    rating: 3,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 3,
    baseImage: newArrivals_03,
    name: "Car Audio Speaker KM100",
    rating: 3.5,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 4,
    baseImage: newArrivals_04,
    name: "Sony Viao Laptop",
    rating: 2.5,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 5,
    baseImage: newArrivals_05,
    name: "Network Camera",
    rating: 5,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 6,
    baseImage: newArrivals_01,
    name: "Camera",
    rating: 3.2,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 7,
    baseImage: newArrivals_02,
    name: "Silver Porto Headset",
    rating: 4.8,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 8,
    baseImage: newArrivals_03,
    name: "Car Audio Speaker KM100",
    rating: 2,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 9,
    baseImage: newArrivals_04,
    name: "Sony Viao Laptop",
    rating: 1,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
  {
    id: 10,
    baseImage: newArrivals_05,
    name: "Network Camera",
    rating: 3,
    totalRatings: 2183,
    oldPrice: 1999,
    price: 1699,
  },
];
const Product_List_Page = () => {
  const { category } = useParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [filterAndProductsData, setfilterAndProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(category);
  // console.log(category.split("-").slice(-3));
  // console.log(category.split("-").slice(-1)[0]);
  const [subCategoryId, setSubCategoryId] = useState(
    category.split("-").slice(-1)[0]
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterDetails, setFilterDetails] = useState({ filterDetails: {} });
  useEffect(async () => {
    const urlCategoryId = category.split("-").slice(-1)[0];
    setSelectedCategoryId(urlCategoryId);
    const categoryIdArray = [];
    categoryIdArray.push(urlCategoryId);
    setFilterDetails({ filterDetails: { category: categoryIdArray } });
    // const data = loadProductsOfCategoryData(category.split("-").slice(-3)[0]).then((res) => console.log(res));
    // console.log(data);
    const data = await getProductsOfCategory({
      id: category.split("-").slice(-1)[0],
      limit: "",
      offset: "",
      sortBy: "",
    });
    console.log(data);
    if (data.data) {
      setfilterAndProductsData(data.data);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    dispatch(loadCategoryFilterData(filterDetails));
  }, [filterDetails]);

  const selectedCategory = useSelector(
    (state) => state.appData.selectedCategory
  );
  // console.log(selectedCategory);
  const filterData = useSelector((state) => state.appData.filterData);
  // console.log(filterData);

  const updateSelectedSubCategoryId = async (subCategory) => {
    // console.log(subCategory);
    setSelectedCategoryId(subCategory.id);

    const data = await getProductsOfCategory({
      id: subCategory.id,
      limit: "",
      offset: "",
      sortBy: "",
    });
    setfilterAndProductsData(data.data);
    navigate(
      `/${subCategory.name.toLowerCase().trim().replace(/ /g, "-")}-c-${
        subCategory.id
      }`
    );
    // console.log(data);
  };

  //for updating id from filter section
  // useEffect(() => {
  //   let categoryIdArray = []
  //   const urlCategoryId = category.split("-").slice(-1)[0]
  //   categoryIdArray.push(urlCategoryId)
  //   dispatch(loadCategoryFilterData(category.split("-").slice(-1)[0]));
  // }, []);
  const [plpProductPopup, setPlpProductPopup] = useState(false);
  const [plpComparePopup, setPlpComparePopup] = useState(false);
  const [compareProductsData, setCompareProductData] = useState([]);
  const [popupProduct, setPopupProduct] = useState({
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
  });
  const closeProductPopup = () => {
    setPlpProductPopup(false);
  };
  const handleChangeProductPopup = (value, product) => {
    setPlpProductPopup(value);
    setPopupProduct(product);
  };
  const closeComparePopup = () => {
    setPlpComparePopup(false);
  };
  const handleChangeComparePopup = (value, product) => {
    setPlpComparePopup(value);
    console.log(product);
    const arrayOfProduct = [...compareProductsData, product];
    if (compareProductsData.length < 4) {
      var dataArr = arrayOfProduct.map((item) => {
        return [JSON.stringify(item), item];
      }); // creates array of array
      var uniqueCompareProductData = new Map(dataArr); // create key value pair from array of array
      setCompareProductData([...uniqueCompareProductData.values()]);
    }
    // setPopupProduct(product);
    console.log(compareProductsData);
  };

  const removeProductFromCompareData = (id) => {
    console.log(id);
    // const newCompareData = compareProductsData.filter((id, index)=>{
    //   console.log(product.id,id);
    //   return id !== id
    // })
    // console.log("newCompareData",newCompareData);
  };
  if (loading) {
    return <h1>Product Loading...</h1>;
  }
  return (
    <>
      <div className="mb__product__list__container d-block d-lg-none pt-5">
        <MobileProductListPage />
      </div>
      <div className="container-fluid product__list__page__container d-none d-lg-block">
        <div className="product__list__page__block">
          <PLPBannerAndCategorySection
          selectedCategoryId={selectedCategoryId}
            updateSelectedSubCategoryId={updateSelectedSubCategoryId}
            selectedMainCategory={selectedCategory}
            categoryData={categoryLists}
          />
          <PLPFilterProductBlock
            filterAndProductsData={filterAndProductsData}
            handleChangeProductPopup={handleChangeProductPopup}
            handleChangeComparePopup={handleChangeComparePopup}
          />
          <PLPBannerTwo bannerImage={bannerImg1} />
          <div className="plp__newArrival__block">
            {/* <CarouselTypeTwo
                productDetailPage={true}
                sectionTitle="You Can Also Purchase"
                carouselData={newArrivalData}
                productType="productOne"
                containerClassName="plp__youCanAlsoPurchase__block"
              /> */}
          </div>
        </div>
      </div>
      <div
        className={
          plpProductPopup
            ? "container-fluid plp__product__popup__container"
            : "container-fluid plp__product__popup__container__disable"
        }
      >
        <PLPProductPopup
          product={popupProduct}
          closeProductPopup={closeProductPopup}
        />
      </div>
      <div
        className={
          plpComparePopup
            ? "container-fluid plp__compare__popup__container"
            : "container-fluid plp__compare__popup__container__disable"
        }
      >
        <PLPComparePopup
          compareProductsData={compareProductsData}
          closeComparePopup={closeComparePopup}
          handleChangeComparePopup={handleChangeComparePopup}
          removeProductFromCompareData={removeProductFromCompareData}
        />
      </div>
    </>
  );
};

export default Product_List_Page;
