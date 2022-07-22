import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import { emailValidator } from "../helpers/utils/validators";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import shop from "./../../assets/Icon/shop.svg";
import hide_password from "./../../assets/Icon/hide_password.svg";
import see_password from "./../../assets/Icon/see_password.svg";
import check_orange from "./../../assets/Icon/check_orange.svg";
import empty_check_orange from "./../../assets/Icon/empty_check_orange.svg";
import google_white from "./../../assets/Icon/google_white.svg";
import facebook_white from "./../../assets/Icon/facebook_white.svg";
import apple_white from "./../../assets/Icon/apple_white.svg";

import "./../../SCSS/Login/_signupModel.scss";
import Text3 from "../Font/Text3";
import * as services from './../../services/services'

function SignUpModel({ handleChangePopupMode, closeLoginPopup }) {

  const dispatch = useDispatch();

  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    policyChecked: true,
  });

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
            let tempErr = getErr.filter((val, i) => val !== 'passwordNotMatched');
            getErr = tempErr
          }
        }
      }
      if (name === "password") {
        if (value !== data.confirmPassword) {
          getErr.push("passwordNotMatched");
          let tempErr = getErr.filter((val, i) => val !== 'confirmPassword');
          getErr = tempErr
        } else {
          let tempErr = getErr.filter((val, i) => val !== 'passwordNotMatched');
          getErr = tempErr
        }
      }
    } else {
      if (name === "email") {
        let tempErr = getErr.filter((val, i) => val !== 'email_invalid');
        getErr = tempErr
      }
      if (name === "confirmPassword") {
        let tempErr = getErr.filter((val, i) => val !== 'passwordNotMatched');
        getErr = tempErr
      }
      getErr.push(name);
    }
    setErrors(getErr);
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    const errorsList = [];

    let validateFeild = [
      'firstName',
      'lastName',
      'email',
      'mobileNumber',
      'password',
      'confirmPassword',
    ];

    validateFeild && validateFeild.map((val, i) => {
      let keyVal = !data[val]
      if (!data[val]) {
        errorsList.push(val);
      }
      if (val === 'email') {
        if (!keyVal) {
          let emailStatus = emailValidator(data[val]);
          if (emailStatus === 'error') {
            errorsList.push('email_invalid');
          }
        }
      }
    })
    return errorsList;
  };

  const onSignUp = () => {
    let checkError = validate();
    if (checkError.length === 0) {
      // api fire
      let params = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone_number: data.mobileNumber,
        password: data.password,
        username: data.firstName + data.lastName,
        profile_picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
        dateOfBirth: '2022-01-01',
        gender: 'm',
      }
      // dispatch(services.userSignUp(params))
    }
    setErrors(checkError);
  }

  const togglePassword = () => setIsPassword(!isPassword);
  const toggleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);
  const [errors, setErrors] = useState([]);
  return (
    <div className="signupModel__container">
      <div className="signupModel__header">
        <Heading3 text="Sign Up to Sony" color="#000000" />
        <img
          onClick={() => closeLoginPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="signupModel__content">
        <div className="main__form__field__block">
          {/* <p className="form__label">First Name</p> */}
          <Heading7 text="First Name" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.includes("firstName") && <p className="invalid__message">Please Enter First Name</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Last Name</p> */}
          <Heading7 text="Last Name" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.includes("lastName") && <p className="invalid__message">Please Enter Last Name</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Email Address</p> */}
          <Heading7 text="Email Address" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.includes("email") && <p className="invalid__message">Please Enter Email Address</p>}
          {errors.includes("email_invalid") && <p className="invalid__message">Please Enter Valid Email Address</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Mobile Number</p> */}
          <Heading7 text="Mobile Number" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="mobileNumber"
              name="mobileNumber"
              value={data.mobileNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.includes("mobileNumber") && <p className="invalid__message">Please Enter Mobile Number</p>}
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
          {errors.includes("password") && <p className="invalid__message">Please Enter Password</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Confirm Password</p> */}
          <Heading7 text="Confirm Password" marginBottom={10} />
          <div className="field__block">
            <input
              type={isConfirmPassword ? "password" : "text"}
              placeholder=""
              className="form__field"
              id="confirmPassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
            <a onClick={() => toggleConfirmPassword()}>
              {isConfirmPassword ? (
                <img src={see_password} alt="" />
              ) : (
                <img src={hide_password} alt="" />
              )}
            </a>
          </div>
          {errors.includes("confirmPassword") && <p className="invalid__message">Please Enter Confirm Password</p>}
          {errors.includes("passwordNotMatched") && <p className="invalid__message">Password And Confirm Password Does Not Matched</p>}
        </div>
        <div className="main__policy__check__block">
          <div className="policy__check__block">
            <img
              onMouseEnter={() => setIsCheckBoxHover(true)}
              onClick={handleFavourite}
              onMouseLeave={() => setIsCheckBoxHover(false)}
              className={!isCheckBox ? "check__icon" : "check__icon__disable"}
              src={isCheckBoxHover ? check_orange : empty_check_orange}
              alt=""
            />
            <img
              onClick={handleFavourite}
              className={isCheckBox ? "check__icon" : "check__icon__disable"}
              src={check_orange}
              alt=""
            />
          </div>
          <p>
            I agree to our
            <Link className="policy__link" to="/termsandconditions">
              {" "}
              Terms and Conditions{" "}
            </Link>
            &
            <Link className="policy__link" to="/termsandconditions">
              {" "}
              Privacy Policy{" "}
            </Link>
          </p>
        </div>

        <button className="signup__button" onClick={() => onSignUp()}>SIGN UP</button>
        <div className="signup__or__block">
          <div className="signup__or__text__block">
            <p className="signup__or__text">OR</p>
          </div>
          <div className="signup__mid__line"></div>
        </div>

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
        <div className="signupModel__footer">
          <p className="footer__text">
            Already have an account?{" "}
            <span
              onClick={() => handleChangePopupMode("signin")}
              className="footer__link__text"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpModel;
