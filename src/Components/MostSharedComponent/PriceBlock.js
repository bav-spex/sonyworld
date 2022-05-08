import React from "react";
import { Link } from "react-router-dom";
import OldPrice from "../Font/OldPrice";
import Price from "../Font/Price";
import Text4 from "../Font/Text4";

function PriceBlock({ oldPrice, price, monthlySavingTagline }) {
  return (
    <div className="row pd__product__price__block ">
      <div className="col-4 col-sm-4 col-md-5 pd__total__price__block">
        <Price price={price} size="heading1" />
        <div className="pd__save__price__button">{`SAVE SAR${Math.ceil(
          price * 0.1
        )}`}</div>
        <OldPrice
          oldPrice={oldPrice}
          size="text2"
          color="#808080"
          marginBottom={0}
          lineThrough={true}
        />
      </div>
      <div className="col-2 col-sm-2 col-md-2 pd__or__block">
        <div className="pd__or__text__block">
          <p className="pd__or__text">OR</p>
        </div>
        <div className="pd__mid__line"></div>
      </div>
      <div className="col-5 col-sm-6 col-md-5 pd__product__monthly__price__block">
        <Price price={price} size="heading1" />
        <Text4 text={monthlySavingTagline} color="#808080" marginBottom={0} />
        <Link to="/knowmore" className="pd__know__more">
          {"know more >"}
        </Link>
      </div>
    </div>
  );
}

export default PriceBlock;
