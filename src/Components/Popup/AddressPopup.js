import React, { useState, useEffect } from "react";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";
import { emailValidator, isMobileNumber } from "../helpers/utils/validators";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import "./../../SCSS/Popup/_addressPopup.scss";
import * as services from './../../services/services'
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerAddressSuccess } from "../../services/customerAddress/customerAddress";
import PhoneInput from 'react-phone-input-2';

const T_REQ_NAME = 'Name is required';
const T_REQ_FIRST_NAME = 'First Name is required';
const T_REQ_LAST_NAME = 'Last Name is required';
const T_REQ_COUNTRY = 'Country is required';
const T_REQ_MOBILE_NUMBER = 'Mobile Number is required';
const T_REQ_ADDRESS_LINE_1 = 'Address Line 1 is required';
const T_REQ_ADDRESS_LINE_2 = 'Address Line 2 is required';
const T_REQ_CITY_TOWN = 'City/Town is required';
const T_REQ_STATE = 'State is required';
const T_REQ_LANDMARK = 'Landmark is required';
const T_REQ_POST_CODE = 'Post Code is required';
const T_INVALID_MOBILE_NUMBER = 'Invalid Mobile Number';

function AddressPopup({ closeLoginPopup, editAddressData, popupType }) {

  const dispatch = useDispatch();

  const countriesLocationData = useSelector(
    (state) => state.appData.countriesLocationData
  );
  const cityLocationData = useSelector(
    (state) => state.appData.cityLocationData
  );

  const { customerAddressList, customerAddUpdateManage } = useSelector(
    (state) => state.customerAddressReducer
  );

  const [storeCitiesLocationData, setStoreCitiesLocationData] = useState([]);
  const [storeCountriesLocationData, setStoreCountriesLocationData] = useState([]);
  const [editId, setEditId] = useState('');

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
    primary: false,
    // landmark: "",
  });

  const [errMsg, setErrMsg] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
    // landmark: "",
  });

  useEffect(() => {
    if (popupType === 'add') {
      resetFormValue();
      resetFormErr();
    }
    if (popupType === 'update') {
      resetFormErr();
    }
  }, [popupType]);

  useEffect(() => {
    if (customerAddUpdateManage) {
      if (customerAddUpdateManage.success === true) {
        resetFormValue();
        resetFormErr();
        closeLoginPopup();
        dispatch(updateCustomerAddressSuccess(''))
      }
    }
  }, [customerAddUpdateManage]);

  useEffect(() => {
    if (countriesLocationData) {
      let countryList = [];
      countriesLocationData && countriesLocationData.map((val, i) => {
        let countryData = {
          id: val.id,
          label: val.full_name_english
        }
        countryList.push(countryData);
      })
      setStoreCountriesLocationData(countryList);
    }
  }, [countriesLocationData]);

  useEffect(() => {
    if (cityLocationData) {
      let cityList = [];
      cityLocationData && cityLocationData.map((val, i) => {
        let cityData = {
          value: val.id,
          label: val.cityName
        }
        cityList.push(cityData);
      })
      setStoreCitiesLocationData(cityList);
    }
  }, [cityLocationData]);

  useEffect(() => {
    if (editAddressData && popupType === 'update') {
      let editData = {
        firstName: editAddressData.details.firstname,
        lastName: editAddressData.details.lastname,
        mobileNumber: editAddressData.details.telephone,
        addressLine1: editAddressData.details.street?.[0],
        addressLine2: editAddressData.details.street?.[1],
        city: editAddressData.details.city,
        state: '',
        postCode: editAddressData.details.postcode,
        primary: editAddressData.details.primary,
      }

      setAddress(editData);
      setEditId(editAddressData.details.id)
    }
  }, [editAddressData]);

  const resetFormValue = () => {
    let formValue = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postCode: "",
      country: "SA",
      primary: false,
    }
    setAddress(formValue);
  }

  const resetFormErr = () => {
    let formErr = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postCode: "",
      country: "",
    }
    setErrMsg(formErr)
  }

  const validateForm = (event, newErrObj, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'firstName':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_FIRST_NAME }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'lastName':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_LAST_NAME }
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
      // case 'country':
      //   if (value === "") {
      //     newErrObj = { ...newErrObj, [name]: T_REQ_COUNTRY }
      //   } else {
      //     newErrObj = { ...newErrObj, [name]: '' }
      //   }
      //   break;
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
      // case 'state':
      //   if (value === "") {
      //     newErrObj = { ...newErrObj, [name]: T_REQ_STATE }
      //   } else {
      //     newErrObj = { ...newErrObj, [name]: '' }
      //   }
      //   break;
      case 'postCode':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_POST_CODE }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      // case 'landmark':
      //   if (value === "") {
      //     newErrObj = { ...newErrObj, [name]: T_REQ_LANDMARK }
      //   } else {
      //     newErrObj = { ...newErrObj, [name]: '' }
      //   }
      //   break;
      default:
        break;
    }
    return newErrObj;
  }

  const handleChange = async (event, keyName) => {
    let value = event;
    let name = event;
    if (keyName === 'primary') {
      value = event.target.checked;
    } else if (keyName === 'mobileNumber') {
      value = event
      name = 'mobileNumber'
    } else {
      value = event.target.value;
      name = event.target.name;
    }
    setAddress({ ...address, [name]: value });
    let manageErrMsg = validateForm(event, errMsg, name, value);
    setErrMsg(manageErrMsg);
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
      "firstName",
      "lastName",
      "mobileNumber",
      "addressLine1",
      "addressLine2",
      "city",
      // "state",
      // "country",
      "postCode",
      // "landmark",
    ];

    let formStatus = allFeildValidate(validateFeild, errMsg);
    setErrMsg(formStatus.allErrMsg);

    if (formStatus.checkSignUpStatus === true) {

      if (editId !== "" && popupType === "update") {

        let params = {
          addressId: popupType === "update" ? editId : "",
          firstName: address.firstName,
          lastName: address.lastName,
          addressLine1: address.addressLine1,
          addressLine2: address.addressLine2,
          city: address.city,
          telephone: address.mobileNumber,
          primary: address.primary,
          // countryId: address.country ? address.country : "SA",
          countryId: "SA",
          postCode: address.postCode,
          regionId: 0,
        }
        dispatch(services.updateCustomerAddress(params));

      } else {

        let params = {
          firstName: address.firstName,
          lastName: address.lastName,
          addressLine1: address.addressLine1,
          addressLine2: address.addressLine2,
          city: address.city,
          telephone: address.mobileNumber,
          primary: address.primary,
          // countryId: address.country ? address.country : "SA",
          countryId: "SA",
          postCode: address.postCode,
          regionId: 0,
        }
        console.log("params ", params);
        dispatch(services.createCustomerAddress(params));

      }
    }
  }

  const handleCancel = () => {
    console.log(address);
  }

  const handleClosePopup = () => {
    closeLoginPopup();
    resetFormValue();
    resetFormErr();
  }

  const [errors, setErrors] = useState([]);
  return (
    <div className="address__popup__block">
      <div className="address__title__block">
        <Heading3 text={popupType === 'add' ? "Add New Address" : "Update Address"} color="#000000" />
        <img
          onClick={() => handleClosePopup()}
          src={cancel_grey}
          alt="cancel"
          className="cancel__button"
        />
      </div>
      <div className="address__content__block">
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="First Name" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="name"
                name="firstName"
                value={address.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.firstName && <p className="invalid__message">{errMsg.firstName}</p>}
          </div>
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">Mobile Number</p> */}
            <Heading7 text="Last Name" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="lastName"
                name="lastName"
                value={address.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.lastName && <p className="invalid__message">{errMsg.lastName}</p>}
          </div>
        </div>
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">Mobile Number</p> */}
            <Heading7 text="Mobile Number" marginBottom={10} />
            {/* <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="mobileNumber"
                name="mobileNumber"
                value={address.mobileNumber}
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            <PhoneInput
              inputProps={{
                name: "mobileNumber",
                required: true,
                 className:"profile__mobile__form__field"
              }}
              country="sa"
              onlyCountries={['sa']}
              masks={{ sa: '.. ... ....' }}
              countryCodeEditable={false}
              disableDropdown={true}
              value={address.mobileNumber}
              onChange={(e) => handleChange(e, 'mobileNumber')}
              className=""
            />
            {errMsg.mobileNumber && <p className="invalid__message">{errMsg.mobileNumber}</p>}
          </div>
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="Country" marginBottom={10} />
            <select
              name="country"
              onChange={(e) => handleChange(e)}
              value={address.country}
              className="_customselect form-control"
              disabled={true}
            >
              {/* <option key='no' value=''>Select Country</option> */}
              {storeCountriesLocationData && storeCountriesLocationData.map((val, i) => {
                return (
                  <>
                    <option key={val.id} value={val.id}>
                      {val.label}
                    </option>
                  </>
                )
              })}
            </select>
            {errMsg.country && <p className="invalid__message">{errMsg.country}</p>}
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
            {/* <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="city"
                name="city"
                value={address.city}
                onChange={(e) => handleChange(e)}
              />
            </div> */}
            <select
              name="city"
              onChange={(e) => handleChange(e)}
              value={address.city}
              className="_customselect form-control"
            >
              <option key='no' value=''>Select City/Town</option>
              {storeCitiesLocationData && storeCitiesLocationData.map(({ label, value }) => (
                <option key={value} value={label}>
                  {label}
                </option>
              ))}
            </select>
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
                value={address.state}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* {errMsg.state && <p className="invalid__message">{errMsg.state}</p>} */}
          </div>
        </div>
        <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="Post Code" marginBottom={10} />
            <div className="field__block">
              <input
                type="text"
                placeholder=""
                className="form__field"
                id="postCode"
                name="postCode"
                value={address.postCode}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errMsg.postCode && <p className="invalid__message">{errMsg.postCode}</p>}
          </div>
        </div>
        <div class="form-check form-switch">
          <input
            type="checkbox"
            name="primary"
            value={address.primary}
            checked={address.primary}
            onChange={(e) => handleChange(e, 'primary')}
            class="form-check-input"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <Heading7 text="Default Address" marginBottom={10} />
        </div>
        {/* <div className="row address__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
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
        </div> */}
        <div className="address__form__button__block">
          <button className="form__save__button" onClick={() => handleSubmit()}>
            SAVE
          </button>
          <button className="form__cancel__button" onClick={handleClosePopup}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressPopup;
