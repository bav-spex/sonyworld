import React from "react";
import "./../../SCSS/MostSharedComponents/_protection.scss";
import RatingBlock from "./RatingBlock";
import Heading5 from "./../Font/Heading5";
import Text3 from "../Font/Text3";
import Price from "../Font/Price";
import OldPrice from "../Font/OldPrice";
function Protection({ title, tagline, rating, totalRatings, protection }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="product__protect__block">
      <Heading5 text={`${title} `} />
      <p className="product__block__title__span">{`(${tagline})`}</p>
      <RatingBlock
        size={22}
        rating={rating}
        totalRatings={totalRatings}
        fillColor="#DC3A1A"
        emptyColor="#C8C8C8"
      />

      <div className="product__protect__selection__block">
        {protection.map((protect, protectIndex) => {
          return (
            <div key={protect.id} className="product__protection__selection">
              <div className="product__protection__form__block">
                <input
                  type="checkbox"
                  className="product__input__check"
                  name="pincode"
                  value={1}
                  onChange={handleChange}
                />
                <p className="product__protection__text">
                  <Text3
                    text={protect.protectionText}
                    color="#3b3b3b"
                    marginBottom={0}
                  />
                </p>
              </div>
              <div className="product__protection__price__block">
                <p className="product__protection__price">
                  <Price price={protect.price} size="heading6" />
                </p>
                <p className="product__protection__monthly__price">
                  <OldPrice
                    preText="About"
                    oldPrice={`${protect.price}`}
                    postText="/mo"
                    size="text4"
                    marginBottom={0}
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Protection;
