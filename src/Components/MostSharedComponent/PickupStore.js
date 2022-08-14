import React from "react";
import { Link } from "react-router-dom";
import './../../SCSS/MostSharedComponents/_pickupStore.scss'
import pickup_store from "./../../assets/Icon/pickup_store.svg";
import Heading5 from "../Font/Heading5";
import pinIcon from '../../assets/Icon/pin.svg';
import pinMiles from '../../assets/Icon/pin-miles.svg';
import Heading7 from "../Font/Heading7";
import Text4 from "../Font/Text4";

function PickupStore({ delivery, title }) {
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
				<div class="modal-dialog mb__dialog__end modal-dialog-scrollable">
					<div class="modal-content">
						<div class="modal-header">
							<Heading5 text="See All Pick Up Location" />
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div className="d-flex pickup__box">
								<span>
									<img src={pinIcon} alt="pinIcon" />
								</span>
								<div className="ms-2">
									<Heading7 text="Sony Showroom / Modern Electronics" />
									<Text4 text="Akariya Mall, Olaya Street, Riyadh Riyadh" />
									<button className="btn btn__primary__orange py-2 mt-3">
										CONFIRM LOCATION
									</button>
								</div>
								<span className="ms-5 text-center">
									<img src={pinMiles} alt="miles"/>
									<Heading7 text="2 miles" />
								</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

	);
}

export default PickupStore;
