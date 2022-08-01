import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Heading3 from "./../../Components/Font/Heading3";
import Heading6 from "./../../Components/Font/Heading6";
import Heading7 from "./../../Components/Font/Heading7";
import './../../SCSS/MobilePages/mb__signIn__page.scss';
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import google_white from "./../../assets/Icon/google_white.svg";
import facebook_white from "./../../assets/Icon/facebook_white.svg";
import hide_password from "./../../assets/Icon/hide_password.svg";
import see_password from "./../../assets/Icon/see_password.svg";
import check_orange from "./../../assets/Icon/check_orange.svg";
import empty_check_orange from "./../../assets/Icon/empty_check_orange.svg";
import apple_white from "./../../assets/Icon/apple_white.svg";
import { Link } from "react-router-dom";

function Mobile_Sign_In({ }) {
    return (
        <>
            <div className="mb__signIn__page d-lg-none d-block">
                <div className="container-fluid  ">
                    <div className="row justify-content-center">
                        <div className="col-sm-11">
                            <div className="mb__sign__content my-3 my-sm-5 ">
                                <div className="px-3 px-sm-4 pt-4">
                                    <Heading3 text="Sign In to Sony" color="#000000" />
                                </div>
                                <hr />
                                <div className="form px-3 px-sm-4">
                                    <button
                                     
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
                                        <p className="footer__text mb-3">
                                            New User to Sony?{" "}
                                            <span
                                               
                                                className="footer__link__text "
                                            >
                                                Create an Account
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
export default Mobile_Sign_In;