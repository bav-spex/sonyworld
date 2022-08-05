import React, { useState,useEffect } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import productTwo_quality_icon from "./../../assets/Product/productTwo_quality_icon.png";
import "./../../SCSS/ProductType/_productSeven.scss";
import Text4 from "./../Font/Text4";
import OldPrice from "./../Font/OldPrice";
import Price from "./../Font/Price";
import Heading6 from "./../Font/Heading6";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import { checkForWishlist } from "../../services/wishlist.services";
import { loadAddToWishlist, loadDeleteFromWishlist, loadWishlistData } from "../../redux/appAction";
import { useDispatch } from "react-redux";

function ProductSeven({ productDetailPage, product }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [sizeButtonIndex, setSizeButtonIndex] = useState(0);
 
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const isFavouriteData = await checkForWishlist(
      product.sku.replace(/[/]/g, "%2F")
    );
    setIsFavourite(isFavouriteData);
  }, []);
  const handleFavourite = () => {
    if (isFavourite) {
      setIsFavourite(false);
      setCount(count + 1);
    } else {
      setIsFavourite(true);
      setCount(count + 1);
    }
  };
  useEffect(() => {
    const data = {
      items: [product.sku],
    };
    if (isFavourite) {
      if (count > 0) {
        const addToWishlistData = dispatch(loadAddToWishlist(data)).then(
          (res) => {
            console.log(res);
            dispatch(loadWishlistData());
          }
        );
      }
    } else {
      if (count > 0) {
        if (!isFavourite) {
          removeFromWL(product.sku);
        }
      }
    }
  }, [isFavourite]);

  const removeFromWL = (sku) => {
    const data = {
      items: [sku],
    };
    const deleteFromWishlistData = dispatch(loadDeleteFromWishlist(data)).then(
      (res) => {
        console.log(res);
        dispatch(loadWishlistData());
      }
    );
  };

  const handleRating = (score) => {
    setRating(score);
  };

  const sizeButtonClick = (sizeIndex, cm, inch) => {
    console.log(sizeIndex, cm, inch);
    setSizeButtonIndex(sizeIndex);
  };
  return (
    <div key={product.id} className="productSeven__block">
      <div className="productSeven__header__block">
        <div className="productSeven__quality__favourite__block">
          <img
            src={productTwo_quality_icon}
            alt=""
            className="productSeven__quality__icon"
          />
          <img
            onMouseEnter={() => setIsFavouriteHover(true)}
            onClick={handleFavourite}
            onMouseLeave={() => setIsFavouriteHover(false)}
            className={
              !isFavourite
                ? "productSeven__favourite__icon"
                : "productSeven__favourite__icon__disable"
            }
            src={isFavouriteHover ? fulfill_favourite : empty_favourite}
            alt=""
          />
          <img
            onClick={handleFavourite}
            className={
              isFavourite
                ? "productSeven__favourite__icon"
                : "productSeven__favourite__icon__disable"
            }
            src={fulfill_favourite}
            alt=""
          />
        </div>
        <div className="productSeven__image__block">
          <img src={product.image} alt="" className="productSeven__image" />
        </div>
        <div className="productSeven__compare__block">
          <input
            type="checkbox"
            className="productSeven__compare__input__check"
            name="compare"
            // onChange={handleChange}
          />
          <p className="productSeven__compare__text">Select to Compare</p>
        </div>
      </div>
      <p className="productSeven__name">
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
      <div className="productSeven__size__button__block">
        {product.size.map((size, sizeIndex) => {
          return (
            <button
              key={size.id}
              onClick={() => sizeButtonClick(sizeIndex, size.cm, size.inch)}
              className={
                sizeButtonIndex === sizeIndex
                  ? "productSeven__size__button__active"
                  : "productSeven__size__button"
              }
            >{`${size.cm} cm (${size.inch})`}</button>
          );
        })}
      </div>
      <div className="prize__block">
        <OldPrice
          oldPrice={product.oldPrice}
          size="text3"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
          currency={product?.currency}
        />
        <Price
          price={product.price}
          marginLeft={5}
          marginBottom={10}
          size="heading6"
          span={true}
          currency={product?.currency}
        />
      </div>
      <div className="addToCart__button">ADD TO CART</div>
    </div>
  );
}

export default ProductSeven;
