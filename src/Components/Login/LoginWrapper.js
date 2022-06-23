import React,{useEffect, useState} from "react";
import LoginModel from "./LoginModel";
import NewsLetterModel from "./NewsLetterModel";
import OtpModel from "./OtpModel";
import SignUpModel from "./SignUpModel";

function LoginWrapper({ loginMode,closeLoginPopup }) {
    console.log("loginMode====>>>", loginMode);
    const [popupMode, setPopupMode] = useState(loginMode);
    useEffect(()=>{
      setPopupMode(loginMode)
    },[loginMode])
    console.log("popupMode====>>>",popupMode);
    const handleChangePopupMode =(mode)=>{
      setPopupMode(mode)
    }
  if (popupMode === "signin") {
    return <LoginModel closeLoginPopup={closeLoginPopup} handleChangePopupMode={handleChangePopupMode} />;
  }
  if (popupMode === "signup") {
    return <SignUpModel closeLoginPopup={closeLoginPopup} handleChangePopupMode={handleChangePopupMode} />;
  }
  if (popupMode === "otp") {
    return <OtpModel closeLoginPopup={closeLoginPopup} handleChangePopupMode={handleChangePopupMode} />;
  }
  if (popupMode === "newsletter") {
    return <NewsLetterModel closeLoginPopup={closeLoginPopup} handleChangePopupMode={handleChangePopupMode} />;
  }
  return <h1>Hello</h1>;
}

export default LoginWrapper;
