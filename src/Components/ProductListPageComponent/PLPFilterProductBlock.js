import React, { useState, useEffect } from "react";
import PLPFilter from "./PLPFilter";
import "./../../SCSS/ProductListPage/_plpFilterProductBlock.scss";

import list_grey from "./../../assets/Icon/list_grey.svg";
import grid_grey from "./../../assets/Icon/grid_grey.svg";
import list_orange from "./../../assets/Icon/list_orange.svg";
import grid_orange from "./../../assets/Icon/grid_orange.svg";

import sony_logo from "./../../assets/Icon/sony_logo.svg";

import product_01 from "./../../assets/Product/product_01.png";
import product_02 from "./../../assets/Product/product_02.png";
import product_03 from "./../../assets/Product/product_03.png";
import product_04 from "./../../assets/Product/product_04.png";
import product_05 from "./../../assets/Product/product_05.png";
import Heading3 from "../Font/Heading3";
import Text3 from "../Font/Text3";
import ProductNine from "../ProductType/ProductNine";
import ProductTen from "../ProductType/ProductTen";
import PLPProductPopup from "../Popup/PLPProductPopup";

const dropdownOptions = [
  {
    label: "Low to High",
    value: "asc",
  },
  {
    label: "High to Low",
    value: "",
  },
];


const PLPFilterProductBlock = ({
  onFilter,
  filteredProductsData,
  handleChangeProductPopup,
  handleChangeComparePopup,
  filterOptionData
  
}) => {
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const [productListView, setProductListView] = useState("grid");
  // console.log(filteredProductsData);
  // console.log(filterOptionData);

  const onSelectSortby = (e) => {
    onFilter("order",e.target.value)
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const onClickGridList = (type) => {
    if (type === "grid") {
      setProductListView("grid");
    }
    if (type === "list") {
      setProductListView("list");
    }
  };

  return (
    <>
      <div className="plp__filter__product__container">
        <div className="plp__filter__product__title__block">
          <Heading3 text={`${filteredProductsData?.total_count !== 0 && filteredProductsData?.items.length ?filteredProductsData?.items.length : 0 } Products`} />
          <div className="plp__filter__product__sortby__grid__button">
            <Text3 text="Sort By:" />
            {/* <label className="label">Sort by: &nbsp;</label> */}

            <select
              onChange={(e) => onSelectSortby(e)}
              className="plp__sortby__select__field"
              // className="_customselect"
            >
              {dropdownOptions.map(({ label, value }) => (
                <option
                  className="plp__sortby__options"
                  key={value + label}
                  value={value}
                >
                  {label}
                </option>
              ))}
            </select>

            <div className="plp__grid__button">
              <div
                className={
                  productListView === "grid"
                    ? "plp__grid__button__active"
                    : "plp__grid__button"
                }
                onClick={() => onClickGridList("grid")}
              >
                <img
                  className="grid__icon"
                  src={productListView === "grid" ? grid_orange : grid_grey}
                  alt=""
                />
              </div>
              <div
                className={
                  productListView === "list"
                    ? "plp__list__button__active"
                    : "plp__list__button"
                }
                onClick={() => onClickGridList("list")}
              >
                <img
                  className="list__icon"
                  src={productListView === "list" ? list_orange : list_grey}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row plp__filter__product__block">
          <div className="col-sm-3 plp__filter__block">
            <PLPFilter onFilter={onFilter} filterOptionData={filterOptionData} filteredProductsData={filteredProductsData}  />
          </div>
          <div className="col-sm-9 plp__product__block">
            <div className="row plp__inner__product__block">
              {productListView === "grid" ? (
                <>
                  {filteredProductsData?.total_count !== 0 && filteredProductsData?.items.length !== 0 ? filteredProductsData?.items.map((product, productIndex) => {
                    return (
                      <div
                        key={productIndex}
                        className="col-xxl-4 col-lg-6 mb-3"
                      >
                        <ProductNine
                          product={product}
                          handleChangeProductPopup={handleChangeProductPopup}
                          handleChangeComparePopup={handleChangeComparePopup}
                        />
                      </div>
                    );
                  }): 
                  <div>
                   <h1>
                     No Products Available
                     </h1>
                  </div>
                  }
                  {/* <PLPProduct productsData={peopleUltimatelyBoughtData} /> */}
                </>
              ) : productListView === "list" ? (
                <>
                  {filteredProductsData?.total_count !== 0 && filteredProductsData?.items.length !== 0 ? filteredProductsData?.items.map((product, productIndex) => {
                    return (
                      <div key={productIndex} className="col-sm-12 mb-3">
                        <ProductTen
                          product={product}
                          handleChangeProductPopup={handleChangeProductPopup}
                          handleChangeComparePopup={handleChangeComparePopup}
                        />
                      </div>
                    );
                  }):
                  <div>
                   <h1>
                     No Products Available
                     </h1>
                  </div>}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PLPFilterProductBlock;
