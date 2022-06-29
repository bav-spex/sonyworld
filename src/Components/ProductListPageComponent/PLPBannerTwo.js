import React from "react";
import "./../../SCSS/ProductListPage/_plpBannerSectionTwo.scss";

const Product_Listing_Page_BannerTwo = (props) => {
  return (
    <div className="productListing__banner__two__container">
      <div className="productListing__banner__two__block">
        {/* <div className="banner__title">High Quality Televisions</div>
        <div className="banner__description">High Quality Televisions</div> */}
        {/* <div className="image__block"> */}
        <div className="productListing__banner__two__image__block">
          <img src={props.bannerImage} alt="" className="banner__image"></img>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Product_Listing_Page_BannerTwo;
