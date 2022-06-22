import React, { useState } from "react";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import Text3 from "../Font/Text3";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import "./../../SCSS/Login/_otpModel.scss";
function OtpModel({ handleChangePopupMode, closeLoginPopup }) {
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  return (
    <div className="otpModel__container">
      <div className="otpModel__header">
        <Heading3 text="Authentication required" color="#000000" />
        <img
          onClick={() => closeLoginPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="otpModel__content">
        <div className="otp__number__block">
          <Heading7 text="+966 50 655 2835" span={true} />
          <button className="change__button">Change</button>
        </div>
        <Text3 text="We’ve sent a One Time Password (OTP) to the mobile number above. Please enter it to complete verification" marginBottom={10} />
        <div className="main__form__field__block">
          {/* <p className="form__label">First Name</p> */}
          <Heading7 text="Enter OTP" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button onClick={() => handleChangePopupMode("newsletter")} className="signup__button">SIGN UP</button>
        <button
          onClick={() => handleChangePopupMode("otp")}
          className="resendOtp__button"
        >
          Resend OTP
        </button>
        <div className="otp__or__block">
          <div className="otp__or__text__block">
            <p className="otp__or__text">OR</p>
          </div>
          <div className="otp__mid__line"></div>
        </div>

        <button
          onClick={() => handleChangePopupMode("signin")}
          className="signin__with__password__button"
        >
          Sign In with Password
        </button>
      </div>
    </div>
  );
}

export default OtpModel;
