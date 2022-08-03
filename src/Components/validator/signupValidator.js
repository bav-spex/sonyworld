import * as services from './../../services/services';
import { emailValidator } from '../helpers/utils/validators';

export const signUpValidateForm = async (event, newErrObj, data, name, value) => {

    const T_REQ_FIRSTNAME = 'Firstname is missing';
    const T_REQ_LASTNAME = 'Lastname is missing';
    const T_REQ_EMAIL = 'Email is missing';
    const T_INVALID_EMAIL = 'Invalid email address (ex: example@gmail.com)';
    const T_REQ_PASSWORD = 'Password is missing';
    const T_REQ_CONFIRM_PASSWORD = 'Confirm Password is missing';
    const T_WEAK_PASSWORD = 'Password must contain 1 uppercase, 1 lowercase,1 number, and at least 8 characters. Do not add more than 5 consecutive characters (123456/qwerty)';
    const T_PASSWORD_NOT_MATCHED = 'Password not matched';
    const T_REQ_MOBILE_NUMBER = 'Mobile Number is missing';
    const T_REQ_USERNAME = 'Username is required';

    //A function to validate each input values
    switch (name) {
        case 'firstName':
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_FIRSTNAME }
            } else {
                newErrObj = { ...newErrObj, [name]: '' }
            }
            break;
        case 'lastName':
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_LASTNAME }
            } else {
                newErrObj = { ...newErrObj, [name]: '' }
            }
            break;
        case 'email':
            let emailStatus = emailValidator(value);
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_EMAIL }
            } else {
                if (emailStatus === "error") {
                    newErrObj = { ...newErrObj, [name]: T_INVALID_EMAIL }
                } else {
                    newErrObj = { ...newErrObj, [name]: '' }
                }
            }
            break;
        case 'mobileNumber':
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_MOBILE_NUMBER }
            } else {
                newErrObj = { ...newErrObj, [name]: '' }
            }
            break;
        case 'username':
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_USERNAME }
            } else {
                let params = {
                    username: value
                }
                let usernameAvailable = await services.isUsernameAvailable(params);
                if (usernameAvailable.success === true) {
                    newErrObj = { ...newErrObj, [name]: '' }
                } else {
                    newErrObj = { ...newErrObj, [name]: usernameAvailable.message }
                }
            }
            break;
        case 'password':
            if (value === "") {
                newErrObj = { ...newErrObj, [name]: T_REQ_PASSWORD }
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
                if (value === data.password) {
                    newErrObj = { ...newErrObj, [name]: '' }
                } else {
                    newErrObj = { ...newErrObj, [name]: T_PASSWORD_NOT_MATCHED }
                }
            }
            break;
        default:
            break;
    }
    return newErrObj;
}

export const allFeildValidateSignUp = async (validateFeild, data, allErrMsg) => {
    let checkValueStatus = [];
    let checkErrStatus = [];

    let updatedErrMsg = allErrMsg
    validateFeild && validateFeild.map((val, i) => {
        let keyVal = data[val];
        let errVal = allErrMsg[val];

        let returnErrMsg = signUpValidateForm('', updatedErrMsg, data, val, keyVal);
        returnErrMsg.then((res) => {
            updatedErrMsg[val] = res[val]
        })
        if (keyVal !== "") {
            checkValueStatus.push('suc')
        }
        if (errVal === "") {
            checkErrStatus.push('err')
        }
    })

    let checkCardStatus = false;
    if (checkValueStatus.length === validateFeild.length && checkErrStatus.length === validateFeild.length) {
        checkCardStatus = true;
    }
    let returnData = {
        allErrMsg: updatedErrMsg,
        checkCardStatus: checkCardStatus
    }

    return returnData;
}