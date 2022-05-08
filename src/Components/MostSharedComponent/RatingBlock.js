import React from "react";
import { Rating } from "react-simple-star-rating";
import black_down_arrow from "./../../Assets/Icon/black_down_arrow.svg";

import "./../../SCSS/MostSharedComponents/_rating.scss";
function RatingBlock({ size, rating, totalRatings, fillColor, emptyColor }) {
  return (
    <div className="main__rating__block">
      <div className="rating__block">
        <Rating
          // onClick={handleRating}
          size={size}
          fillColor={fillColor}
          emptyColor={emptyColor}
          readonly={true}
          ratingValue={(rating * 100) / 5} /* Available Props */
        />
      </div>
      <img src={black_down_arrow} alt="" className="product__rating__icon" />
      <p className="product__rating">{rating}</p>
      <p className="product__totalRating">
        {totalRatings.toString().length > 3
          ? `(${totalRatings.toString().slice(0, -3)},${totalRatings
              .toString()
              .slice(-3)}) Rating`
          : `(${totalRatings.toString().slice(-3)}) Rating`}
      </p>
    </div>
  );
}

export default RatingBlock;
