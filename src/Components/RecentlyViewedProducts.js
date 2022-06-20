import React from "react";
import "./../SCSS/_recentlyViewedProducts.scss";
import rv_product_01 from "./../assets/FeatureProduct/feature_product_01.png";
import rv_product_02 from "./../assets/FeatureProduct/feature_product_02.png";
import rv_product_03 from "./../assets/FeatureProduct/feature_product_03.png";
import rv_product_04 from "./../assets/FeatureProduct/feature_product_04.png";
import rv_product_05 from "./../assets/FeatureProduct/feature_product_05.png";
import rv_product_06 from "./../assets/FeatureProduct/feature_product_01.png";

import banner_02 from "./../assets/Banner/image_02.jpg";

import Heading6 from "./Font/Heading6";
import CarouselTypeTwo from "./CarouselTypeTwo";

function RecentlyViewedProducts({ categoryData }) {
  return (
    <div className="container-fluid recentlyViewed__container">
      <div className="recentlyViewed__block">
        <p className="section__title">Recently Viewed Products</p>
        <div className="main__rv__block">
          <div className="inner__rv__block">
            <div className="rv__left__block">
              <div className="row rv__desktop__screen">
                {categoryData.map((cat, catIndex) => {
                  return (
                    <div key={catIndex} className="col-3 rv__product__block">
                      <div className="rv__product__image__block">
                        <img
                          src={cat.image}
                          alt="category-image"
                          className="rv__product__image"
                        />
                      </div>
                      <Heading6 text={cat.name} textAlign="center"></Heading6>
                    </div>
                  );
                })}
              </div>
              <div className="rv__mobile__screen">
                {/* <CarouselTypeTwo
                  carouselData={carouselData}
                  containerClassName="rv__inner__mobile__screen"
                  productType="productone"
                /> */}
                <CarouselTypeTwo
                  carouselData={categoryData}
                  productType="productFive"
                  containerClassName="rv__inner__mobile__screen"
                />
              </div>
            </div>
            <div className="rv__right__block">
              <img
                src={banner_02}
                alt="shop now Image"
                className="rv__right__part__bg__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewedProducts;
