import React, { useEffect, useState } from "react";
import LoginModel from "./LoginModel";
import NewsLetterModel from "./NewsLetterModel";
import OtpModel from "./OtpModel";
import SignUpModel from "./SignUpModel";

function LoginWrapper({ loginMode, closeLoginPopup }) {
  // console.log(loginMode);
  const [popupMode, setPopupMode] = useState(loginMode);
  useEffect(() => {
    function init() {
      const data = JSON.parse(localStorage.getItem("loginMode"));
      setPopupMode(data.slice(1, data.length - 1));
    }
    init();
  }, []);
  // useEffect(() => {
  //   //
  
  //     setPopupMode(");
   
  // }, [JSON.parse(localStorage.getItem('loginMode'))]);

  useEffect(() => {
    setPopupMode(loginMode);
  }, [loginMode]);
  useEffect(() => {
    // debugger;
    if (
      window.location.pathname.includes("/checkout") &&
      popupMode === "signin"
    ) {
      setPopupMode("signin");
    } else if (
      window.location.pathname.includes("/checkout") &&
      popupMode === "signup"
    ) {
      setPopupMode("signup");
    } else if (
      window.location.pathname.includes("/checkout") &&
      popupMode === "otp"
    ) {
      setPopupMode("newsletter");
    } else if (
      window.location.pathname.includes("/checkout") &&
      popupMode === "newsletter"
    ) {
      setPopupMode("newsletter");
    }
  },[popupMode]);
  const handleChangePopupMode = (mode) => {
    setPopupMode(mode);
  };
  if (popupMode === "signin") {
    return (
      <LoginModel
        closeLoginPopup={closeLoginPopup}
        handleChangePopupMode={handleChangePopupMode}
      />
    );
  }
  if (popupMode === "signup") {
    return (
      <SignUpModel
        closeLoginPopup={closeLoginPopup}
        handleChangePopupMode={handleChangePopupMode}
      />
    );
  }
  if (popupMode === "otp") {
    return (
      <OtpModel
        closeLoginPopup={closeLoginPopup}
        handleChangePopupMode={handleChangePopupMode}
      />
    );
  }
  if (popupMode === "newsletter") {
    return (
      <NewsLetterModel
        closeLoginPopup={closeLoginPopup}
        handleChangePopupMode={handleChangePopupMode}
      />
    );
  }
  return  <LoginModel
  closeLoginPopup={closeLoginPopup}
  handleChangePopupMode={handleChangePopupMode}
/>;
}

export default LoginWrapper;
