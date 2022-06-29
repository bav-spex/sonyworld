import React from "react";

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

const categoryLists = [
  {
    title: "TELEVISION",
    defaultIcon: white_tv,
    selectedIcon:red_tv,
    bannerImage: feature_product_04,
  },
  {
    title: "OLED",
    defaultIcon: white_tv,
    selectedIcon:red_tv,
    bannerImage: product_01,
  },
  {
    title: "FULL ARRAY LED",
    defaultIcon: white_tv,
    selectedIcon:red_tv,
    bannerImage: feature_product_04,
  },
  {
    title: "ALL LEDS",
    defaultIcon: white_tv,
    selectedIcon:red_tv,
    bannerImage: product_04,
  },
  {
    title: "GOOGLE TV",
    defaultIcon: white_tv,
    selectedIcon:red_tv,
    bannerImage: product_05,
  },
  {
    title: "ACCESSORIES",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES1",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES2",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES3",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES4",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
    bannerImage: feature_product_04,
  },
  {
    title: "ACCESSORIES5",
    defaultIcon: white_accessories,
    selectedIcon:red_accessories,
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

const Product_List_Page = () => {
  return (
    <div className="container-fluid product__list__page__container">
      <div className="product__list__page__block">
        <PLPBannerAndCategorySection categoryData={categoryLists} />
        <PLPFilterProductBlock />
        <PLPBannerTwo bannerImage={bannerImg1} />
        {/* <CarouselTypeTwo
        productDetailPage={false} 
        sectionTitle="People Who Bought Also Bought"
        carouselData={bestSellersData}
        productType="productOne"
        containerClassName="carouselTypeTwo__inner__block"
      /> */}
        {/* <div className="plp__page__similar__product">
        <PLPSimilarProduct
          carouselData={bestSellersData}
          containerClassName="productListingPage__similarproduct__block"
        />
      </div> */}
        {/* <SimilarProducts
        productDetailPage={false}
        sectionTitle="Budget TVs"
        carouselData={bestSellersData}
        containerClassName="productListingPage__similarproduct__block"
        productType="productSeven"
      /> */}
      </div>
    </div>
  );
};

export default Product_List_Page;
