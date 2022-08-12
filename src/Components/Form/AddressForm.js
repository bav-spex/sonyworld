import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading7 from "../Font/Heading7";
import Text4 from "../Font/Text4";
import Text5 from "../Font/Text5";
import "./../../SCSS/Form/_addressForm.scss";
import delete_box_white from "./../../assets/Icon/delete_box_white.svg";
import edit_box_white from "./../../assets/Icon/edit_box_white.svg";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import { emailValidator, isMobileNumber } from "../helpers/utils/validators";
import Heading3 from "../Font/Heading4";
import Heading2 from "../Font/Heading2";
import Text2 from "../Font/Text2";
import * as services from "./../../services/services";
import {
  loadCountriesLocationData,
  loadCitiesLocationData
} from "../../redux/appAction";
import AddressPopup from "../Popup/AddressPopup";
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
const T_REQ_DISTRICT = 'District is required';

function AddressForm({ handleAddressPopup }) {

  const dispatch = useDispatch();

  const [addressData, setAddressData] = useState([]);
  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const [addressPopup, setAddressPopup] = useState(false);
  const [addressPopupType, setAddressPopupType] = useState("update");
  const [editAddressData, setEditAddressData] = useState("");
  const [storeCitiesLocationData, setStoreCitiesLocationData] = useState([]);
  const [storeCountriesLocationData, setStoreCountriesLocationData] = useState([]);

  const countriesLocationData = useSelector(
    (state) => state.appData.countriesLocationData
  );
  const cityLocationData = useSelector(
    (state) => state.appData.cityLocationData
  );

  const { customerAddressList, customerAddUpdateManage } = useSelector(
    (state) => state.customerAddressReducer
  );

  const selectAddress = (addIndex, addId, add) => {
    setSelectedAddressID(addIndex);
  };

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
    landmark: true,
    addressType: "home",
    addressTypeTiming: ""
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
    primary: false,
    // landmark: "",
  });

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
      country: "",
      primary: false,
      landmark: true,
      addressType: "home",
      addressTypeTiming: ""
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
      primary: false,
    }
    setErrMsg(formErr)
  }

  useEffect(() => {
    // getAvailablePaymentMethods();
    dispatch(services.getCustomerAddressList());
    dispatch(loadCountriesLocationData());
    dispatch(loadCitiesLocationData());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (customerAddUpdateManage) {
      if (customerAddUpdateManage.success === true) {
        resetFormValue();
        resetFormErr();
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
          value: val.cityCode,
          label: val.cityCode,
          id: val.id
        }
        cityList.push(cityData);
      })
      setStoreCitiesLocationData(cityList);
    }
  }, [cityLocationData]);

  const openNewAddressPopup = (popupType, addIndex, addId, add) => {
    setAddressPopup(true);
    setAddressPopupType(popupType);
    setSelectedAddressID(addIndex);
    setEditAddressData(add);
  };

  const closeLoginPopup = () => {
    if (document.querySelector(".address__popup__container")) {
      // reloadingHeader()
      const element = document.querySelector(".address__popup__container");
      element.classList.remove("address__popup__container");
      element.classList.add("address__popup__container__disable");
    }
    setAddressPopup(false);
  };

  const deleteAddress = (deleteId) => {
    let params = {
      addressId: deleteId,
    };
    dispatch(services.deleteCustomerAddress(params));
  };

  useEffect(() => {
    if (customerAddressList) {
      let updateAddressData = [];
      customerAddressList &&
        customerAddressList.map((val, i) => {
          let addreDetails = {
            id: val.id,
            isDefault: val.primary,
            userName: `${val.firstname} ${val.lastname}`,
            adddress: `${val.street[0]} ${val.street[1]} ${val.city} ${val.postcode !== undefined ? val.postcode : ""} ${val.country_id}`,
            contact: val.telephone,
            details: val,
          };
          updateAddressData.push(addreDetails);
          if (val.primary === true) {
            setSelectedAddressID(i);
          }
        });
      setAddressData(updateAddressData);
    }
  }, [customerAddressList]);

  const getLatestDistrictList = (cityName) => {
    return cityLocationData.filter((val, i) => val.cityCode === cityName)?.[0]?.districts
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
          newErrObj = { ...newErrObj, [name]: T_REQ_CITY_TOWN, state: "" }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'state':
        let getDistrictList = getLatestDistrictList(address.city);
        if (value === "" && address.city !== "" && getDistrictList.length !== 0) {
          newErrObj = { ...newErrObj, [name]: T_REQ_DISTRICT }
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
      // case 'postCode':
      //   if (value === "") {
      //     newErrObj = { ...newErrObj, [name]: T_REQ_POST_CODE }
      //   } else {
      //     newErrObj = { ...newErrObj, [name]: '' }
      //   }
      //   break;
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
      name = 'primary';
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
      // "postCode",
      // "landmark",
    ];

    let getDistrictList = getLatestDistrictList(address.city);
    if (getDistrictList.length > 0) {
      validateFeild.push('state');
    }

    let formStatus = allFeildValidate(validateFeild, errMsg);
    setErrMsg(formStatus.allErrMsg);

    let distDataManage = "";
    if (getDistrictList.length > 0 && address.state !== "") {
      distDataManage = address.state
    }

    if (formStatus.checkSignUpStatus === true) {

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
        postCode: distDataManage,
        regionId: 0,
      }
      dispatch(services.createCustomerAddress(params));

    }
  }


  return (
    <>
      <div
        className={
          addressPopup
            ? "container-fluid address__popup__container"
            : "container-fluid address__popup__container__disable"
        }
      >
        {addressPopup === true && (
          <AddressPopup
            closeLoginPopup={closeLoginPopup}
            editAddressData={editAddressData}
            popupType={addressPopupType}
          />
        )}
      </div>
      <div className="row address__select__block">
        {addressData.map((add, addIndex) => {
          return (
            <div key={add.id} className="col-12 col-sm-4 address__block">
              <div
                className={
                  selectedAddressId === addIndex
                    ? "selected__address__inner__block"
                    : "address__inner__block"
                }
                onClick={() => selectAddress(addIndex, add.id, add)}
              >
                {add.isDefault ? (
                  <div className="address__title__block">
                    <div className="address__tag">
                      <Heading7 text="DEFAULT" span={true} />
                    </div>
                    <div className="inner__address__button__block">
                      <button
                        // onClick={() => handleAddressPopup(true)}
                        onClick={() =>
                          openNewAddressPopup(
                            "update",
                            addIndex,
                            add.id,
                            add
                          )
                        }
                        className="edit__button"
                      >
                        <img src={edit_box_white} alt="edit" />
                      </button>
                      <button className="delete__button"
                        onClick={() => deleteAddress(add.id)}
                      >
                        <img src={delete_box_white} alt="delete" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="address__title__block">
                    <div className="white__address__tag">
                      <Text5 text="NONE" span={true} color="#ffffff" />
                    </div>
                    <div className="inner__address__button__block">
                      <button
                        // onClick={() => handleAddressPopup(true)}
                        onClick={() =>
                          openNewAddressPopup(
                            "update",
                            addIndex,
                            add.id,
                            add
                          )
                        }
                        className="edit__button"
                      >
                        <img src={edit_box_white} alt="edit" />
                      </button>
                      <button
                        className="delete__button"
                        onClick={() => deleteAddress(add.id)}
                      >
                        <img src={delete_box_white} alt="delete" />
                      </button>
                    </div>
                  </div>
                )}
                <Heading7 text={add.userName} />
                <p className="full__address">
                  <Text4 text={add.adddress} marginBottom={20} />
                </p>
                <Text4 text={add.contact} marginLeft={0} span={true} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="newAddress__block">
        <div className="newAddress__title__block">
          <Heading3 text="Add New Address" color="#000000" />
        </div>

        <div className="row newAddress__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
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
        <div className="row newAddress__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
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
                className: "profile__mobile__form__field"
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
            {/* <p className="form__label">Mobile Number</p> */}
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
        <div className="row newAddress__form__field__row">
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
        <div className="row newAddress__form__field__row">
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
          {/* <div className="col-sm-12 col-md-6 main__form__field__block">
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
          </div> */}
          {getLatestDistrictList(address.city) && getLatestDistrictList(address.city).length > 0 &&
            <div className="col-sm-12 col-md-6 main__form__field__block">
              <Heading7 text="District" marginBottom={10} />
              <select
                name="state"
                value={address.state}
                onChange={(e) => handleChange(e)}
                className="_customselect form-control"
              >
                <option key='' value=''>Select District</option>
                {getLatestDistrictList(address.city) && getLatestDistrictList(address.city).map(({ label, code }) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              {errMsg.state && <p className="invalid__message">{errMsg.state}</p>}
            </div>
          }
        </div>
        {/* <div className="row newAddress__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
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
        </div> */}
        <div className="row newAddress__form__field__row">
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
          </div>
        </div>
        <Heading7 text="Address Type" marginBottom={20} marginLeft={14} />
        <div className="addressType__block">
          <input
            type="radio"
            className="delivery__input__check"
            name="addressType"
            defaultChecked={address.addressType === "home" ? true : false}
            value={address.addressType}
            id="home"
            onChange={handleChange}
          />
          <label className="delivery__selection__text">Home</label>
          <input
            type="radio"
            className="delivery__input__check"
            name="addressType"
            defaultChecked={address.addressType === "work" ? true : false}
            value={address.addressType}
            id="work"
            onChange={handleChange}
          />
          <label className="delivery__selection__text">Work</label>
        </div>
        <div className="preferences__select__block">
          <input
            type="checkbox"
            className="preferences__select__input__check"
            name="primary"
            value={address.primary}
            checked={address.primary}
            onChange={(e) => handleChange(e, 'primary')}
          />
          <p className="preferences__select__text">
            Make this my default address
          </p>
        </div>
        <Heading2 text="Delivery Time Preferences" marginLeft={12} />
        <Text2 text="Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned." marginLeft={12} marginBottom={10} />
        <div className="row newAddress__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="AddressType" marginBottom={20} />
            <div className="field__block">
              <input
                type="time"
                placeholder=""
                className="form__field"
                id="landmark"
                name="addressTypeTiming"
                value={address.addressTypeTiming}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="newAddress__form__button__block">
          <button className="form__save__button" onClick={handleSubmit}>
            SAVE
          </button>
          <button className="form__cancel__button" onClick={closeLoginPopup}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
}

export default AddressForm;
