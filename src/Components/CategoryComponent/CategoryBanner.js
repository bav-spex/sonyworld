import React from "react";
import "./../../SCSS/_categoryBanner.scss";
import bannerImg1 from "../../assets/Categories/category_banner12.jpg";


const Category_Banner = () => {
  return (
    <div className="category__banner__container">
      <div className="category__banner__block">
        {/* <div className="banner__title">High Quality Televisions</div>
        <div className="banner__description">High Quality Televisions</div> */}
        {/* <div className="image__block"> */}
          <div className="banner__image__block">
            <img src={bannerImg1} alt="" className="banner__image"></img>
          </div>
         
        {/* </div> */}
      </div>
    </div>
  );
};

export default Category_Banner;
