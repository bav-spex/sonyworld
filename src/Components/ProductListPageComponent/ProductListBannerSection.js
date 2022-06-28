import React from "react";

const ProductListBannerSection = (props) => {
  return (
    <div>
      <div className="row productList__banner__section__one">
        <div className="col-6 productList__banner__section__one__title__block">
          <p className="productList__banner__section__one__title">{props.title}</p>
        </div>
        <div className="col-6 productList__banner__section__one__image__block">
          <img
            className="productList__banner__section__one__image"
            src={props.bannerImage}
            alt="television"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListBannerSection
