import React, { useState, useEffect } from "react";
import * as services from './../../services/services'
import BreadCrumbs from "../BreadCrumbs";
import Heading3 from "../Font/Heading3";
import Heading6 from "../Font/Heading6";
import Heading7 from "../Font/Heading7";
import Heading4 from "../Font/Heading4";
import { emailValidator, isMobileNumber } from "../helpers/utils/validators";

import edit_black from "./../../assets/Icon/edit_black.svg";
import "./../../SCSS/Form/_personalInfoForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { customerUpdateProfileSuccess } from "../../services/customer/customer";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const T_REQ_FIRSTNAME = 'Firstname is required';
const T_REQ_LASTNAME = 'Lastname is required';
const T_REQ_EMAIL = 'Email is required';
const T_INVALID_EMAIL = 'Invalid email address (ex: example@gmail.com)';
const T_REQ_MOBILE_NUMBER = 'Mobile Number is required';
const T_INVALID_MOBILE_NUMBER = 'Invalid Mobile Number';
const T_REQ_USERNAME = 'Username is required';
const T_REQ_GENDER = 'Gender is required';

const genderList = [
  {
    label: "Male",
    value: "m",
    selectOption: 1
  },
  {
    label: "Female",
    value: "f",
    selectOption: 2
  },
  {
    label: "Other",
    value: "na",
    selectOption: 3
  }
]

