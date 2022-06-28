import React, { useState, useEffect } from "react";
import ProductListBannerSection from "./ProductListBannerSection";

const ProductListCategorySection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(props.categoryData[0]);

  useEffect(() => {
    // setSelectedCategory(props.categoryData[0]);
  }, [props.categoryData]);

  const onSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <>
      <ProductListBannerSection
        bannerImage={selectedCategory.bannerImage}
        title={selectedCategory.title}
      />
      <div className="productList__category__section">
        {props.categoryData.map((item) => {
          return (
            <div
              className={`category__section__block ${
                selectedCategory.title === item.title ? "active__category" : ""
              }`}
              onClick={() => onSelectCategory(item)}
            >
              <div
                className={`category__section__image__block ${
                  selectedCategory.title === item.title ? "active__image" : ""
                }`}
              >
                <img
                  className="category__section__image"
                  src={item.image}
                  alt="television"
                />
              </div>
              <div className="category__section__title__block">
                <p className="category__section__title">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListCategorySection;
