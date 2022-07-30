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

const T_REQ_FIRSTNAME = 'Firstname is missing';
const T_REQ_LASTNAME = 'Lastname is missing';
const T_REQ_EMAIL = 'Email is missing';
const T_INVALID_EMAIL = 'Invalid email address (ex: example@gmail.com)';
const T_REQ_PASSWORD = 'Password is missing';
const T_REQ_CONFIRM_PASSWORD = 'Confirm Password is missing';
const T_WEAK_PASSWORD = 'Password must contain 1 uppercase, 1 lowercase,1 number, and at least 8 characters. Do not add more than 5 consecutive characters (123456/qwerty)';
const T_PASSWORD_NOT_MATCHED = 'Password not matched';
const T_REQ_MOBILE_NUMBER = 'Mobile Number is missing';
const T_REQ_USERNAME = 'Username is required';

function SignUpModel({ handleChangePopupMode, closeLoginPopup }) {

  const dispatch = useDispatch();

  const { customerSignUpMsg, customerDetails } = useSelector((state) => state.customerReducer);

  const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const handleFavourite = () => {
    setIsCheckBox(!isCheckBox);
  };
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [updateErrMsg, setUpdateErrMsg] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
    policyChecked: true,
  });
  const [errMsg, setErrMsg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    policyChecked: true,
  });

  useEffect(() => {
    if (updateErrMsg === true) {
      setErrMsg(errMsg);
      setUpdateErrMsg(!updateErrMsg)
    }
  }, [updateErrMsg]);

  const validateForm = async (event, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'firstName':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_FIRSTNAME });
        } else {
          setErrMsg({ ...errMsg, [name]: '' });
        }
        break;
      case 'lastName':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_LASTNAME });
        } else {
          setErrMsg({ ...errMsg, [name]: '' });
        }
        break;
      case 'email':
        let emailStatus = emailValidator(value);
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_EMAIL });
        } else {
          if (emailStatus === "error") {
            setErrMsg({ ...errMsg, [name]: T_INVALID_EMAIL });
          } else {
            setErrMsg({ ...errMsg, [name]: '' });
          }
        }
        break;
      case 'mobileNumber':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_MOBILE_NUMBER });
        } else {
          setErrMsg({ ...errMsg, [name]: '' });
        }
        break;
      case 'username':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_USERNAME });
        } else {
          let params = {
            username: value
          }
          let usernameAvailable = await services.isUsernameAvailable(params);
          if (usernameAvailable.success === true) {
            setErrMsg({ ...errMsg, [name]: '' });
          } else {
            setErrMsg({ ...errMsg, [name]: usernameAvailable.message });
          }
        }
        break;
      case 'password':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_PASSWORD });
        } else {
          let params = {
            password: value,
            username: ''
          }
          let pwdStrength = await services.checkPasswordStrength(params);
          if (pwdStrength.strength === 'fair') {
            setErrMsg({ ...errMsg, [name]: '' });
          } else {
            setErrMsg({ ...errMsg, [name]: T_WEAK_PASSWORD });
          }
        }
        break;
      case 'confirmPassword':
        if (value === "") {
          setErrMsg({ ...errMsg, [name]: T_REQ_CONFIRM_PASSWORD });
        } else {
          if (value === data.password) {
            setErrMsg({ ...errMsg, [name]: '' });
          } else {
            setErrMsg({ ...errMsg, [name]: T_PASSWORD_NOT_MATCHED });
          }
        }
        break;
      default:
        break;
    }
  }

  const handleChange = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    validateForm(event, name, value);
    setData({ ...data, [name]: value });
  };

  const allFeildValidate = () => {

    let validateFeild = [
      {
        keyName: "firstName",
        defaultMsg: T_REQ_FIRSTNAME
      },
      {
        keyName: "lastName",
        defaultMsg: T_REQ_LASTNAME
      },
      {
        keyName: "email",
        defaultMsg: T_REQ_EMAIL
      },
      {
        keyName: "username",
        defaultMsg: T_REQ_USERNAME
      },
      {
        keyName: "mobileNumber",
        defaultMsg: T_REQ_USERNAME
      },
      {
        keyName: "password",
        defaultMsg: T_REQ_PASSWORD
      },
      {
        keyName: "confirmPassword",
        defaultMsg: T_REQ_CONFIRM_PASSWORD
      }
    ];

    let checkValueStatus = [];
    let checkErrStatus = [];

    let blankErrMsg = errMsg;
    validateFeild && validateFeild.map((val, i) => {
      let keyVal = data[val.keyName];
      let errVal = errMsg[val.keyName];
      if (keyVal === "") {
        blankErrMsg[val.keyName] = val.defaultMsg
      }

      if (keyVal !== "") {
        checkValueStatus.push('suc')
      }
      if (errVal === "") {
        checkErrStatus.push('err')
      }
    })
    setErrMsg(blankErrMsg);
    let checkSignUpStatus = false;
    if (checkValueStatus.length === checkErrStatus.length) {
      checkSignUpStatus = true;
    }
    setUpdateErrMsg(true);

    return checkSignUpStatus;
  };

  const onSignUp = () => {
    let checkSignUpStatus = allFeildValidate();
    if (checkSignUpStatus === true) {
      let params = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone_number: data.mobileNumber,
        password: data.password,
        username: data.username
      }
      dispatch(services.customerSignUp(params))
    }
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
          {customerSignUpMsg && <p className="invalid__message">{customerSignUpMsg}</p>}
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
          {errMsg.firstName && <p className="invalid__message">{errMsg.firstName}</p>}
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
          {errMsg.lastName && <p className="invalid__message">{errMsg.lastName}</p>}
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
          {errMsg.email && <p className="invalid__message">{errMsg.email}</p>}
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
          {errMsg.mobileNumber && <p className="invalid__message">{errMsg.mobileNumber}</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">Mobile Number</p> */}
          <Heading7 text="Username" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="username"
              name="username"
              value={data.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errMsg.username && <p className="invalid__message">{errMsg.username}</p>}
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
          {errMsg.password && <p className="invalid__message">{errMsg.password}</p>}
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
          {errMsg.confirmPassword && <p className="invalid__message">{errMsg.confirmPassword}</p>}
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
