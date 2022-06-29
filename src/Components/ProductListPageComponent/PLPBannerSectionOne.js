import React from "react";
import "./../../SCSS/ProductListPage/_plpBannerSectionOne.scss"
const PLPBannerSectionOne = (props) => {
  return (
    <div>
      <div className="row banner__section__one">
        <div className="col-6 banner__section__one__title__block">
          <p className="banner__section__one__title">{props.title}</p>
        </div>
        <div className="col-6 banner__section__one__image__block">
          <img
            className="banner__section__one__image"
            src={props.bannerImage}
            alt="television"
          />
        </div>
      </div>
    </div>
  );
};

export default PLPBannerSectionOne
