import React, { useState, useEffect } from 'react'
import Heading7 from '../Font/Heading7'
import see_password from "./../../assets/Icon/see_password.svg"
import hide_password from "./../../assets/Icon/hide_password.svg"
import "./../../SCSS/Form/_passwordForm.scss"
import * as services from './../../services/services'
import { useDispatch, useSelector } from "react-redux";
import { customerUpdatePasswordSuccess } from '../../services/customer/customer';

const T_REQ_OLD_PASSWORD = 'Old password is missing';
const T_REQ_NEW_PASSWORD = 'New password is missing';
const T_REQ_CONFIRM_PASSWORD = 'Confirm password is missing';
const T_WEAK_PASSWORD = 'Password must contain 1 uppercase, 1 lowercase,1 number, and at least 8 characters. Do not add more than 5 consecutive characters (123456/qwerty)';
const T_PASSWORD_NOT_MATCHED = 'Password not matched';

function PasswordForm() {

  const dispatch = useDispatch();

  const { customerUpdatePasswordStatus } = useSelector((state) => state.customerReducer);

  const [isOldPassword, setIsOldPassword] = useState(true);
  const [isNewPassword, setIsNewPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [updateErrMsg, setUpdateErrMsg] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  const [errMsg, setErrMsg] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (updateErrMsg === true) {
      setErrMsg(errMsg);
      setUpdateErrMsg(!updateErrMsg)
    }
  }, [updateErrMsg]);

  useEffect(() => {
    if (customerUpdatePasswordStatus === true) {
      customerUpdatePasswordSuccess(false);
      setPasswordData({
        ...passwordData,
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
    }
  }, [customerUpdatePasswordStatus]);

  const toggleOldPassword = () => setIsOldPassword(!isOldPassword);
  const toggleNewPassword = () => setIsNewPassword(!isNewPassword);
  const toggleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);

  const validateForm = async (event, newErrObj, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'oldPassword':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_OLD_PASSWORD }
        } else {
          newErrObj = { ...newErrObj, [name]: '' }
        }
        break;
      case 'newPassword':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_NEW_PASSWORD }
        } else {
          let params = {
            password: value,
            username: ''
          }
          let pwdStrength = await services.checkPasswordStrength(params);
          if (pwdStrength.strength === 'fair') {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: T_WEAK_PASSWORD }
          }
        }
        break;
      case 'confirmPassword':
        if (value === "") {
          newErrObj = { ...newErrObj, [name]: T_REQ_CONFIRM_PASSWORD }
        } else {
          if (value === passwordData.newPassword) {
            newErrObj = { ...newErrObj, [name]: '' }
          } else {
            newErrObj = { ...newErrObj, [name]: T_PASSWORD_NOT_MATCHED }
          }
        }
        break;
    }
    return newErrObj;
  }

  const handleChange = async (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setPasswordData({ ...passwordData, [name]: value });
    let manageErrMsg = await validateForm(event, errMsg, name, value);
    setErrMsg(manageErrMsg);
  };

  const allFeildValidate = (validateFeild, allErrMsg) => {

    let checkValueStatus = [];
    let checkErrStatus = [];

    validateFeild && validateFeild.map((val, i) => {
      let keyVal = passwordData[val];
      let errVal = errMsg[val];

      let allErrMsgManage = validateForm('', allErrMsg, val, keyVal);
      allErrMsgManage.then(res => {
        allErrMsg[val] = res[val]
      });

      if (keyVal !== "") {
        checkValueStatus.push('suc')
      }
      if (errVal === "") {
        checkErrStatus.push('err')
      }

    })

    let checkPwdStatus = false;
    if (checkValueStatus.length === validateFeild.length && checkErrStatus.length === validateFeild.length) {
      checkPwdStatus = true;
    }

    let returnData = {
      allErrMsg: allErrMsg,
      checkPwdStatus: checkPwdStatus
    }

    return returnData;
  };

  const handleSubmit = async () => {

    let validateFeild = [
      "oldPassword",
      "newPassword",
      "confirmPassword"
    ];

    let formStatus = await allFeildValidate(validateFeild, errMsg);
    setErrMsg(formStatus.allErrMsg);
    setUpdateErrMsg(true);
    if (formStatus.checkPwdStatus === true) {
      let params = {
        currentPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword
      }
      dispatch(services.customerUpdatePassword(params))
      // success
    } else {
      // error
    }
  }

  const handleCancel = () => {
    console.log(passwordData);
  }

  return (
    <div className="inner__password__block">
      <div className="main__form__field__block">
        {/* <p className="form__label">Password</p> */}
        <Heading7 text="Old Password" marginBottom={10} />
        <div className="field__block">
          <input
            type={isOldPassword ? "password" : "text"}
            placeholder=""
            className="form__field"
            id="oldPassword"
            name="oldPassword"
            value={passwordData.oldPassword}
            onChange={(e) => handleChange(e)}
          />
          <a onClick={() => toggleOldPassword()}>
            {isOldPassword ? (
              <img src={see_password} alt="" />
            ) : (
              <img src={hide_password} alt="" />
            )}
          </a>
        </div>
        {errMsg.oldPassword && <p className="invalid__message">{errMsg.oldPassword}</p>}
      </div>
      <div className="main__form__field__block">
        {/* <p className="form__label">Password</p> */}
        <Heading7 text="New Password" marginBottom={10} />
        <div className="field__block">
          <input
            type={isNewPassword ? "password" : "text"}
            placeholder=""
            className="form__field"
            id="newPassword"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={(e) => handleChange(e)}
          />
          <a onClick={() => toggleNewPassword()}>
            {isNewPassword ? (
              <img src={see_password} alt="" />
            ) : (
              <img src={hide_password} alt="" />
            )}
          </a>
        </div>
        {errMsg.newPassword && <p className="invalid__message">{errMsg.newPassword}</p>}
      </div>
      <div className="main__form__field__block">
        {/* <p className="form__label">Confirm Password</p> */}
        <Heading7 text="Confirm Password" marginBottom={10} />
        <div className="field__block">
          <input
            type={isConfirmPassword ? "password" : "text"}
            placeholder=""
            className="form__field"
            id="confirmPassword"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          <a onClick={() => toggleConfirmPassword()}>
            {isConfirmPassword ? (
              <img src={see_password} alt="" />
            ) : (
              <img src={hide_password} alt="" />
            )}
          </a>
        </div>
        {errMsg.confirmPassword && <p className="invalid__message">{errMsg.confirmPassword}</p>}
      </div>
      <div className="profile__form__button__block">
        <button className="form__save__button" onClick={handleSubmit}>
          SAVE
        </button>
        <button className="form__cancel__button" onClick={handleCancel}>
          CANCEL
        </button>
      </div>
    </div>
  )
}

export default PasswordForm