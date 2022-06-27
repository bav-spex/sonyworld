import React from "react";
import "./../SCSS/AllProducts/_allProducts.scss";
import "./../SCSS/AllProducts/_productSections.scss";

import AllProductBanner from "../Components/ProductSections/AllProductBanner";
import AllProductCategorySection from "../Components/ProductSections/AllProductCategorySection";


import feature_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import White_tv from "./../assets/Icon/white_tv.svg";
import Accessories_white from "./../assets/Icon/accessories_white.svg";

const categoryLists = [
  {
    title: "TELEVISION",
    image: White_tv,
    active: true,
  },
  {
    title: "OLED",
    image: White_tv,
    active: true,
  },
  {
    title: "FULL ARRAY LED",
    image: White_tv,
  },
  {
    title: "ALL LEDS",
    image: White_tv,
  },
  {
    title: "GOOGLE TV",
    image: White_tv,
  },
  {
    title: "ACCESSORIES",
    image: Accessories_white,
  },
];

const AllProducts = () => {
  return (
    <div className="container-fluid allProducts">
      <AllProductBanner bannerImage={feature_product_04} title="Television" />
      <AllProductCategorySection categoryData={categoryLists} />
      {/* <AllProducts /> */}
    </div>
  );
};

export default AllProducts;
