import React from "react";
import { Link } from "react-router-dom";
import './../../SCSS/MostSharedComponents/_pickupStore.scss'
import pickup_store from "./../../Assets/Icon/pickup_store.svg";
import Heading5 from "../Font/Heading5";

function PickupStore({delivery, title}) {
  return (
    <div className="product__pickup__block">
       <Heading5 text={title} marginBottom={20} />
     
      {delivery.pickupStore.map((store, storeIndex) => {
        return (
          <div key={store.id} className="product__store__block">
            <img src={pickup_store} alt="" className="product__store__icon" />
            <div className="pickup__text__block">
              <p className="product__pickup__text">
                <span className="product__pickup__only__text">Pickup:</span>
                {` ${store.pickupText}`}
              </p>
              {storeIndex === 0 ? (
                <Link
                  className="product__store__location__link"
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

export default PickupStore;
