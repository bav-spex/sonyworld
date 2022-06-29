import React from "react";
import "./../SCSS/ProductComparison/_productComparison.scss";
import BreadCrumbs from "../Components/BreadCrumbs";
import PLPBannerAndCategorySection from "../Components/ProductListPageComponent/PLPBannerAndCategorySection";
import ProductComparisonList from "../Components/ProductComparison/ProductComparisonList";


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

const Product_Comparison = () => {
  return (
    <div className="container-fluid product__comparison__page__container">
      <div className="product__comparison__page__block">
        <PLPBannerAndCategorySection categoryData={categoryLists} />
        {/* <BreadCrumbs /> */}
        <ProductComparisonList />
        {/* <div>Product_Comparison</div> */}
      </div>
    </div>
  );
};

export default Product_Comparison;
