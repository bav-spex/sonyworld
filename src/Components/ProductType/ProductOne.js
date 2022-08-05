import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../../assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../../assets/Icon/fulfill_favourite.svg";
import shopping_cart from "./../../assets/Icon/shopping_cart.svg";
import "./../../SCSS/ProductType/_productOne.scss";
import Heading5 from "./../Font/Heading5";
import Heading6 from "./../Font/Heading6";
import Heading7 from "./../Font/Heading7";
import Price from "./../Font/Price";
import OldPrice from "./../Font/OldPrice";
import RatingBlock from "../MostSharedComponent/RatingBlock";
import { addToWishlist, checkForWishlist, deleteFromWishlist } from "../../services/wishlist.services";

function ProductOne({ productDetailPage, product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  
  useEffect(async()=>{

    const isFavouriteData = await checkForWishlist(product.sku.replace(/[/]/g, "%2F"));
    // console.log(isFavouriteData);
    setIsFavourite(isFavouriteData)
  },[])
  const handleFavourite = () => {
    if (isFavourite) {
      setIsFavourite(false);
      // console.log(product.sku, "added");
    } else {
      setIsFavourite(true);
      // console.log(product.sku, "remove");
    }
  };
  useEffect(() => {
    const data = {
      items: [product.sku],
    };
    if (isFavourite) {
      addToWishlist(data);
      // console.log("added Successfully");
    }
    else{
      removeFromWL(product.sku)
      // console.log("deleted Successfully");
    }
  },[isFavourite]);
  // console.log(isFavourite);
  const handleRating = (score) => {
    setRating(score);
  };
  const removeFromWL=(sku)=>{
    const data = {
      items: [sku],
    };
    deleteFromWishlist(data)
  }
  // console.log(product.sku);
  // console.log(product.sku.replace(/[/]/g, "%2F"));
  
  return (
    <div
      key={product.id}
      className={
        !productDetailPage ? "productOne__block" : "pd__productOne__block"
      }
    >
      <Link to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}>
        <div className="productOne__image__block">
          <img src={product.baseImage} alt="" className="productOne__image" />
        </div>
      </Link>
      <div className="productOne__name__favourite">
        <Link
          to={`/products/${product.sku.replace(/[/]/g, "%2F")}`}
          className="productOne__name"
        >
          {product.name}
        </Link>

        {/* <Heading7 text={product.name} /> */}
        <img
          onMouseEnter={() => setIsFavouriteHover(true)}
          onClick={handleFavourite}
          onMouseLeave={() => setIsFavouriteHover(false)}
          className={
            !isFavourite
              ? "productOne__favourite__icon"
              : "productOne__favourite__icon__disable"
          }
          src={isFavouriteHover ? fulfill_favourite : empty_favourite}
          alt=""
        />
        <img
          onClick={handleFavourite}
          className={
            isFavourite
              ? "productOne__favourite__icon"
              : "productOne__favourite__icon__disable"
          }
          src={fulfill_favourite}
          alt=""
        />
      </div>
      <RatingBlock rating={4.2} totalRatings={2183} />

      <div className="prize__block">
        <OldPrice
          oldPrice={526341}
          size="text3"
          color="#c8c8c8"
          marginBottom={10}
          lineThrough={true}
          span={true}
          currency={product?.currency}
        />
        <Price
          price={product.price_rounded ? product.price_rounded : 1699}
          marginLeft={5}
          size="heading6"
          span={true}
          currency={product?.currency}
        />
      </div>
      {/* <button onClick={()=>removeFromWL(product.sku)}>remove</button> */}
      {productDetailPage ? (
        <div className="addToCart__button">
          <img src={shopping_cart} alt="" className="addToCart__icon" />
          Add To Cart
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductOne;
