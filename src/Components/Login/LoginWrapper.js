import React, { useEffect, useState } from "react";
import LoginModel from "./LoginModel";
import NewsLetterModel from "./NewsLetterModel";
import OtpModel from "./OtpModel";
import SignUpModel from "./SignUpModel";

function LoginWrapper({ loginMode, closeLoginPopup }) {
  const [popupMode, setPopupMode] = useState(loginMode);
  useEffect(() => {
    // debugger
  
      async function init() {
        const data = await localStorage.getItem("loginMode");
        setPopupMode(data.slice(1, data.length-1));
      }
      init();
   
    
  }, [JSON.parse(localStorage.getItem('loginWrapper')),JSON.parse(localStorage.getItem('loginPopup')),JSON.parse(localStorage.getItem('loginMode')) ]);
  useEffect(() => {
    setPopupMode(loginMode);
  }, [loginMode]);
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
  return <h1>Hello from wrapper</h1>;
}

export default LoginWrapper;
