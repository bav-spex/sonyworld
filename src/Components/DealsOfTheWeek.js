import React from "react";
import { Link } from "react-router-dom";

import "./../SCSS/_dealsOfTheWeek.scss";

function DealsOfTheWeek({ dealsoftheweekData }) {
  return (
    <div className="container-fluid dealsOfTheWeek__container">
      <div className="dealsOfTheWeek__block">
        <p className="section__title">Deals of the Week</p>
        <Link to="/products">
          <div className="row">
            {dealsoftheweekData.map((deals, dealsIndex) => {
              return (
                <div key={deals.id} className="col-sm-12 col-md-6 deals__block">
                  <img className="deals__image" src={deals.image} alt="" />
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DealsOfTheWeek;
