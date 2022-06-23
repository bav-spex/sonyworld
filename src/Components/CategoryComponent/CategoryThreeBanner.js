import React from "react";

const Category_Three_Banner = (props) => {
  console.log(props, "category tree banner");
  return (
    <div className="three__ad__banner__container">
      <div className=" three__ad__banner__block">
        {props.title && <p className="section__title">TV Accessories</p>}
        <div className="row inner__three__ad__banner__block">
          {props.bannerImage.map((image) => {
            return (
              <div className="col-12 col-sm-4 ad__banner__block">
                <img src={image} alt="" className="ad__banner__image"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category_Three_Banner;
