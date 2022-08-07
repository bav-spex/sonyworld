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
import { Link,useNavigate } from "react-router-dom";
import { emailValidator } from "../../Components/helpers/utils/validators";

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

function Mobile_Sign_Up({ }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { customerSignUpMsg } = useSelector(
        (state) => state.customerReducer
    );

    const [isPassword, setIsPassword] = useState(true);
    const [isCheckBoxHover, setIsCheckBoxHover] = useState(false);
    const [isCheckBox, setIsCheckBox] = useState(false);
    const handleFavourite = () => {
        setIsCheckBox(!isCheckBox);
    };

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
        confirmPassword: ""
    });

    useEffect(() => {
        if (customerSignUpMsg === true) {
            navigate('/');
        }
    }, [customerSignUpMsg]);

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
                defaultMsg: T_REQ_MOBILE_NUMBER
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
        if (checkValueStatus.length === validateFeild.length && checkErrStatus.length === validateFeild.length) {
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
                                            id="firstName"
                                            name="firstName"
                                            value={data.firstName}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {errMsg.firstName && (
                                            <p className="invalid__message text-danger">{errMsg.firstName}</p>
                                        )}
                                    </div>

                                    <div className="field__block mb-3">
                                        <Heading7 text="Last Name" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={data.lastName}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {errMsg.lastName && (
                                            <p className="invalid__message text-danger">{errMsg.lastName}</p>
                                        )}
                                    </div>

                                    <div className="field__block mb-3">
                                        <Heading7 text="Email Address" marginBottom={10} />
                                        <input
                                            type="email"
                                            placeholder=""
                                            className="form__field form-control"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {errMsg.email && (
                                            <p className="invalid__message text-danger">{errMsg.email}</p>
                                        )}
                                    </div>

                                    <div className="field__block mb-3">
                                        <Heading7 text="Mobile Number" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            value={data.mobileNumber}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {errMsg.mobileNumber && (
                                            <p className="invalid__message text-danger">{errMsg.mobileNumber}</p>
                                        )}
                                    </div>

                                    <div className="field__block mb-3">
                                        <Heading7 text="Username" marginBottom={10} />
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form__field form-control"
                                            id="username"
                                            name="username"
                                            value={data.username}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {errMsg.username && (
                                            <p className="invalid__message text-danger">{errMsg.username}</p>
                                        )}
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
                                            {errMsg.password && (
                                                <p className="invalid__message text-danger">{errMsg.password}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="main__form__field__block  pwd-field">
                                        {/* <p className="form__label">Password</p> */}
                                        <Heading7 text="Confirm Password" marginBottom={10} />
                                        <div className="field__block">
                                            <input
                                                type={isPassword ? "password" : "text"}
                                                placeholder=""
                                                className="form__field form-control"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={data.confirmPassword}
                                                onChange={(e) => handleChange(e)}
                                            />
                                            <a onClick={() => togglePassword()} className="pwd-show">
                                                {isPassword ? (
                                                    <img src={see_password} alt="" />
                                                ) : (
                                                    <img src={hide_password} alt="" />
                                                )}
                                            </a>
                                            {errMsg.confirmPassword && (
                                                <p className="invalid__message text-danger">{errMsg.confirmPassword}</p>
                                            )}
                                        </div>
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

                                    <button className="signin__button btn__primary__orange w-100 " onClick={() => onSignUp()}>SIGN UP</button>
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