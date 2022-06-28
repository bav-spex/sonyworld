import React from "react";
import { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Heading3 from "../Components/Font/Heading3";
import Heading6 from "../Components/Font/Heading6";
import Heading7 from "../Components/Font/Heading7";
import Heading4 from "../Components/Font/Heading4";
import { emailValidator } from "../Components/helpers/utils/validators";

import edit_black from "./../assets/Icon/edit_black.svg";
import "./../SCSS/_myProfilePage.scss";
function My_Profile_Page() {
  const [tab, setTab] = useState("personal");
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    preferenceSettings: [],
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
        if (personalData.password) {
          if (personalData.confirmPassword !== personalData.password) {
            getErr.push("confirmPassword");
          }
        }
      }
      if (name === "preferences") {
        const selectedPreferences = [];
        const checkboxes = document.querySelectorAll(
          "input[type=checkbox]:checked"
        );
        for (var i = 0; i < checkboxes.length; i++) {
          selectedPreferences.push(checkboxes[i].value);
        }
        personalData.preferenceSettings = selectedPreferences;
      }
    } else {
      getErr.push(name);
    }
    setErrors(getErr);
    setPersonalData({ ...personalData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(personalData);
  };
  const handleCancel = () => {
    console.log(personalData);
  };
  const [errors, setErrors] = useState([]);
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const togglePassword = () => setIsPassword(!isPassword);
  const toggleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);

  const [currentEditField, setCurrentEditField] = useState("");
  const handleCurrentEditField = (currentField, focusField) => {
    console.log("firstLast");
    setCurrentEditField(currentField);
    // console.log(document.getElementById(`${focusField}`));
    // document.getElementById(`${focusField}`).focus()
  };
  return (
    <>
      <BreadCrumbs title="My Account" subTitle="My Profile" />
      <div className="container-fluid profile__page__container ">
        <div className="profile__page__block">
          <div className="profile__page__title__block">
            <Heading3 text="My Wishlist" />
          </div>
          <div className="profile__page__content__block">
            <div className="profile__tab__button__block">
              <button
                className={
                  tab === "personal"
                    ? "profile__page__button__active"
                    : "profile__page__button"
                }
                onClick={() => setTab("personal")}
              >
                Personal Info
              </button>
              <button
                className={
                  tab === "address"
                    ? "profile__page__button__active"
                    : "profile__page__button"
                }
                onClick={() => setTab("address")}
              >
                Addresses
              </button>
              <button
                className={
                  tab === "password"
                    ? "profile__page__button__active"
                    : "profile__page__button"
                }
                onClick={() => setTab("password")}
              >
                Change Password
              </button>
            </div>
            <div
              className={
                tab === "personal"
                  ? "personal__block"
                  : "personal__block__disable"
              }
            >
              <div className="profile__firstname__lastname">
                <div className="main__form__field__block" id="firstName__block">
                  {/* <p className="form__label">First Name</p> */}
                  <Heading7 text="First Name" marginBottom={10} />
                  <div className="field__block">
                    <input
                      type="text"
                      placeholder=""
                      className="form__field"
                      id="firstName"
                      name="firstName"
                      value={personalData.firstName}
                      disabled={currentEditField === "firstLast" ? false : true}
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>
                  {errors.includes("firstName") && (
                    <p className="invalid__message">invalid firstName</p>
                  )}
                </div>
                <div className="main__form__field__block">
                  {/* <p className="form__label">First Name</p> */}
                  <Heading7 text="Last Name" marginBottom={10} />
                  <div className="field__block">
                    <input
                      type="text"
                      placeholder=""
                      className="form__field"
                      id="lastname"
                      name="lastname"
                      value={personalData.lastname}
                      disabled={currentEditField === "firstLast" ? false : true}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.includes("lastname") && (
                    <p className="invalid__message">invalid lastname</p>
                  )}
                </div>
                <div
                  onClick={() =>
                    handleCurrentEditField("firstLast", "firstName__block")
                  }
                  className="form__edit__block"
                >
                  <img src={edit_black} alt="" />
                  <Heading6 text="Edit" marginLeft={5} />
                </div>
              </div>
              <Heading7 text="Your Gender" marginBottom={20} />
              <div className="profile__gender__block">
                <input
                  type="radio"
                  className="delivery__input__check"
                  name="gender"
                  value={personalData.gender}
                  id="male"
                  onChange={handleChange}
                />
                <label className="delivery__selection__text">Male</label>
                <input
                  type="radio"
                  className="delivery__input__check"
                  name="gender"
                  value={personalData.gender}
                  id="female"
                  onChange={handleChange}
                />
                <label className="delivery__selection__text">Female</label>
              </div>

              <div className="profile__email__block">
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
                      value={personalData.email}
                      disabled={currentEditField === "email" ? false : true}
                      onChange={(e) => handleChange(e)}
                      autoFocus
                    />
                  </div>
                  {errors.includes("email") && (
                    <span className="invalid__message">invalid email</span>
                  )}
                  {errors.includes("email_invalid") && (
                    <span className="invalid__message">invalid type email</span>
                  )}
                </div>
                <div
                  onClick={() => handleCurrentEditField("email", "email")}
                  className="form__edit__block"
                >
                  <img src={edit_black} alt="" />
                  <Heading6 text="Edit" marginLeft={5} />
                </div>
              </div>
              <div className="profile__mobile__block">
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
                      value={personalData.mobileNumber}
                      disabled={
                        currentEditField === "mobileNumber" ? false : true
                      }
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {errors.includes("mobileNumber") && (
                    <p className="invalid__message">mobile Number</p>
                  )}
                </div>
                <div
                  onClick={() =>
                    handleCurrentEditField("mobileNumber", "mobileNumber")
                  }
                  className="form__edit__block"
                >
                  <img src={edit_black} alt="" />
                  <Heading6 text="Edit" marginLeft={5} />
                </div>
              </div>
              <div className="profile__preferences__block">
                <Heading3 text="Preferences Settings" marginBottom={10} />

                <div className="pd__compare__block">
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Notification Preferences"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Notification Preferences</p>
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Order Notifications"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Order Notifications</p>
                </div>
                <div className="pd__compare__block">
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Returns and Claims Notifications"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">
                    Returns and Claims Notifications
                  </p>
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Listing Notifications"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Listing Notifications</p>
                </div>
                <div className="pd__compare__block">
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Special Offers"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Special Offers</p>
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Newsletter Subscriptions"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Newsletter Subscriptions</p>
                </div>
                <div className="pd__compare__block">
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Email Notifications"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Email Notifications</p>
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="Gift Cards Notifications"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">Gift Cards Notifications</p>
                </div>
                <div className="pd__compare__block">
                  <input
                    type="checkbox"
                    className="pd__compare__input__check"
                    name="preferences"
                    value="SMS & Text Messages"
                    onChange={handleChange}
                  />
                  <p className="pd__compare__text">SMS & Text Messages</p>
                </div>
              </div>
              <div className="profile__form__button__block">
                <button className="form__save__button" onClick={handleSubmit}>
                  SAVE
                </button>
                <button className="form__cancel__button" onClick={handleCancel}>
                  CANCEL
                </button>
              </div>
            </div>
            <div
              className={
                tab === "address" ? "address__block" : "address__block__disable"
              }
            >
              <h1>Address</h1>
            </div>
            <div
              className={
                tab === "password"
                  ? "password__block"
                  : "password__block__disable"
              }
            >
              <h1>Change Password</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default My_Profile_Page;
