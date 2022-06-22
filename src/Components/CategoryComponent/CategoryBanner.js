import React from "react";
import "./../../SCSS/_categoryBanner.scss";
import bannerImg1 from "../../assets/Categories/category_banner1.png";

const Category_Banner = () => {
  return (
    <div className="category__banner__container">
      <div className="category__banner__block">
        {/* <div className="banner__title">High Quality Televisions</div>
        <div className="banner__description">High Quality Televisions</div> */}
        {/* <div className="image__block"> */}
          <div className="banner__image">
            <img src={bannerImg1} alt=""></img>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Category_Banner;
