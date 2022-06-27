import React from "react";
import "./../SCSS/_breadcrumbs.scss";
import Home from "./../assets/breadcrumbs/home.svg";
import LeftArrow from "./../assets/breadcrumbs/left-arrow.svg";
import RightArrow from "./../assets/breadcrumbs/right-arrow.svg";

function BreadCrumbs(props) {
  return (
    <div className="container-fluid breadcrumbs__container">
      <div className="breadcrumbs__block">
        <div className="back__button__block">
          <div className="back__button">
            <img className="left__arrow" src={LeftArrow} alt="" />
            <p className="back__text">Back</p>
          </div>
        </div>
        <div className="home__image">
          <img src={Home} alt="Home" className="home__icon" />
        </div>
        {/* <div className="right__arrow">
          <img src={RightArrow} alt="Home" className="right__icon" />
        </div>
        <div className="page__title">
          <p className="page__title__text">{props.title || ""}</p>
        </div> */}
        {props.title ? (
          <>
            <div className="right__arrow">
              <img src={RightArrow} alt="Home" className="right__icon" />
            </div>
            <div className="page__title">
              <p className="page__title__text">{props.title || ""}</p>
            </div>
          </>
        ) : (
          ""
        )}
        {props.subTitle ? (
          <>
            <div className="right__arrow">
              <img src={RightArrow} alt="Home" className="right__icon" />
            </div>
            <div className="page__title">
              <p className="page__title__text">{props.subTitle || ""}</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BreadCrumbs;
