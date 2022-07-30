import React from "react";
import { Link } from "react-router-dom";

import "./../SCSS/_dealsOfTheWeek.scss";

function DealsOfTheWeek({ dealsOfTheWeekData }) {
  return (
    <div className="container-fluid dealsOfTheWeek__container">
      <div className="dealsOfTheWeek__block">
        <p className="section__title">Deals of the Week</p>
        <Link to="/products">
          <div className="row">
            {/* {dealsOfTheWeekData.map((deals, dealsIndex) => {
              return (
                <div key={dealsIndex} className="col-sm-12 col-md-6 deals__block">
                  <img className="deals__image" src={deals.imageUrl} alt="" />
                </div>
              );
            })} */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DealsOfTheWeek;
