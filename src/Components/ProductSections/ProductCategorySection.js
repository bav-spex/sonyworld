import React from "react";

const Product_Category_Section = (props) => {
  return (
    <div className="allproducts__category__section">
      {props.categoryData.map((item) => {
        return (
          <div className="category__section__block">
            <div className="category__section__image__block">
              <img
                className="category__section__image"
                src={item.image}
                alt="telivision"
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

export default Product_Category_Section;
