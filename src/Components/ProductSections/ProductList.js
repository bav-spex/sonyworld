import React, { useState, useEffect } from "react";
import ProductLists from "./AllProductList";
import Dropdown from "../DropDown";
// import GridButton from "../../Components/Buttons/GridButton";
// import ListButton from "../../Components/Buttons/ListButton";
import ListIcon from "./../../assets/Icon/list_icon.svg";
import GridIcon from "./../../assets/Icon/grid_icon.svg";

import sony_logo from "./../../assets/Icon/sony_logo.svg";

import product_01 from "./../../assets/Product/product_01.png";
import product_02 from "./../../assets/Product/product_02.png";
import product_03 from "./../../assets/Product/product_03.png";
import product_04 from "./../../assets/Product/product_04.png";
import product_05 from "./../../assets/Product/product_05.png";

const dropdownOptions = [
  {
    label: "Popularity",
    value: "popularity",
  },
  {
    label: "Low to High",
    value: "lowtohigh",
  },
  {
    label: "High to Low",
    value: "hightolow",
  },
];

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

const Product_List = (props) => {
  const [singleGrid, setSingleGrid] = useState(false);
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const [productView, setProductView] = useState("grid");
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const onSelectSortby = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const onClickGridList = (type) => {
    if (type === "grid") {
      setProductView("grid");
    }
    if (type === "list") {
      setProductView("list");
    }
  };
  return (
    <div>
      <div className=" allproducts__product__list">
        <div className="product__header">
          <div className="product__count">22 Products</div>
          <div className="product__sortby__grid">
            <div className="product__sortby">
              <div className="sortby__block">
                <p className="sortby__text">Sort By:</p>
                {/* <label className="label">Sort by: &nbsp;</label> */}
                <select
                  onChange={(e) => onSelectSortby(e)}
                  className="sortby__select"
                  // className="_customselect"
                >
                  {dropdownOptions.map(({ label, value }) => (
                    <option
                      className="sortby__options"
                      key={value + label}
                      value={value}
                    >
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product__view">
              <div
                className="grid__block"
                onClick={() => onClickGridList("grid")}
              >
                <img className="grid__view" src={GridIcon} />
              </div>
              <div
                className="list__block"
                onClick={() => onClickGridList("list")}
              >
                <img className="list__view" src={ListIcon} />

                {/* <ListButton isActive={false} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row product__filter__list">
          <div className="col-sm-4 product__filter">test 1</div>
          <div className="col-sm-8 product__list">
            {singleGrid ? (
              <div className="row">
                <div className="col-sm-12">test 2</div>
                <div className="col-sm-12">test 3</div>
                <div className="col-sm-12">test 4</div>
              </div>
            ) : (
              <div className="row">
                {/* <div className="col-sm-4">
                  <ProductLists product={peopleUltimatelyBoughtData[0]}/>
                </div> */}

                <ProductLists products={peopleUltimatelyBoughtData} />

                {/* <div className="col-sm-4">test 3</div>
                <div className="col-sm-4">test 4</div> */}
              </div>
            )}
          </div>
        </div>

        {/* <div className="col-6 section__one__title__block">
        <p className="section__title">{props.title}</p>
      </div>
      <div className="col-6 section__one__image__block">
        <img
          className="section__one__image"
          src={props.bannerImage}
          alt="telivision"
        />
      </div> */}
      </div>
    </div>
  );
};

export default Product_List;
