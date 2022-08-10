import React from "react";
import "./../../SCSS/ProductListPage/_plpBannerSectionOne.scss"
const PLPBannerSectionOne = (props) => {
  // console.log(props.bannerImage);
  return (
    <div>
      <div className="row banner__section__one">
        <div className="col-6 banner__section__one__title__block">
          <p className="banner__section__one__title">{props.title}</p>
        </div>
        <div className="col-6 banner__section__one__image__block">
          <img
            className="banner__section__one__image"
            src={`https://alpha-m2.mestores.com/pub/media/${props.bannerImage}`}
            alt={props.title}
          />
        </div>
      </div>
    </div>
  );
};

export default PLPBannerSectionOne
