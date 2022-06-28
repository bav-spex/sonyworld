import React, { useState } from "react";
import Heading7 from "../Font/Heading7";
import Text4 from "../Font/Text4";
import Text5 from "../Font/Text5";
import "./../../SCSS/Form/_addressForm.scss";

import delete_box_white from "./../../assets/Icon/delete_box_white.svg";
import edit_box_white from "./../../assets/Icon/edit_box_white.svg";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import { emailValidator } from "../helpers/utils/validators";
import Heading3 from "../Font/Heading4";
import Heading2 from "../Font/Heading2";
import Text2 from "../Font/Text2";
function AddressForm({ addressData, handleAddressPopup, closeLoginPopup }) {
  const [selectedAddressId, setSelectedAddressID] = useState(0);
  const selectAddress = (addIndex, addId, add) => {
    setSelectedAddressID(addIndex);
    console.log(addId, add);
  };
  const [address, setAddress] = useState({
    name: "",
    mobileNumber: "",
    addressLine1: "",
    addtessLine2: "",
    city: "",
    state: "",
    landmark: true,
    addressType: "home",
    defaultAddress: true,
    addressTypeTiming:""
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
    } else {
      getErr.push(name);
    }
    setErrors(getErr);
    setAddress({ ...address, [name]: value });
  };
  const handleSubmit = () => {
    console.log(address);
    closeLoginPopup();
  };
  const handleCancel = () => {
    console.log(address);
  };
  const [errors, setErrors] = useState([]);
  return (
    <>
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
                        onClick={() => handleAddressPopup(true)}
                        className="edit__button"
                      >
                        <img src={edit_box_white} alt="edit" />
                      </button>
                      <button className="delete__button">
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
                        onClick={() => handleAddressPopup(true)}
                        className="edit__button"
                      >
                        <img src={edit_box_white} alt="edit" />
                      </button>
                      <button className="delete__button">
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
            {errors.includes("name") && (
              <p className="invalid__message">invalid name</p>
            )}
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
            {errors.includes("mobileNumber") && <p>mobile Number</p>}
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
            {errors.includes("addressLine1") && (
              <p className="invalid__message">invalid addressLine1</p>
            )}
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
            {errors.includes("addressLine2") && (
              <p className="invalid__message">mobile Number</p>
            )}
          </div>
        </div>
        <div className="row newAddress__form__field__row">
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
            {errors.includes("city") && (
              <p className="invalid__message">invalid city</p>
            )}
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
                name="State"
                value={address.State}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errors.includes("State") && (
              <p className="invalid__message">State</p>
            )}
          </div>
        </div>
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
            {errors.includes("landmark") && (
              <p className="invalid__message">invalid landmark</p>
            )}
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
            name="defaultAddress"
            value="Make this my default address"
            onChange={handleChange}
          />
          <p className="preferences__select__text">
            Make this my default address
          </p>
        </div>
        <Heading2 text="Delivery Time Preferences"   marginLeft={12} />
        <Text2 text="Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned."  marginLeft={12} marginBottom={10}/>
        <div className="row newAddress__form__field__row">
          <div className="col-sm-12 col-md-6 main__form__field__block">
            {/* <p className="form__label">First Name</p> */}
            <Heading7 text="AddressType" marginBottom={20}/>
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
            {errors.includes("landmark") && (
              <p className="invalid__message">invalid landmark</p>
            )}
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
