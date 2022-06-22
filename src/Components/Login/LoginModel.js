import React from 'react'
import Heading3 from '../Font/Heading3'
import cancel_grey from './../../assets/Icon/cancel_grey.svg'
import shop from './../../assets/Icon/shop.svg'
import "./../../SCSS/Login/_loginModel.scss"
function LoginModel() {
  return (
    <div className='loginModel__container'>
     <div className="loginModel__header">
      <Heading3 text="Sign In to Sony" color="#000000"/>
      <img src={cancel_grey} alt="cancel" />
     </div>
     <div className="loginModel__content">
      <button  className="grtOtp__button">Get an OTP on your Phone</button>
     <button  className="google__signin__button">
      <img src={shop} alt="google_icon" className='signin__button__icon' />
      Sign In With Google
      </button>
     <button  className="facebook__signin__button">Sign In With Facebook</button>
     <button  className="apple__signin__button">Sign In With Apple</button>
     </div>
    </div>
  )
}

export default LoginModel