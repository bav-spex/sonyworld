import React from 'react'
import "./../SCSS/_featureProducts.scss"

import feature_product_01 from "./../Assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../Assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../Assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../Assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../Assets/FeatureProduct/feature_product_05.png";

function FeatureProducts() {
  return (
    <div className="container-fluid feature__category__container">
        <div className=" feature__category__block">
          <div className="row inner__feature__category__block">
            <div className="first__feature__category__block">
              <div className="first__feature__category">
                <p className="first__feature__category__title">Playstations</p>
                <p className="first__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>

                <img
                  src={feature_product_01}
                  alt=""
                  className="first__feature__category__image"
                />
              </div>
            </div>
            <div className=" second__feature__category__block">
              <div className="feature__category first__in__column">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_02}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Cameras</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
              <div className="feature__category">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_03}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Headphones</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
            </div>
            <div className=" second__feature__category__block">
              <div className="feature__category first__in__column">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_04}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Television</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
              <div className="feature__category">
                <div className="second__feature__category__image__block">
                  <img
                    src={feature_product_05}
                    alt=""
                    className="second__feature__category__image"
                  />
                </div>
                <p className="second__feature__category__title">Laptops</p>
                <p className="second__feature__category__subtitle">
                  Find out Why This Is the Go-To Lens for So many Photographers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeatureProducts