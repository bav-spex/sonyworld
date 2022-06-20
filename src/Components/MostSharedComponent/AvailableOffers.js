import React from "react";
import { Link } from "react-router-dom";
import "./../../SCSS/MostSharedComponents/_availableOffers.scss";
import offer_tag from "./../../assets/Icon/offer_tag.svg";
import Heading5 from "../Font/Heading5";

function AvailableOffers({ availableOffer, title }) {
  return (
    <div className="product__avilable__offers__block product__common__main__block">
      <Heading5 text={title} marginBottom={0} />
      {availableOffer.map((offer, offerIndex) => {
        return (
          <div key={offer.id} className="product__offer__block">
            <img src={offer_tag} alt="" className="product__offer__icon" />
            <div className="product__offer__text__box">
              <p className="product__offertype">
                {`${offer.offerType}${"    "}`}
                <span className="product__offerText">{offer.offerText}</span>
                <Link
                  to="/termsAndConditions"
                  className="product__termsAndConditions__link"
                >
                  {offer.termsAndConditions}
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AvailableOffers;
