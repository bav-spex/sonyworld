import React, { useState } from "react";
import GridButton from "../../Components/Buttons/GridButton";
import ListButton from "../../Components/Buttons/ListButton";
import SortProducts from "../../Components/Products/SortProducts";
import ProductCard from "../../Components/Products/ProductCard";
import "./../../SCSS/Product/_productTopBarLayout.scss";

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

const productDetails = [
  {
    isNew: true,
    resolution: "src",
    isLiked: true,
  },
];

function ProductTopBarLayout() {
  const [gridBtnColor, setGridBtnColor] = useState(false);
  const [listBtnColor, setListBtnColor] = useState(false);

  const handleClikGridBtn = (isActive) => {
    setGridBtnColor(true);
    setListBtnColor(false);
  };

  const handleClikListBtn = (isActive) => {
    setListBtnColor(true);
    setGridBtnColor(false);
  };

  return (
    <div>
      <div className="_productTopBarLayout__container">
        <div>
          <SortProducts dropdownOptions={dropdownOptions} />
        </div>
        <div className="_productTopBarLayout__icons">
          <div onClick={handleClikGridBtn}>
            <GridButton isActive={gridBtnColor} />
          </div>
          <div onClick={handleClikListBtn}>
            <ListButton isActive={listBtnColor} />
          </div>
        </div>
      </div>
      <div className="_product_wrapper__container main">
        <div className="_product_wrapper__container">
          <div className="_product__filters">
            filters here filters here filters here filters here filters here
            filters here filters here filters here filters here filters here
          </div>
          <div className="_product_wrapper">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((vals) => (
              <div key={vals} className="_products">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTopBarLayout;