import React, { useState, useEffect } from "react";
import "./../../SCSS/ProductListPage/_plpFilterProductBlock.scss";

import ProductComparisonBlock from "./ProductComparisonBlock";
// import list_grey from "./../../assets/Icon/list_grey.svg";

import sony_logo from "./../../assets/Icon/sony_logo.svg";

import product_01 from "./../../assets/Product/product_01.png";
import product_02 from "./../../assets/Product/product_02.png";
import product_03 from "./../../assets/Product/product_03.png";
import product_04 from "./../../assets/Product/product_04.png";
import product_05 from "./../../assets/Product/product_05.png";
import Heading2 from "../Font/Heading2";
import Heading3 from "../Font/Heading3";
import Text3 from "../Font/Text3";
import ProductNine from "../ProductType/ProductNine";
import "./../../SCSS/ProductComparison/_productComparisonList.scss";

const peopleUltimatelyBoughtData1 = [
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
    productSpecification: [
      {
        type: "Key Specs",
        specs: [
          {
            title: "MODEL YEAR",
            text: "2022",
          },
          {
            title: "RESOLUTION",
            text: "8K (4320p)",
          },
          {
            title: "SCREEN SIZE CLASS",
            text: "65 inches",
          },
          {
            title: "High Dynamic Range (HDR)",
            text: "8K (4320p)",
          },
          {
            title: "HIGH DYNAMIC RANGE FORMAT",
            text: "2022",
          },
          {
            title: "LED PANEL TYPE",
            text: "Neo QLED",
          },
          {
            title: "NUMBER OF HDMI INPUTS (TOTAL)",
            text: "4",
          },
        ],
      },
      {
        type: "General",
        specs: [
          {
            title: "PRODUCT NAME",
            text: "QLED 8K Smart Tizen TV",
          },
          {
            title: "MODEL NUMBER",
            text: "QN65QN800AFXZA",
          },
          {
            title: "COLOR",
            text: "Stainless steel",
          },
          {
            title: "COLOR CATEGORY",
            text: "Silver",
          },
        ],
      },
      {
        type: "Box Dimension",
        specs: [
          {
            title: "HEIGHT",
            text: "37.3 inches",
          },
          {
            title: "WIDTH",
            text: "64 inches",
          },
          {
            title: "DEPTH",
            text: "7.7 inches",
          },
        ],
      },
    ],
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
    productSpecification: [
      {
        type: "Key Specs",
        specs: [
          {
            title: "MODEL YEAR",
            text: "2022",
          },
          {
            title: "RESOLUTION",
            text: "8K (4320p)",
          },
          {
            title: "SCREEN SIZE CLASS",
            text: "65 inches",
          },
          {
            title: "High Dynamic Range (HDR)",
            text: "8K (4320p)",
          },
          {
            title: "HIGH DYNAMIC RANGE FORMAT",
            text: "2022",
          },
          {
            title: "LED PANEL TYPE",
            text: "Neo QLED",
          },
          {
            title: "NUMBER OF HDMI INPUTS (TOTAL)",
            text: "4",
          },
        ],
      },
      {
        type: "General",
        specs: [
          {
            title: "PRODUCT NAME",
            text: "QLED 8K Smart Tizen TV",
          },
          {
            title: "MODEL NUMBER",
            text: "QN65QN800AFXZA",
          },
          {
            title: "COLOR",
            text: "Stainless steel",
          },
          {
            title: "COLOR CATEGORY",
            text: "Silver",
          },
        ],
      },
      {
        type: "Box Dimension",
        specs: [
          {
            title: "HEIGHT",
            text: "37.3 inches",
          },
          {
            title: "WIDTH",
            text: "64 inches",
          },
          {
            title: "DEPTH",
            text: "7.7 inches",
          },
        ],
      },
    ],
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
    productSpecification: [
      {
        type: "Key Specs",
        specs: [
          {
            title: "MODEL YEAR",
            text: "2022",
          },
          {
            title: "RESOLUTION",
            text: "8K (4320p)",
          },
          {
            title: "SCREEN SIZE CLASS",
            text: "65 inches",
          },
          {
            title: "High Dynamic Range (HDR)",
            text: "8K (4320p)",
          },
          {
            title: "HIGH DYNAMIC RANGE FORMAT",
            text: "2022",
          },
          {
            title: "LED PANEL TYPE",
            text: "Neo QLED",
          },
          {
            title: "NUMBER OF HDMI INPUTS (TOTAL)",
            text: "4",
          },
        ],
      },
      {
        type: "General",
        specs: [
          {
            title: "PRODUCT NAME",
            text: "QLED 8K Smart Tizen TV",
          },
          {
            title: "MODEL NUMBER",
            text: "QN65QN800AFXZA",
          },
          {
            title: "COLOR",
            text: "Stainless steel",
          },
          {
            title: "COLOR CATEGORY",
            text: "Silver",
          },
        ],
      },
      {
        type: "Box Dimension",
        specs: [
          {
            title: "HEIGHT",
            text: "37.3 inches",
          },
          {
            title: "WIDTH",
            text: "64 inches",
          },
          {
            title: "DEPTH",
            text: "7.7 inches",
          },
        ],
      },
    ],
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
    productSpecification: [
      {
        type: "Key Specs",
        specs: [
          {
            title: "MODEL YEAR",
            text: "2022",
          },
          {
            title: "RESOLUTION",
            text: "8K (4320p)",
          },
          {
            title: "SCREEN SIZE CLASS",
            text: "65 inches",
          },
          {
            title: "High Dynamic Range (HDR)",
            text: "8K (4320p)",
          },
          {
            title: "HIGH DYNAMIC RANGE FORMAT",
            text: "2022",
          },
          {
            title: "LED PANEL TYPE",
            text: "Neo QLED",
          },
          {
            title: "NUMBER OF HDMI INPUTS (TOTAL)",
            text: "4",
          },
        ],
      },
      {
        type: "General",
        specs: [
          {
            title: "PRODUCT NAME",
            text: "QLED 8K Smart Tizen TV",
          },
          {
            title: "MODEL NUMBER",
            text: "QN65QN800AFXZA",
          },
          {
            title: "COLOR",
            text: "Stainless steel",
          },
          {
            title: "COLOR CATEGORY",
            text: "Silver",
          },
        ],
      },
      {
        type: "Box Dimension",
        specs: [
          {
            title: "HEIGHT",
            text: "37.3 inches",
          },
          {
            title: "WIDTH",
            text: "64 inches",
          },
          {
            title: "DEPTH",
            text: "7.7 inches",
          },
        ],
      },
    ],
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

const ProductComparisonList = (props) => {
  return (
    <div className="product__comparison__list__container">
      <div className="product__comparison__list__title__block d-flex justify-content-lg-between py-5">
        <Heading3 text="Back to Page" />
        <div className="product__comparison__list__remove__comparison">
          Remove Comparison
        </div>
      </div>
      <div className="product__comparison__list bg-white py-3">
        <ProductComparisonBlock productsData={peopleUltimatelyBoughtData1} />
      </div>
    </div>
  );
};

export default ProductComparisonList;
