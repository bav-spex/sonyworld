import React, { useState, useEffect } from "react";
import "./../SCSS/_dashboardPage.scss";
import ProductCardBackDrop from "./Product/ProductCardBackDrop";
import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import  Accessories  from "./../assets/Icon/accessories.svg";
import  SmartTv  from "./../assets/Icon/smart_tv.svg";

import ProductTinyCardList from "../Pages/Product/ProductTinyCardList";
import ProductTopBarLayout from "../Pages/Product/ProductTopBarLayout";

const productItem = {
  title: "Television",
  image: feature_product_04,
};

const productLists = [
  {
    title: "OLED",
    image: SmartTv,
    active: true,
  },
  {
    title: "FULL ARRAY LED",
    image: SmartTv,
  },
  {
    title: "ALL LEDS",
    image: SmartTv,
  },
  {
    title: "GOOGLE TV",
    image: SmartTv,
  },
  {
    title: "ACCESSORIES",
    image: Accessories,
  },
];

function Category_Page() {
  return (
    <>
      <ProductCardBackDrop
        title={productItem.title}
        image={productItem.image}
      />
      <ProductTinyCardList data={productLists} />
      <ProductTopBarLayout />
    </>
  );
}

export default Category_Page;