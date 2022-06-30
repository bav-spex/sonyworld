import React, { useState } from "react";
import "./../SCSS/_searchPage.scss";
import SearchProduct from "./../Components/ProductType/SearchProduct";
import Heading3 from "../Components/Font/Heading3";
import cancel_grey from "./../assets/Icon/cancel_grey.svg";
import Heading2 from "../Components/Font/Heading2";
import Text1 from "../Components/Font/Text1";
import Text4 from "../Components/Font/Text4";

import sony_logo from "./../assets/Icon/sony_logo.svg";

import product_01 from "./../assets/Product/product_01.jpg";
import product_02 from "./../assets/Banner/newArrivals_01.png";
import product_03 from "./../assets/Product/product_03.jpg";
import product_04 from "./../assets/Product/product_04.jpg";
import product_05 from "./../assets/Product/product_05.jpg";
import Text3 from "../Components/Font/Text3";

import bannerImg1 from "./../assets/Product/plp_banner_two.png";

import newArrivals_01 from "./../assets/NewArrivals/newArrivals_01.png";
import newArrivals_02 from "./../assets/NewArrivals/newArrivals_02.png";
import newArrivals_03 from "./../assets/NewArrivals/newArrivals_03.png";
import newArrivals_04 from "./../assets/NewArrivals/newArrivals_04.png";
import newArrivals_05 from "./../assets/NewArrivals/newArrivals_05.png";

import PLPBannerTwo from "../Components/ProductListPageComponent/PLPBannerTwo";
import CarouselTypeTwo from "../Components/CarouselTypeTwo";
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
function Search__Page() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const clearSearchInput = () => {
    setSearch("");
  };
  return (
    <>
      <div className="container-fluid search__page__input__container">
        <div className="search__page__input__block">
          <Text4 color="#ffffff" text="SEARCH RESULT" marginBottom={10} />
          <div className="row main__search__input__block">
            <div className="col-10 search__input__block">
              <input
                type="text"
                name="search"
                className="search__input"
                placeholder="Type Your Search..."
                // value={search}
                onChange={() => handleChange()}
              />
              <img
                onClick={() => clearSearchInput()}
                src={cancel_grey}
                alt=""
                className="cancel__button"
              />
            </div>
            <div
              className="col-2 search__button__block
            "
            >
              <button className="search__button">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid search__page__content__container">
        <div className="search__page__content__block">
          <Heading2 text="2192" span={true} />
          <span className="result__text">Results</span>
          <div className="row search__product__container">
            <div className="col-9 main__search__product__block">
              {searchData.searchResultProduct.map((product, productIdex) => {
                return <SearchProduct product={product} />;
              })}
            </div>
            <div className="col-3 search__link__block">
              <Heading3 text="Related Links" marginBottom={30} />
              <p className="search__link">
                <Text3 text="Electronics" color="#727272" span={true} />
                <Text3
                  text="(142)"
                  color="#DC3A1A"
                  span={true}
                  marginLeft={10}
                />
              </p>
              <p className="search__link">
                <Text3 text="Corporate" color="#727272" span={true} />
                <Text3
                  text="(50)"
                  color="#DC3A1A"
                  span={true}
                  marginLeft={10}
                />
              </p>
              <p className="search__link">
                <Text3 text="Support" color="#727272" span={true} />
                <Text3
                  text="(1994)"
                  color="#DC3A1A"
                  span={true}
                  marginLeft={10}
                />
              </p>
            </div>
          </div>
          <PLPBannerTwo bannerImage={bannerImg1} />
          <div className="plp__newArrival__block">
            <CarouselTypeTwo
              productDetailPage={true}
              sectionTitle="Recently Viewed Products"
              carouselData={newArrivalData}
              productType="productOne"
              containerClassName="plp__youCanAlsoPurchase__block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search__Page;
