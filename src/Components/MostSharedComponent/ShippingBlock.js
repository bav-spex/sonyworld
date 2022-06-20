import React from "react";
import { Link } from "react-router-dom";
import shipping from "./../../assets/Icon/shipping.svg"
import "./../../SCSS/MostSharedComponents/_shippingBlock.scss"
function ShippingBlock({shipment}) {
  return (
    <div className="product__shipping__block">
      {shipment.pickupStore.map((ship, shipIndex) => {
        return (
          <div key={ship.id} className="product__ship__block">
            <img src={shipping} alt="" className="product__ship__icon" />
            <div className="shipping__text__block">
              <p className="product__shipping__text">
                <span className="product__shipping__only__text">Shipping:</span>
                {` ${ship.pickupText}`}
              </p>
              {shipIndex === 0 ? (
                <Link
                  className="product__shipping__location__link"
                  to="/store"
                >{`See all pickup locations >`}</Link>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShippingBlock;
