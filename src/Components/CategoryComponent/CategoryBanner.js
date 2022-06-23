import React from "react";
import "./../../SCSS/_categoryBanner.scss";

const Category_Banner = (props) => {
  return (
    <div className="category__banner__container">
      <div className="category__banner__block">
        {/* <div className="banner__title">High Quality Televisions</div>
        <div className="banner__description">High Quality Televisions</div> */}
        {/* <div className="image__block"> */}
        <div className="banner__image__block">
          <img src={props.bannerImage} alt="" className="banner__image"></img>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Category_Banner;
