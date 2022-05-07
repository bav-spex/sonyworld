import React, { useState } from "react";
import { RatingStar } from "rating-star";
import { Rating } from "react-simple-star-rating";

import empty_favourite from "./../Assets/Icon/empty_favourite.svg";
import fulfill_favourite from "./../Assets/Icon/fulfill_favourite.svg";
import "./../SCSS/_productOne.scss";

function ProductOne({ productDetailPage, product }) {
  const [isFavouriteHover, setIsFavouriteHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  // console.log(product.rating);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleRating = (score) => {
    setRating(score);
  };
  // console.log(rating);
  return (
    <div key={product.id} className={!productDetailPage? "productOne__block": "pd__productOne__block"}>
      <div className="productOne__image__block">
        <img src={product.image} alt="" className="productOne__image" />
      </div>
      <div className="productOne__name__favourite">
        <p className="productOne__name">{product.productName}</p>
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
      <div className="rating__block">
        <Rating
          // onClick={handleRating}
          size={15}
          fillColor="#303030"
          emptyColor="#C8C8C8"
          readonly={true}
          ratingValue={(product.rating * 100) / 5} /* Available Props */
        />
      </div>
      <div className="prize__block">
        <p className="old__prize">{`SAR${product.oldPrice
          .toString()
          .slice(0, -3)},${product.oldPrice.toString().slice(-3)}.00`}</p>
        <p className="new__prize">{`SAR${product.price
          .toString()
          .slice(0, -3)},${product.price.toString().slice(-3)}.00`}</p>
      </div>
      {productDetailPage ? (
        <div className="addToCart__button">ADD TO CART</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductOne;
