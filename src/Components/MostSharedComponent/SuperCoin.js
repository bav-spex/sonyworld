import React from "react";
import "./../../SCSS/MostSharedComponents/_superCoin.scss";
import super_coin_image from "./../../assets/Icon/super_coin_image.svg";
import coin from "./../../assets/Icon/coin.svg";
import Heading6 from "../Font/Heading6";
function SuperCoin() {
  return (
    <div className="row super__coin__block common__main__block">
      <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-5 super__coin__image__block">
        <img src={super_coin_image} alt="" className="super__coin__image" />
      </div>
      <div className="col-8 col-sm-6 col-md-8 col-lg-8 col-xl-7 super__coin__text__block ps-2">
        <p className="super__coin__title">For every SAR200 Spent,</p>
        <p className="super__coin__title">
          you earn <img src={coin} alt="" className="coin" /> 2 SuperCoins
        </p>
        <p className="super__coin__condition">Max 50 coins per order</p>
      </div>
    </div>
  );
}

export default SuperCoin;
