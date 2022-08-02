import React, { useEffect, useState } from "react";
import * as services from '../../services/services'
import { useDispatch, useSelector } from 'react-redux';
import Heading3 from "../../Components/Font/Heading3";
import Heading6 from "../../Components/Font/Heading6";
import Heading7 from "../../Components/Font/Heading7";
import './../../SCSS/MobilePages/_mb__signIn__page.scss';
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import google_white from "./../../assets/Icon/google_white.svg";
import facebook_white from "./../../assets/Icon/facebook_white.svg";
import hide_password from "./../../assets/Icon/hide_password.svg";
import see_password from "./../../assets/Icon/see_password.svg";
import check_orange from "./../../assets/Icon/check_orange.svg";
import empty_check_orange from "./../../assets/Icon/empty_check_orange.svg";
import apple_white from "./../../assets/Icon/apple_white.svg";
import { Link } from "react-router-dom";


function Mobile_Sign_Up({ }) {
    const dispatch = useDispatch();

    const { customerSignInMsg } = useSelector(
        (state) => state.customerReducer
    );



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
        if (value === "") {
            getErr.push(name);
        }
        setErrors(getErr);
        setData({ ...data, [name]: value });
    };

    // login user api
    const onSignIn = () => {
        if (errors.length === 0 && data.username !== "" && data.password !== "") {
            let params = {
                username: data.username,
                password: data.password,
                onboarding: false
            }
            dispatch(services.customerSignIn(params));
        } else {
            setErrors(['username', 'password']);
        }
    }


    const togglePassword = () => setIsPassword(!isPassword);
    return (
        <>
            <div className="mb__signIn__page d-lg-none d-block">
                <div className="container-fluid  ">
                    <div className="row justify-content-center">
                        <div className="col-sm-11">
                            <div className="mb__sign__content my-3 my-sm-5 ">
                                <div className="px-3 px-sm-4 pt-4">
                                    <Heading3 text="Sign Up to Sony" color="#000000" />
                                </div>
                                <hr />
                                <div className="px-3 px-sm-4">
                                    <div className="field__block mb-3">
                                        <Heading7 text="First Name" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                        />
                                    </div>
                                    <div className="field__block mb-3">
                                        <Heading7 text="Last Name" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                        />
                                    </div>
                                    <div className="field__block mb-3">
                                        <Heading7 text="Email Address" marginBottom={10} />
                                        <input
                                            type="email"
                                            placeholder=""
                                            className="form__field form-control"
                                        />
                                    </div>
                                    <div className="field__block mb-3">
                                        <Heading7 text="Mobile Number" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                        />
                                    </div>
                                    <div className="main__form__field__block  pwd-field mb-3">
                                        {/* <p className="form__label">Password</p> */}
                                        <Heading7 text="Password" marginBottom={10} />
                                        <div className="field__block">
                                            <input
                                                type={isPassword ? "password" : "text"}
                                                placeholder=""
                                                className="form__field form-control"
                                                id="password"
                                                name="password"
                                                value={data.password}
                                                onChange={(e) => handleChange(e)}
                                            />
                                            <a onClick={() => togglePassword()} className="pwd-show">
                                                {isPassword ? (
                                                    <img src={see_password} alt="" />
                                                ) : (
                                                    <img src={hide_password} alt="" />
                                                )}
                                            </a>
                                        </div>
                                        {errors.includes("password") && (
                                            <p className="invalid__message text-danger">Please Enter Password</p>
                                        )}
                                    </div>
                                    <div className="main__form__field__block  pwd-field">
                                        {/* <p className="form__label">Password</p> */}
                                        <Heading7 text="Confirm Password" marginBottom={10} />
                                        <div className="field__block">
                                            <input
                                                type={isPassword ? "password" : "text"}
                                                placeholder=""
                                                className="form__field form-control"
                                                id="password"
                                                name="password"
                                                value={data.password}
                                                onChange={(e) => handleChange(e)}
                                            />
                                            <a onClick={() => togglePassword()} className="pwd-show">
                                                {isPassword ? (
                                                    <img src={see_password} alt="" />
                                                ) : (
                                                    <img src={hide_password} alt="" />
                                                )}
                                            </a>
                                        </div>
                                        {errors.includes("password") && (
                                            <p className="invalid__message text-danger">Please Enter Password</p>
                                        )}
                                    </div>
                                </div>
                                <div className="remember__and__forget__password__block px-3 px-sm-4 mt-2">
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
                                            <p>I agree to our <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a></p>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="px-3 px-sm-4">

                                    <button className="signin__button btn__primary__orange w-100 " onClick={() => onSignIn()}>SIGN IN</button>
                                </div>

                                <div className="or__block">
                                    <div className="or__text__block">
                                        <p className="or__text">OR</p>
                                    </div>
                                    <div className="mid__line"></div>
                                </div>
                                <div className="form px-3 px-sm-4 mt-2">
  
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
                                           Already have an account?{" "}
                                            <span

                                                className="footer__link__text "
                                            >
                                                Sign In
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
export default Mobile_Sign_Up;