function PersonalInfoForm() {

  const dispatch = useDispatch();

  const { customerUpdateProfileStatus, customerDetails, customerProfileDetails } = useSelector((state) => state.customerReducer);

  // const [personalData, setPersonalData] = useState({
  //   firstName: "anawab",
  //   lastName: "ali",
  //   gender: genderList.filter(val => val.selectOption === 1)[0].value,
  //   email: "anawabali@modern-electronics.com",
  //   mobileNumber: "966569858396",
  //   preferenceSettings: [],
  // });

  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    preferenceSettings: [],
  });

  const [errMsg, setErrMsg] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    preferenceSettings: []
  });

  const [flEditFeild, setFLEditFeild] = useState(false);
  const [emailEditFeild, setEmailEditFeild] = useState(false);
  const [mobileEditFeild, setMobileEditFeild] = useState(false);
  const [updateErrMsg, setUpdateErrMsg] = useState(false);


  useEffect(() => {
    if (customerUpdateProfileStatus === true) {
      setFLEditFeild(false);
      setEmailEditFeild(false);
      setMobileEditFeild(false);
      dispatch(customerUpdateProfileSuccess(''));
    }
  }, [customerUpdateProfileStatus]);

  useEffect(() => {
    if (updateErrMsg === true) {
      setErrMsg(errMsg);
      setUpdateErrMsg(!updateErrMsg)
    }
  }, [updateErrMsg]);

  useEffect(() => {
    dispatch(services.customerProfileDetails());
  }, []);

  useEffect(() => {
    if (customerProfileDetails !== "") {

      setPersonalData({
        ...personalData,
        firstName: customerProfileDetails.firstname,
        lastName: customerProfileDetails.lastname,
        gender: genderList.filter(val => val.selectOption === customerProfileDetails.gender)?.[0]?.value,
        email: customerProfileDetails.email,
        mobileNumber: customerProfileDetails.custom_attributes.mobile,
        // mobileNumber: "",
        preferenceSettings: []
      })
    }
  }, [customerProfileDetails]);

  // const handleChange = (event) => {
  //   let value = event.target.value;
  //   let name = event.target.name;
  //   let getErr = errors.filter((val, i) => val !== name);
  //   if (value) {
  //     if (name === "email") {
  //       let emailStatus = emailValidator(value);
  //       if (emailStatus === "error") {
  //         getErr.push("email_invalid");
  //         let tempErr = getErr.filter((val, i) => val !== "email");
  //         getErr = tempErr;
  //       } else {
  //         let tempErr = getErr.filter((val, i) => val !== "email_invalid");
  //         getErr = tempErr;
  //       }
  //     }
  //     if (name === "confirmPassword") {
  //       if (personalData.password) {
  //         if (personalData.confirmPassword !== personalData.password) {
  //           getErr.push("confirmPassword");
  //         }
  //       }
  //     }
  //     if (name === "preferences") {
  //       const selectedPreferences = [];
  //       const checkboxes = document.querySelectorAll(
  //         "input[type=checkbox]:checked"
  //       );
  //       for (var i = 0; i < checkboxes.length; i++) {
  //         selectedPreferences.push(checkboxes[i].value);
  //       }
  //       personalData.preferenceSettings = selectedPreferences;
  //     }
  //   } else {
  //     getErr.push(name);
  //   }
  //   setErrors(getErr);
  //   setPersonalData({ ...personalData, [name]: value });
  // };


  const validateForm = async (event, newErrObj, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'firstName':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_FIRSTNAME }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'lastName':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_LASTNAME }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'email':
        let emailStatus = emailValidator(value);
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_EMAIL }
        } else {
          if (emailStatus === "error") {
            newErrObj = { ...newErrObj, [name]: T_INVALID_EMAIL }
          } else {
            newErrObj = { ...newErrObj, [name]: '' }
          }
        }
        break;
      case 'gender':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_GENDER }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'mobileNumber':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_MOBILE_NUMBER }
        } else {
          let isValidNumber = isMobileNumber(value);
          if (isValidNumber === "error") {
            newErrObj = { ...newErrObj, [name]: T_INVALID_MOBILE_NUMBER }
          } else {
            newErrObj = { ...newErrObj, [name]: '' }
          }
        }
        break;
    }
    return newErrObj;
  }

  const handleChange = async (event, keyName, valData) => {
    let value = event;
    let name = event;
    if (keyName === "mobileNumber") {
      value = event
      name = 'mobileNumber'
    } else if (keyName === "gender") {
      value = valData.value
      name = 'gender'
    } else {
      value = event.target.value;
      name = event.target.name;
    }

    setPersonalData({ ...personalData, [name]: value });
    let manageErrMsg = await validateForm(event, errMsg, name, value);
    setErrMsg(manageErrMsg);
  };

  const allFeildValidate = (validateFeild, allErrMsg) => {

    let checkValueStatus = [];
    let checkErrStatus = [];

    validateFeild && validateFeild.map((val, i) => {
      let keyVal = personalData[val];
      let errVal = errMsg[val];

      let allErrMsgManage = validateForm('', allErrMsg, val, keyVal);
      allErrMsgManage.then(res => {
        allErrMsg[val] = res[val]
      });

      if (keyVal !== "") {
        checkValueStatus.push('suc')
      }
      if (errVal === "") {
        checkErrStatus.push('err')
      }

    })

    let checkProfileStatus = false;
    if (checkValueStatus.length === validateFeild.length && checkErrStatus.length === validateFeild.length) {
      checkProfileStatus = true;
    }

    let returnData = {
      allErrMsg: allErrMsg,
      checkProfileStatus: checkProfileStatus
    }

    return returnData;
  };

  const handleSubmit = async () => {

    let validateFeild = [
      "firstName",
      "lastName",
      "email",
      "mobileNumber",
      "gender"
    ];

    let formStatus = await allFeildValidate(validateFeild, errMsg);
    setErrMsg(formStatus.allErrMsg);
    setUpdateErrMsg(true);
    if (formStatus.checkProfileStatus === true) {
      let params = {
        firstName: personalData.firstName,
        lastName: personalData.lastName,
        gender: personalData.gender,
        mobile: personalData.mobileNumber
      }
      dispatch(services.customerUpdateProfile(params));
      // success
    } else {
      // error
    }
  }

  const handleCancel = () => {
    console.log(personalData);
  };

  return (

    <div className="inner__personal__block">
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
              disabled={!flEditFeild}
              onChange={(e) => handleChange(e)}
              autoFocus
            />
          </div>
          {errMsg.firstName && <p className="invalid__message">{errMsg.firstName}</p>}
        </div>
        <div className="main__form__field__block">
          {/* <p className="form__label">First Name</p> */}
          <Heading7 text="Last Name" marginBottom={10} />
          <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="lastName"
              name="lastName"
              value={personalData.lastName}
              disabled={!flEditFeild}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errMsg.lastName && <p className="invalid__message">{errMsg.lastName}</p>}
        </div>
        <div
          onClick={() =>
            setFLEditFeild(!flEditFeild)
          }
          className="form__edit__block"
        >
          <img src={edit_black} alt="" />
          <Heading6 text="Edit" marginLeft={5} />
        </div>
      </div>
      <Heading7 text="Your Gender" marginBottom={20} />
      <div className="profile__gender__block">
        {genderList && genderList.map((val, i) => {
          return (
            <>
              <input
                type="radio"
                className="delivery__input__check"
                name="gender"
                value={personalData.gender}
                checked={val.value === personalData.gender ? true : false}
                id="male"
                onChange={(e) => handleChange(e, 'gender', val)}
              />
              <label className="delivery__selection__text">{val.label}</label>
            </>
          )
        })}
        {/* <input
          type="radio"
          className="delivery__input__check"
          name="gender"
          value={personalData.gender}
          id="male"
          onChange={(e) => handleChange(e)}
        />
        <label className="delivery__selection__text">Male</label>
        <input
          type="radio"
          className="delivery__input__check"
          name="gender"
          value={personalData.gender}
          id="female"
          onChange={(e) => handleChange(e)}
        />
        <label className="delivery__selection__text">Female</label> */}
      </div>
      {errMsg.gender && <p className="invalid_err_message">{errMsg.gender}</p>}
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
              disabled={true}
              onChange={(e) => handleChange(e)}
              autoFocus
            />
          </div>
          {errMsg.email && <p className="invalid__message">{errMsg.email}</p>}
        </div>
        {/* <div
          onClick={() => setEmailEditFeild(!emailEditFeild)}
          className="form__edit__block"
        >
          <img src={edit_black} alt="" />
          <Heading6 text="Edit" marginLeft={5} />
        </div> */}
      </div>
      <div className="profile__mobile__block">
        <div className="main__form__field__block">
          {/* <p className="form__label">Mobile Number</p> */}
          <Heading7 text="Mobile Number" marginBottom={10} />
          <PhoneInput
            inputProps={{
              name: "mobileNumber",
              required: true,
              className: "profile__mobile__form__field"
            }}
            country="sa"
            onlyCountries={['sa']}
            masks={{ sa: '.. ... ....' }}
            countryCodeEditable={false}
            disableDropdown={true}
            id="mobileNumber"
            name="mobileNumber"
            value={personalData.mobileNumber}
            onChange={(e) => handleChange(e, 'mobileNumber')}
            className=""
            disabled={!mobileEditFeild}
          />
          {/* <div className="field__block">
            <input
              type="text"
              placeholder=""
              className="form__field"
              id="mobileNumber"
              name="mobileNumber"
              value={personalData.mobileNumber}
              disabled={currentEditField === "mobileNumber" ? false : true}
              onChange={(e) => handleChange(e)}
            />
          </div> */}
          {errMsg.mobileNumber && <p className="invalid__message">{errMsg.mobileNumber}</p>}
        </div>
        <div
          onClick={() => setMobileEditFeild(!mobileEditFeild)}
          className="form__edit__block"
        >
          <img src={edit_black} alt="" />
          <Heading6 text="Edit" marginLeft={5} />
        </div>
      </div>
      <div className="profile__preferences__block">
        <Heading3 text="Preferences Settings" marginBottom={10} />

        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Notification Preferences"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Notification Preferences</p>
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Order Notifications"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Order Notifications</p>
        </div>
        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Returns and Claims Notifications"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Returns and Claims Notifications</p>
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Listing Notifications"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Listing Notifications</p>
        </div>
        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Special Offers"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Special Offers</p>
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Newsletter Subscriptions"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Newsletter Subscriptions</p>
        </div>
        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Email Notifications"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Email Notifications</p>
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="Gift Cards Notifications"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">Gift Cards Notifications</p>
        </div>
        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="preferences"
            value="SMS & Text Messages"
            onChange={(e) => handleChange(e)}
          />
          <p className="preferences__select__text">SMS & Text Messages</p>
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
  );
}

export default PersonalInfoForm;
