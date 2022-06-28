import React, { useState } from "react";
import Heading3 from "../Font/Heading3";
import Heading7 from "../Font/Heading7";
import { emailValidator } from "../helpers/utils/validators";
import cancel_grey from "./../../assets/Icon/cancel_grey.svg";
import "./../../SCSS/Popup/_addressPopup.scss";
function AddressPopup({ closeLoginPopup }) {
  const [address, setAddress] = useState({
    name: "",
    mobileNumber: "",
    addressLine1: "",
    addtessLine2: "",
    city: "",
    state: "",
    landmark: true,
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
  const handleSubmit = ()=>{
    console.log(address);
    closeLoginPopup()
  }
  const handleCancel = ()=>{
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
            {errors.includes("landmark") && (
              <p className="invalid__message">invalid landmark</p>
            )}
          </div>
        </div>
        <div className="address__form__button__block">
          <button className="form__save__button" onClick={handleSubmit}>
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
