import React from "react";
import "./../../SCSS/_categoryByScreenSize.scss";

const categoryScreenSize = [
  "Upto 32",
  "Upto 32",
  "Upto 32",
  "Upto 32",
  "Upto 32",
  "Upto 32",
];
const Category_By_ScreenSize = () => {
  return (
    <div className="category__screensize__container">
      <p className="section__title">Shop By Screen Size</p>
      <div className="category__screensize__block">
        {categoryScreenSize.map((item) => {
          return (
            <div className="screensize__block">
              <p className="screensize_text">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category_By_ScreenSize;
