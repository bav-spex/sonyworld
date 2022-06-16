import React from "react";
import "./../SCSS/_featureProducts.scss";

import feature_product_01 from "./../Assets/FeatureProduct/feature_product_01.png";
import feature_product_02 from "./../Assets/FeatureProduct/feature_product_02.png";
import feature_product_03 from "./../Assets/FeatureProduct/feature_product_03.png";
import feature_product_04 from "./../Assets/FeatureProduct/feature_product_04.png";
import feature_product_05 from "./../Assets/FeatureProduct/feature_product_05.png";
import Heading5 from "./Font/Heading5";
import Heading7 from "./Font/Heading7";
import RatingBlock from "./MostSharedComponent/RatingBlock";
import PriceBlock from "./MostSharedComponent/PriceBlock";
import OldPrice from "./Font/OldPrice";
import Price from "./Font/Price";

function FeatureProducts() {
  return (
    <div className="container-fluid feature__category__container">
      <div className=" feature__category__block">
        <div className="row inner__feature__category__block">
          <div className="first__feature__category__block">
            <div className="first__feature__category">
              <img
                src={feature_product_01}
                alt=""
                className="first__feature__category__image"
              />
              <Heading7 marginBottom={10} text='Sony 55" Class XR55X90J Bravia XR Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR X90J S eries 2021 Model' />
              <RatingBlock rating={4.5} totalRatings={2143} />
              <OldPrice
                oldPrice={1999}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
              />
              <Price
                price={1699}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
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
              <Heading7 marginBottom={10} text='Sony - 65" Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV' />
              <div className="featureProduct__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
              </div>
              <OldPrice
                oldPrice={1999}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
              />
              <Price
                price={1699}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
              />
            </div>
            <div className="feature__category">
              <div className="second__feature__category__image__block">
                <img
                  src={feature_product_03}
                  alt=""
                  className="second__feature__category__image"
                />
              </div>
              <Heading7 marginBottom={10} text='Sony - 65" Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV' />
              <div className="featureProduct__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
              </div>
              <OldPrice
                oldPrice={1999}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
              />
              <Price
                price={1699}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
              />
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
              <Heading7 marginBottom={10} text='Sony - 65" Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV' />
               <div className="featureProduct__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
              </div>
              <OldPrice
                oldPrice={1999}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
              />
              <Price
                price={1699}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
              />
            </div>
            <div className="feature__category">
              <div className="second__feature__category__image__block">
                <img
                  src={feature_product_05}
                  alt=""
                  className="second__feature__category__image"
                />
              </div>
              <Heading7 marginBottom={0} text='Sony - 65" Class BRAVIA XR A80J Series OLED 4K UHD Smart Google TV' />
               <div className="featureProduct__rating__block">
              <RatingBlock rating={4.5} totalRatings={2143} />
              </div>
              <OldPrice
                oldPrice={1999}
                size="text3"
                color="#c8c8c8"
                marginBottom={10}
                lineThrough={true}
                span={true}
              />
              <Price
                price={1699}
                marginLeft={5}
                marginBottom={10}
                size="heading6"
                span={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
