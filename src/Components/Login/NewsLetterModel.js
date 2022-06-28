import React, { useState } from "react";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import Text3 from "../Font/Text3";
import { emailValidator } from "../helpers/utils/validators";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import "./../../SCSS/Login/_newLetterModel.scss";
function NewsLetterModel({ handleChangePopupMode, closeLoginPopup }) {
  const [data, setData] = useState({
    email: "",
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
          if (data.confirmPassword !== data.password) {
            getErr.push("confirmPassword");
          }
        }
      }
    } else {
      getErr.push(name);
    }
    setErrors(getErr);
    setData({ ...data, [name]: value });
  };
  return (
    <div className="newsLetterModel__container">
      <div className="newsLetterModel__header">
        <Heading3 text="Newsletter Subscriptions" color="#000000" />
        <img
          onClick={() => closeLoginPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="newsLetterModel__content">
        <Text3 text="We’ve sent a One Time Password (OTP) to the mobile number above. Please enter it to complete verification" />
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
          {errors.includes("email") && (
            <span className="invalid__message">invalid email</span>
          )}
          {"  "}
          {errors.includes("email_invalid") && (
            <span className="invalid__message">invalid type email</span>
          )}
        </div>
        <button
          onClick={() => handleChangePopupMode("signin")}
          className="subscribe__button"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default NewsLetterModel;
