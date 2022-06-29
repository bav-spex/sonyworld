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

// productSpecification: [
//   {
//     title: "MODEL YEAR",
//     text: "2022",
//   },
//   {
//     title: "RESOLUTION",
//     text: "8K (4320p)",
//   },
//   {
//     title: "SCREEN SIZE CLASS",
//     text: "65 inches",
//   },
//   {
//     title: "High Dynamic Range (HDR)",
//     text: "8K (4320p)",
//   },
//   {
//     title: "HIGH DYNAMIC RANGE FORMAT",
//     text: "2022",
//   },
//   {
//     title: "LED PANEL TYPE",
//     text: "Neo QLED",
//   },
//   {
//     title: "NUMBER OF HDMI INPUTS (TOTAL)",
//     text: "4",
//   },
// ],

// const keySpacs = []
// const generalSpacs = []
// const generalSpacs = []

// const productSpecification: [
//   {
//     type: "Key Specs",
//     specs: [
//       {
//         title: "MODEL YEAR",
//         text: "2022",
//       },
//       {
//         title: "RESOLUTION",
//         text: "8K (4320p)",
//       },
//       {
//         title: "SCREEN SIZE CLASS",
//         text: "65 inches",
//       },
//       {
//         title: "High Dynamic Range (HDR)",
//         text: "8K (4320p)",
//       },
//       {
//         title: "HIGH DYNAMIC RANGE FORMAT",
//         text: "2022",
//       },
//       {
//         title: "LED PANEL TYPE",
//         text: "Neo QLED",
//       },
//       {
//         title: "NUMBER OF HDMI INPUTS (TOTAL)",
//         text: "4",
//       },
//     ],
//   },
//   {
//     type: "General",
//     specs: [
//       {
//         title: "PRODUCT NAME",
//         text: "QLED 8K Smart Tizen TV",
//       },
//       {
//         title: "MODEL NUMBER",
//         text: "QN65QN800AFXZA",
//       },
//       {
//         title: "COLOR",
//         text: "Stainless steel",
//       },
//       {
//         title: "COLOR CATEGORY",
//         text: "Silver",
//       },
//     ],
//   },
//   {
//     type: "Box Dimension",
//     specs: [
//       {
//         title: "HEIGHT",
//         text: "37.3 inches",
//       },
//       {
//         title: "WIDTH",
//         text: "64 inches",
//       },
//       {
//         title: "DEPTH",
//         text: "7.7 inches",
//       },
//     ],
//   },
// ],

const ProductComparisonBlock = ({ productsData }) => {
  return (
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
                  <img src={shopping_cart} alt="" className="addToCart__icon" />
                  Add To Cart
                </div>
                {/* {index === 0 ? <div>All Specification</div> : <div>""</div>}
                {product.productSpecification.map((data, mainIndex) => {
                  console.log(data.specs);
                  return (
                    <div>
                      <div>
                        {index === 0 ? <div>{data.type}</div> : <div></div>}

                        <div className="row">
                          {data.specs.map((spac, index) => (
                            <>
                              <div>{spac.title}</div>
                              <div>
                                <div>{spac.text}</div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                
                {/* 
                {product.productFeatures && (
                  <ul>
                    {product.productFeatures.map((feature) => {
                      return (
                        <li className="productList__fetureText">
                          {feature.text}
                        </li>
                      );
                    })}
                  </ul>
                )}
                <div className="free__delivery">
                  <p className="free__delivery__text">
                    Free delivery by{" "}
                    <span className="delivery__day">Tomorrow,</span>
                  </p>
                  <span className="delivery__day">May, 7:00 am - 9:00 pm</span>
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
      <div className="col-sm-12">
        <Heading3 text="All Specification"   marginBottom={20}/>
        <div className="row">
            <div className="col-sm-12">
              <Heading5 text="Key Specs" />
              <div className="row mt-2 mb-3">
                <div className="col-sm-12">
                  <Heading7 text="MODEL YEAR"  textTransform="uppercase"/>
                  <div className="row ">
                      <div className="col-sm-3">

                      </div>
                      <div className="col-sm-3">

                      </div>
                      <div className="col-sm-3">

                      </div>
                      <div className="col-sm-3">

                      </div>
                  </div>
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
  );
};

export default ProductComparisonBlock;
