import React from "react";

const Product_Section_One = (props) => {
  return (
    <div className="row allproducts__section__one">
      <div className="col-6 section__one__title__block">
        <p className="section__title">{props.title}</p>
      </div>
      <div className="col-6 section__one__image__block">
        <img
          className="section__one__image"
          src={props.bannerImage}
          alt="telivision"
        />
      </div>
    </div>
  );
};

export default Product_Section_One