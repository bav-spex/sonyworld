import React,{useState} from "react";
import LoginModel from "./LoginModel";
import NewsLetterModel from "./NewsLetterModel";
import OtpModel from "./OtpModel";
import SignUpModel from "./SignUpModel";

function LoginWrapper({ loginMode }) {
    console.log(loginMode);
    const [popupMode, setPopupMode] = useState(loginMode);
    console.log(popupMode);
  if (popupMode === "signin") {
    return <LoginModel />;
  }
  if (popupMode === "signup") {
    return <SignUpModel />;
  }
  if (popupMode === "otp") {
    return <OtpModel />;
  }
  if (popupMode === "newsletter") {
    return <NewsLetterModel />;
  }
  return <h1>Hello</h1>;
}

export default LoginWrapper;
