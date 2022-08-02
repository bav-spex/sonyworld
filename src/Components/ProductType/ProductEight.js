import React, { useEffect, useState } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import "./../../SCSS/ProductType/_productEight.scss";
import Heading7 from "./../Font/Heading7";
import Text4 from "./../Font/Text4";
import OldPrice from "./../Font/OldPrice";
import Price from "./../Font/Price";
import Heading6 from "./../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import { Link } from "react-router-dom";

function ProductEight({ item }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(true);
  const [rating, setRating] = useState(0);
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
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
  useEffect(() => {
    if (item) {
      setProduct(item.product);
      setLoading(false);
    }
  }, [item]);
  // console.log(item);
  // console.log(product);
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
  if (loading) {
    return <h1>wishlist product Loading...</h1>;
  }
  return (
    <div key={product.id} className="productEight__block">
      <div className="productEight__header__block">
        <div className="productEight__quality__favourite__block">
          <img
            src={productTwo_quality_icon}
            alt=""
            className="productEight__quality__icon"
          />
        </div>
        <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
          <div className="productEight__image__block">
            <img
              src={product.baseImage}
              alt=""
              className="productEight__image"
            />
          </div>
        </Link>
        <div className="productEight__quality__favourite__block">
          <div></div>
          <img
            onMouseEnter={() => setIsFavouriteHover(true)}
            onClick={handleFavourite}
            onMouseLeave={() => setIsFavouriteHover(false)}
            className={
              !isFavourite
                ? "productEight__favourite__icon"
                : "productEight__favourite__icon__disable"
            }
            src={isFavouriteHover ? fulfill_favourite : empty_favourite}
            alt=""
          />
          <img
            onClick={handleFavourite}
            className={
              isFavourite
                ? "productEight__favourite__icon"
                : "productEight__favourite__icon__disable"
            }
            src={fulfill_favourite}
            alt=""
          />
        </div>
      </div>
      <Link
          to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}
          className="productEight__name__link"
        >
         <p className="productEight__name"> {product.name}</p>
        </Link>
      <Text4 text="Z8H SERIES" color="#808080" marginBottom={10} />
      <div className="rating__block">
        <RatingBlock rating={6} totalRatings={2222} />
      </div>
      <p className="productEight__series">Model and Price</p>
      <div className="productEight__size__button__block">
        {productWarrentyBlock.size.map((size, sizeIndex) => {
          return (
            <button
              key={size.id}
              onClick={() => sizeButtonClick(sizeIndex, size.cm, size.inch)}
              className={
                sizeButtonIndex === sizeIndex
                  ? "productEight__size__button__active"
                  : "productEight__size__button"
              }
            >{`${size.cm} cm (${size.inch})`}</button>
          );
        })}
      </div>
      <div className="prize__block">
        <OldPrice
          oldPrice={product.price_rounded + 200}
          size="text1"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
          currency={product?.currency}
        />
        <Price
          price={product.price_rounded}
          marginLeft={5}
          marginBottom={10}
          size="heading4"
          span={true}
          currency={product?.currency}
        />
      </div>
    </div>
  );
}

export default ProductEight;
