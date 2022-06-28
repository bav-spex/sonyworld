import React, { useState, useEffect } from "react";

const ProductListCategorySection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setSelectedCategory(props.categoryData[0].title);
  }, [props.categoryData]);

  const onSelectCategory = (title) => {
    setSelectedCategory(title);
  };

  return (
    <div className="productList__category__section">
      {props.categoryData.map((item) => {
        return (
          <div
            className={`category__section__block ${
              selectedCategory === item.title ? "active__category" : ""
            }`}
            onClick={() => onSelectCategory(item.title)}
          >
            <div
              className={`category__section__image__block ${
                selectedCategory === item.title ? "active__image" : ""
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
  );
};

export default ProductListCategorySection;
