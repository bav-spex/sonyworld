import React, { useState } from "react";
import "./../../SCSS/ProductType/_productNine.scss";
import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import quick_view from "./../../assets/Icon/quick_view.svg";
import compare from "./../../assets/Icon/compare.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import Heading7 from "../Font/Heading7";
import Text4 from "../Font/Text4";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import Heading6 from "../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import AwesomeSlider from "react-awesome-slider";
import product_01 from "./../../assets/Product/product_01.jpg";
import product_02 from "./../../assets/Product/product_02.jpg";
import product_03 from "./../../assets/Product/product_03.jpg";
import product_04 from "./../../assets/Product/product_04.jpg";
import product_05 from "./../../assets/Product/product_05.jpg";
import product_06 from "./../../assets/Product/product_06.jpg";
import product_07 from "./../../assets/Product/product_07.jpg";
import product_08 from "./../../assets/Product/product_08.jpg";
import { Link } from "react-router-dom";

function ProductNine({
  product,
  handleChangeProductPopup,
  handleChangeComparePopup,
}) {
  // console.log(product);
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const [productWarrentyBlock, setProductWarrentyBlock] = useState({
    warrantyText: "1 Year Warranty on Product",
    size: [
      {
        id: 1,
        cm: 139,
        inch: 55,
      },
      {
        id: 2,
        cm: 164,
        inch: 65,
      },
      {
        id: 3,
        cm: 195,
        inch: 77,
      },
    ],
  });
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleRating = (score) => {
    setRating(score);
  };

  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
 
  return (
    <div key={product.id} className="productNine__block">
      <div className="productNine__header">
        <div className="productNine__new__sticker__block">
          <p className="productNine__new__sticker__text">New</p>
        </div>
        {/* <div className="quality__favourite__block">
          <img src={productTwo_quality_icon} alt="" className="quality__icon" />
          <img
            onMouseEnter={() => setIsFavouriteHover(true)}
            onClick={handleFavourite}
            onMouseLeave={() => setIsFavouriteHover(false)}
            className={
              !isFavourite ? "favourite__icon" : "favourite__icon__disable"
            }
            src={isFavouriteHover ? fulfill_favourite : empty_favourite}
            alt=""
          />
          <img
            onClick={handleFavourite}
            className={
              isFavourite ? "favourite__icon" : "favourite__icon__disable"
            }
            src={fulfill_favourite}
            alt=""
          />
        </div> */}
      </div>
      <div className="productNine__content">
        <div
          className="productNine__image__slider"
          // to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}
        >
          <AwesomeSlider transitionDelay={0.2} mobileTouch={true} infinite={true}>
            {product?.media?.image?.screenshots?.map((img, index) => (
              <div key={index} className="_product__container_image">
                <img src={img.image} alt={img.image + index} />
              </div>
            ))}
          </AwesomeSlider>
        </div>
        <Link className="productNine__name__link"
          to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
        <p className="productNine__name">  {product.name}</p>
        </Link>
        {/* <Heading6 text={product.name} marginBottom={10} /> */}

        <OldPrice
          oldPrice={product?.price_rounded}
          size="text2"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
          currency="SAR"
        />
        <Price
          price={product?.price_rounded}
          marginLeft={5}
          marginBottom={10}
          size="heading4"
          span={true}
          currency="SAR"
        />

        <RatingBlock rating={6} totalRatings={2222} />
        {/* <div className="size__button__block">
          {productWarrentyBlock.size.map((size, sizeIndex) => {
            return (
              <button
                key={size.id}
                onClick={() => sizeButtonClick(sizeIndex, size.cm, size.inch)}
                className={
                  sizeButtonIndex === sizeIndex
                    ? "size__button__active"
                    : "size__button"
                }
              >{`${size.cm} cm (${size.inch})`}</button>
            );
          })}
        </div> */}
        <div className="productNine__feature__block">
          {product.productFeatures && (
            <>
              {product.productFeatures.map((feature, featureIndex) => {
                return (
                  <div key={featureIndex} className="feature__text__block">
                    <div className="feature__bullet"></div>
                    <Text4 text={feature.text} />
                  </div>
                );
              })}
            </>
          )}
        </div>
        <Text4 text="Free delivery by" span={true} />
        <Heading7 text="Tomorrow," span={true} />
        <Heading7 text="May, 7:00 am - 9:00 pm" marginBottom={10} />

        <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`} className="addToCart__button">
          <img src={shopping_cart} alt="" className="addToCart__icon" />
          Buy Now
        </Link>
        <div className="productNine__quickView__compare__block">
          <button
            onClick={() => handleChangeProductPopup(true, product)}
            className="productNine__button__block"
          >
            <img
              className="productNine__button__icon"
              src={quick_view}
              alt=""
            />
            <Heading7 text="Quick View" />
          </button>
          <button
            onClick={() => handleChangeComparePopup(true, product)}
            className="productNine__button__block"
          >
            <img className="productNine__button__icon" src={compare} alt="" />
            <Heading7 text="Compare" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductNine;
