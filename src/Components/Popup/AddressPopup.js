import React, { useState, useEffect } from "react";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";
import { emailValidator } from "../helpers/utils/validators";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import "./../../SCSS/Popup/_addressPopup.scss";
import * as services from './../../services/services'
import { useDispatch, useSelector } from 'react-redux';

const T_REQ_NAME = 'Name is required';
const T_REQ_MOBILE_NUMBER = 'Mobile Number is required';
const T_REQ_ADDRESS_LINE_1 = 'Address Line 1 is required';
const T_REQ_ADDRESS_LINE_2 = 'Address Line 2 is required';
const T_REQ_CITY_TOWN = 'City/Town is required';
const T_REQ_STATE = 'State is required';
const T_REQ_LANDMARK = 'Landmark is required';

function AddressPopup({ closeLoginPopup }) {

  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    name: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    landmark: "",
  });

  const [errMsg, setErrMsg] = useState({
    name: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    landmark: "",
  });

  const validateForm = (event, newErrObj, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'name':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_NAME }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'mobileNumber':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_MOBILE_NUMBER }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'addressLine1':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_ADDRESS_LINE_1 }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'addressLine2':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_ADDRESS_LINE_2 }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'city':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_CITY_TOWN }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'state':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_STATE }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'landmark':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_LANDMARK }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      default:
        break;
    }
    return newErrObj;
  }

  const handleChange = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    let manageErrMsg = validateForm(event, errMsg, name, value);
    setErrMsg(manageErrMsg);
    setAddress({ ...address, [name]: value });
  };

  const allFeildValidate = (validateFeild, allErrMsg) => {

    let checkValueStatus = [];
    let checkErrStatus = [];

    validateFeild && validateFeild.map((val, i) => {
      let keyVal = address[val];
      let errVal = errMsg[val];

      allErrMsg = validateForm('', allErrMsg, val, keyVal);
      if (keyVal !== "") {
        checkValueStatus.push('suc')
      }
      if (errVal === "") {
        checkErrStatus.push('err')
      }

    })

    let checkSignUpStatus = false;
    if (checkValueStatus.length === checkErrStatus.length) {
      checkSignUpStatus = true;
    }

    let returnData = {
      allErrMsg: allErrMsg,
      checkSignUpStatus: checkSignUpStatus
    }

    return returnData;
  };

  const handleSubmit = () => {

    let validateFeild = [
      "name",
      "mobileNumber",
      "addressLine1",
      "addressLine2",
      "city",
      "state",
      "landmark",
    ];

    let formStatus = allFeildValidate(validateFeild, errMsg);
    setErrMsg(formStatus.allErrMsg);

    if (formStatus.checkSignUpStatus === true) {
      let params = {
        firstName: address.name,
        lastName: address.name,
        addressLine1: address.addressLine1,
        addressLine2: address.addressLine2,
        city: address.city,
        telephone: address.mobileNumber,
        primary: true,
        // countryId: "US",
        // postCode: 0,
        // regionId: 0,
      }
      dispatch(services.createCustomerAddress(params));
    }
  }

  const handleCancel = () => {
    console.log(address);
  }
  const [errors, setErrors] = useState([]);
  return (
    <div className="address__popup__block">
      <div className="address__title__block">
        <Heading3 text="Add New Address" color="#000000" />
        <img
          onClick={() => closeLoginPopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="address__content__block">
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="Name" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="name"
                name="name"
                value={address.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.name && <p className="invalid__message">{errMsg.name}</p>}
          </div>
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">Mobile Number</p> */}
            <Heading7 text="Mobile Number" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="mobileNumber"
                name="mobileNumber"
                value={address.mobileNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.mobileNumber && <p className="invalid__message">{errMsg.mobileNumber}</p>}
          </div>
        </div>
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="Address Line 1" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="addressLine1"
                name="addressLine1"
                value={address.addressLine1}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.addressLine1 && <p className="invalid__message">{errMsg.addressLine1}</p>}
          </div>
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">Mobile Number</p> */}
            <Heading7 text="Address Line 2" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="addressLine2"
                name="addressLine2"
                value={address.addressLine2}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.addressLine2 && <p className="invalid__message">{errMsg.addressLine2}</p>}
          </div>
        </div>
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="City/Town" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="city"
                name="city"
                value={address.city}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.city && <p className="invalid__message">{errMsg.city}</p>}
          </div>
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">Mobile Number</p> */}
            <Heading7 text="State" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="State"
                name="state"
                value={address.State}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.state && <p className="invalid__message">{errMsg.state}</p>}
          </div>
        </div>
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="Landmark" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="landmark"
                name="landmark"
                value={address.landmark}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.landmark && <p className="invalid__message">{errMsg.landmark}</p>}
          </div>
        </div>
        <div className="address__form__button__block">
          <button className="form__save__button" onClick={() => handleSubmit()}>
            SAVE
          </button>
          <button className="form__cancel__button" onClick={closeLoginPopup}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressPopup;
