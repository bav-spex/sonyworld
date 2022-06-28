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
import PersonalInfoForm from "../Components/Form/PersonalInfoForm";
import AddressForm from "../Components/Form/AddressForm";
import AddressPopup from "../Components/Popup/AddressPopup";
import PasswordForm from "../Components/Form/PasswordForm";

const addressData = [
  {
    id: 0,
    isDefault: true,
    addressType: "Home",
    userName: "John Doe",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
  {
    id: 1,
    isDefault: false,
    addressType: "Office",
    userName: "Martin Smith",
    adddress: "21 West 52nd Street New York, New York, 10021 United States",
    contact: "+1123456789",
  },
];
function My_Profile_Page() {
  const [tab, setTab] = useState("personal");
  const [addressPopup, setAddressPopup] = useState(false);
  // const togglePassword = () => setIsPassword(!isPassword);
  // const toggleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);
  const closeLoginPopup = () => {
    if (document.querySelector(".address__popup__container")) {
      // reloadingHeader()
      const element = document.querySelector(".address__popup__container");
      element.classList.remove("address__popup__container");
      element.classList.add("address__popup__container__disable");
    }
    setAddressPopup(false)
  };

  const handleAddressPopup=(value)=>{
setAddressPopup(value)
  }
 
  return (
    <>
      <BreadCrumbs title="My Account" subTitle="My Profile" />
      <div className="container-fluid profile__page__container ">
        <div className="profile__page__block">
          <div className="profile__page__title__block">
            <Heading3 text="My Profile" />
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
             <PersonalInfoForm/>
            </div>
            <div
              className={
                tab === "address" ? "address__block" : "address__block__disable"
              }
            >
              <AddressForm addressData={addressData} closeLoginPopup={closeLoginPopup} handleAddressPopup={handleAddressPopup}/>
            </div>
            <div
              className={
                tab === "password"
                  ? "password__block"
                  : "password__block__disable"
              }
            >
              <PasswordForm/>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          addressPopup
            ? "container-fluid address__popup__container"
            : "container-fluid address__popup__container__disable"
        }
      >
        <AddressPopup closeLoginPopup={closeLoginPopup}/>
      </div>
    </>
  );
}

export default My_Profile_Page;
