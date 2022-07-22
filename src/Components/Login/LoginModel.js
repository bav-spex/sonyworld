import React from "react";
import { Link } from "react-router-dom";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import google_white from "./../../assets/Icon/google_white.svg";
import facebook_white from "./../../assets/Icon/facebook_white.svg";
import apple_white from "./../../assets/Icon/apple_white.svg";
import "./../../SCSS/Login/_loginModel.scss";
function LoginModel({ handleChangePopupMode, closeLoginPopup }) {
  return (
    <div className="loginModel__container">
      <div className="loginModel__header">
        <Heading3 text="Sign In to Sony" color="#000000" />
        <img onClick={() => closeLoginPopup()} src={cancel_grey} alt="cancel" className="cancel__button" />
      </div>
      <div className="loginModel__content">
        <button
          onClick={() => handleChangePopupMode("otp")}
          className="getOtp__button"
        >
          Get an OTP on your Phone
        </button>

        <button className="google__signin__button">
          <img
            src={google_white}
            alt="google_icon"
            className="signin__button__icon"
          />
          Sign In With Google
        </button>
        <button className="facebook__signin__button">
          <img
            src={facebook_white}
            alt="google_icon"
            className="signin__button__icon"
          />
          Sign In With Facebook
        </button>
        <button className="apple__signin__button">
          <img
            src={apple_white}
            alt="google_icon"
            className="signin__button__icon"
          />
          Sign In With Apple
        </button>
        <div className="loginModel__footer">
          <p className="footer__text">
            New User to Sony?{" "}
            <span
              onClick={() => handleChangePopupMode("signup")}
              className="footer__link__text"
            >
              Create an Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModel;
