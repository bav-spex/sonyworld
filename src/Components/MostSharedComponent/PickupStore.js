import React from "react";
import { Link } from "react-router-dom";
import './../../SCSS/MostSharedComponents/_pickupStore.scss'
import pickup_store from "./../../assets/Icon/pickup_store.svg";
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
                  to="/store" data-bs-toggle="modal" data-bs-target="#exampleModal"
                >{`See all pickup locations >`}</Link>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

          {/* mobile modal popup for store */}
          <div class="modal mb__bottom_popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
    </div>
   
  );
}

export default PickupStore;
