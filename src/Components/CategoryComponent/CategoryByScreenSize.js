import React from "react";
import "./../../SCSS/_categoryByScreenSize.scss";

const categoryScreenSize = [
  `Upto 32"`,
  `32-40"`,
  `40-50"`,
  `50-60"`,
  `60-70"`,
  `Above 70"`,
];
const Category_By_ScreenSize = () => {
  return (
    <div className="category__screensize__block">
      <p className="section__title">Shop By Screen Size</p>
      <div className="row inner__category__screensize__block">
        {categoryScreenSize.map((item) => {
          return (
            <div className=" col-2 main__screensize__block">
              <div className="screensize__block">
                <p className="screensize_text">{item}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category_By_ScreenSize;
