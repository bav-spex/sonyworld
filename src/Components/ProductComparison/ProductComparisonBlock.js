import React from "react";
import "./../../SCSS/ProductComparison/_productComparisonBlock.scss";

import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import OldPrice from "../Font/OldPrice";
import Text4 from "./../Font/Text4";
import Price from "../Font/Price";
import Heading6 from "../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import Heading5 from "../Font/Heading5";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";



const ProductComparisonBlock = ({ productsData }) => {
  return (
    <>
      <div className="row">
        {productsData.map((product, index) => {
          return (
            <div
              key={product.id}
              className="col-sm-3 product__comparison__main__container"
            >
              <div key={product.id} className="product__comparison__block">
                <div className="product__card__top">
                  <div className="product__comparison__close__icon__block">
                    <img
                      src={cancel_grey}
                      alt=""
                      className="product__comparison__close__icon"
                    />
                  </div>
                </div>
                <div className="product__card">
                  <div className="product__comparison__header__block">
                    <div className="product__comparison__image__block">
                      <img
                        src={product.image}
                        alt=""
                        className="product__comparison__image"
                      />
                    </div>
                  </div>
                  <p className="product__comparison__name">
                    <Heading6 text={product.productName} marginBottom={10} />
                  </p>
                  <Text4 text="Z8H SERIES" color="#808080" marginBottom={10} />
                  <div className="rating__block">
                    <RatingBlock
                      rating={product.rating}
                      totalRatings={product.totalRatings}
                    />
                  </div>
                  <p className="productSeven__series">Model and Price</p>
                  <div className="prize__block">
                    <OldPrice
                      oldPrice={product.oldPrice}
                      size="text3"
                      color="#c8c8c8"
                      marginBottom={10}
                      lineThrough={true}
                      span={true}
                    />
                    <Price
                      price={product.price}
                      marginLeft={5}
                      marginBottom={10}
                      size="heading6"
                      span={true}
                    />
                  </div>
                  <div className="addToCart__button">
                    <img
                      src={shopping_cart}
                      alt=""
                      className="addToCart__icon"
                    />
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-sm-12">
          <Heading3 text="All Specification" marginBottom={20} />
          <div className="row">
            <div className="col-sm-12">
              <Heading5 text="Key Specs" />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12">
                  <Heading7 text="MODEL YEAR" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="RESOLUTION" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">8K (4320p)</div>
                    <div className="col-sm-3">8K (4320p)</div>
                    <div className="col-sm-3">8K (4320p)</div>
                    <div className="col-sm-3">8K (4320p)</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7
                    text="SCREEN SIZE CLASS"
                    textTransform="uppercase"
                  />
                  <div className="row ">
                    <div className="col-sm-3">65 inches</div>
                    <div className="col-sm-3">65 inches</div>
                    <div className="col-sm-3">65 inches</div>
                    <div className="col-sm-3">65 inches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Heading5 text="GENERAL" />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12">
                  <Heading7 text="PRODUCT NAME" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="COLOR" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="COLOR CATEGORY" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                    <div className="col-sm-3">2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Heading5 text="BOX-DIMENSION" />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12">
                  <Heading7 text="HEIGHT" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">37.3 inches</div>
                    <div className="col-sm-3">37.3 inches</div>
                    <div className="col-sm-3">37.3 inches</div>
                    <div className="col-sm-3">37.3 inches</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="WIDTH" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">64 inches</div>
                    <div className="col-sm-3">64 inches</div>
                    <div className="col-sm-3">64 inches</div>
                    <div className="col-sm-3">64 inches</div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="DEPTH" textTransform="uppercase" />
                  <div className="row ">
                    <div className="col-sm-3">7.7 inches</div>
                    <div className="col-sm-3">7.7 inches</div>
                    <div className="col-sm-3">7.7 inches</div>
                    <div className="col-sm-3">7.7 inches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <Heading3 text="Availability" marginBottom={20} />
          <div className="row">
            <div className="col-sm-3">
              <Heading7 text="DELIVERY IN 8 DAYS" textTransform="uppercase" />
              <div className="row ">
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Pickup: Available today at Riyadh See all pickup locations
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Free Delivery: As soon as Tue, May 3 Estimates for 99504
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>Installation: As soon as Wed, May 4</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <Heading7 text="DELIVERY IN 8 DAYS" textTransform="uppercase" />
              <div className="row ">
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Pickup: Available today at Riyadh See all pickup locations
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Free Delivery: As soon as Tue, May 3 Estimates for 99504
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>Installation: As soon as Wed, May 4</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <Heading7 text="DELIVERY IN 8 DAYS" textTransform="uppercase" />
              <div className="row ">
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Pickup: Available today at Riyadh See all pickup locations
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Free Delivery: As soon as Tue, May 3 Estimates for 99504
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>Installation: As soon as Wed, May 4</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <Heading7 text="DELIVERY IN 8 DAYS" textTransform="uppercase" />
              <div className="row ">
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Pickup: Available today at Riyadh See all pickup locations
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Free Delivery: As soon as Tue, May 3 Estimates for 99504
                  </p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>Installation: As soon as Wed, May 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <Heading3 text="SPECIAL OFFERS" marginBottom={20} />
          <div className="row">
            <div className="col-sm-3">
              <div className="row ">
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>Save $50–$300 on a sound bar with TV</p>
                </div>
                <div className="col-sm-12">
                  <img className="" alt="" />
                  <p>
                    Bank Offer 5% Unlimited Cashback on Axis Bank Credit Card
                    T&C
                  </p>
                </div>
                <div className="col-sm-12">
                  <Heading7 text="CARD OFFER" />
                  <p>24 Month Financing </p>
                  <p>12 Month Financing</p>
                  <p>Get rewards </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {productsData.map((item) => {
        return item.productSpecification.map((data, mainIndex) => {
          console.log(data.specs);
          return (
            <div className="row">
              <div className="col-sm-4">
                <div className="row">
                  {data.specs.map((spac, index) => (
                    <>
                      <div className="col-sm-12">{spac.title} {spac.text}</div>
                    
                    </>
                  ))}
                </div>
              </div>
            </div>
          );
        });
      })} */}
      </div>
    </>
  );
};

export default ProductComparisonBlock;
