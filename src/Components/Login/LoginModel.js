import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import google_white from "./../../assets/Icon/google_white.svg";
import facebook_white from "./../../assets/Icon/facebook_white.svg";
import hide_password from "./../../assets/Icon/hide_password.svg";
import see_password from "./../../assets/Icon/see_password.svg";
import check_orange from "./../../assets/Icon/check_orange.svg";
import empty_check_orange from "./../../assets/Icon/empty_check_orange.svg";
import apple_white from "./../../assets/Icon/apple_white.svg";
import "./../../SCSS/Login/_loginModel.scss";
import { emailValidator } from "../helpers/utils/validators";
function LoginModel({ handleChangePopupMode, closeLoginPopup }) {
  const [isPassword, setIsPassword] = useState(true);
  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  const [data, setData] = useState({
    username: "",
    password: "",
    onboarding: "",
  });
  const [errors, setErrors] = useState([]);
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let getErr = errors.filter((val, i) => val !== name);
    if (value) {
      if (name === "email") {
        let emailStatus = emailValidator(value);
        if (emailStatus === "error") {
          getErr.push("email_invalid");
          let tempErr = getErr.filter((val, i) => val !== "email");
          getErr = tempErr;
        } else {
          let tempErr = getErr.filter((val, i) => val !== "email_invalid");
          getErr = tempErr;
        }
      }
      if (name === "confirmPassword") {
        if (data.password) {
          if (value !== data.password) {
            getErr.push("passwordNotMatched");
          } else {
            let tempErr = getErr.filter(
              (val, i) => val !== "passwordNotMatched"
            );
            getErr = tempErr;
          }
        }
      }
      if (name === "password") {
        if (value !== data.confirmPassword) {
          getErr.push("passwordNotMatched");
        } else {
          let tempErr = getErr.filter((val, i) => val !== "passwordNotMatched");
          getErr = tempErr;
        }
      }
    } else {
      if (name === "email") {
        let tempErr = getErr.filter((val, i) => val !== "email_invalid");
        getErr = tempErr;
      }
      if (name === "confirmPassword") {
        let tempErr = getErr.filter((val, i) => val !== "passwordNotMatched");
        getErr = tempErr;
      }
      getErr.push(name);
    }
    setErrors(getErr);
    setData({ ...data, [name]: value });
  };
  const togglePassword = () => setIsPassword(!isPassword);
  return (
    <div className="loginModel__container">
      <div className="loginModel__header">
        <Heading3 text="Sign In to Sony" color="#000000" />
        <img
          onClick={() => closeLoginPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="loginModel__content">
        <div className="main__form__field__block">
          {/* <p className="form__label">Email Address</p> */}
          <Heading7 text="Email Address / Mobile Number" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="email"
              name="email"
              value={data.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.includes("email") && (
            <p className="invalid__message">Please Enter Email Address</p>
          )}
          {errors.includes("email_invalid") && (
            <p className="invalid__message">Please Enter Valid Email Address</p>
          )}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Password</p> */}
          <Heading7 text="Password" marginBottom={10} />
          <div className="field__block">
            <input
              type={isPassword ? "password" : "text"}
              placeholder=""
              className="form__field"
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
            />
            <a onClick={() => togglePassword()}>
              {isPassword ? (
                <img src={see_password} alt="" />
              ) : (
                <img src={hide_password} alt="" />
              )}
            </a>
          </div>
          {errors.includes("password") && (
            <p className="invalid__message">Please Enter Password</p>
          )}
        </div>
        <div className="remember__and__forget__password__block">
          <div className="main__remember__block">
            <div className="remember__block">
              <div className="inner__Remember__block">
                <img
                  onMouseEnter={() => setIsCheckBoxHover(true)}
                  onClick={handleFavourite}
                  onMouseLeave={() => setIsCheckBoxHover(false)}
                  className={
                    !isCheckBox ? "check__icon" : "check__icon__disable"
                  }
                  src={isCheckBoxHover ? check_orange : empty_check_orange}
                  alt=""
                />
                <img
                  onClick={handleFavourite}
                  className={
                    isCheckBox ? "check__icon" : "check__icon__disable"
                  }
                  src={check_orange}
                  alt=""
                />
              </div>
              <p>Remember me</p>
            </div>
          </div>
          <div className="forgot__password__block">
            <p className="forgot__password__text">forgot password?</p>
          </div>
        </div>
        <button className="signin__button">SIGN IN</button>
        <div className="or__block">
          <div className="or__text__block">
            <p className="or__text">OR</p>
          </div>
          <div className="mid__line"></div>
        </div>
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



















