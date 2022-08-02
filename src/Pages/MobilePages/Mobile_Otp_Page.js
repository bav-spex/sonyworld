import React, { useState } from "react";
import Heading3 from "../../Components/Font/Heading3";
import Heading6 from "../../Components/Font/Heading6";
import Heading7 from "../../Components/Font/Heading7";
import Text3 from "../../Components/Font/Text3";
import "./../../SCSS/MobilePages/_mb__signIn__page.scss";

function Mobile_Otp_Page({ }) {

  return (
    <div className="mb__signIn__page d-lg-none d-block">
      <div className="container-fluid  ">
        <div className="row justify-content-center">
          <div className="col-sm-11">
            <div className="mb__sign__content my-3 my-sm-5 ">

              <div className="otpModel__container">
                <div className="otpModel__header">
                  <Heading3 text="Authentication required" color="#000000" />
                  
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

                      />
                    </div>
                  </div>
                  <button className="btn w-100 btn__primary__orange">SIGN UP</button>
                  <button

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

                    className="signin__with__password__button btn btn__border__black"
                  >
                    Sign In with Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Mobile_Otp_Page;
