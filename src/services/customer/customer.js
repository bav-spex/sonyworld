import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';
import { setHeader } from '../config';
import { encryptHelper, decryptHelper } from "./../../Components/helpers/utils/encryptDecryptHelper";
import * as services from './../services';

export const isEmailAvailable = async (params) => {
  let returnData = '';
  try {
    let responseData = await apiHelper(`/V1/customer/is-email-available`, 'post', params, {});
    returnData = responseData.data;
  } catch (error) {
    returnData = error.response.data;
  }
  return returnData;
}

//is-username-available - Check username availability.
export const isUsernameAvailable = async (params) => {
  let returnData = '';
  try {
    let responseData = await apiHelper(`/V1/customer/is-username-available`, 'post', params, {});
    returnData = responseData.data;
  } catch (error) {
    returnData = error.response.data;
  }
  return returnData;
}

// check-password-strength - Check password strength
export const checkPasswordStrength = async (params) => {
  let returnData = '';
  try {
    let responseData = await apiHelper(`/V1/customer/check-password-strength`, 'post', params, {});
    returnData = responseData.data;
  } catch (error) {
    returnData = error.response.data;
  }
  return returnData;
}

// signup API
export const customerSignUp = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer`, 'post', params, {});
      let detailsParams = {
        id: response.data.id
      }

      let userInfo = await services.getCustomerDetails(detailsParams);
      dispatch(customerDetailsSuccess(userInfo));

      let encryptData = encryptHelper(JSON.stringify(userInfo))
      localStorage.setItem("custDetails", encryptData);
      let notifyMsg = { message: 'Customer signup successfully.' }

      dispatch(services.notifySuccess(notifyMsg));
      dispatch(customerSignUpMsgSuccess(true));
    } catch (error) {

      let notifyMsg = { message: error.response.data.message }
      dispatch(services.notifyError(notifyMsg));

      // dispatch(customerSignUpMsg(error.response.data.message));
    }
  }
};

// auth reducer
export const customerSignUpMsgSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_SIGN_UP_MSG,
    payload: data
  }
}

// signin API
export const customerSignIn = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/login`, 'post', params, {});
      let details = response.data.user.data;
      let encryptData = encryptHelper(JSON.stringify(details))
      localStorage.setItem("custDetails", encryptData);
      let notifyMsg = { message: 'Login successfully' }
      // localStorage.setItem("handShakeToken", response.data.user.refreshToken);
      // setHeader('X-Access-Token',response.data.user.refreshToken)
      dispatch(services.notifySuccess(notifyMsg));
      dispatch(customerSignInSuccess(true));
    } catch (error) {
      if (error.request.status === 401) {
        dispatch(services.notifyError({ message: error.response.data.message }));
      }
      console.log("error ", error);
    }
  }
};

// auth reducer
export const customerSignInSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_SIGN_IN_MSG,
    payload: data
  }
}

// check-password-strength - Get customer details.
export const getCustomerDetails = async (params) => {
  let returnData = '';
  try {
    let responseData = await apiHelper(`/V1/customer/${params.id}`, 'get', params, {});
    returnData = responseData.data;
  } catch (error) {
    returnData = error.response.data;
  }
  return returnData;
}

// auth reducer
export const customerDetailsSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_DETAILS,
    payload: data
  }
}


// signin API
export const customerLogout = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/logout`, 'post', params, {});
      if (response.data === "") {
        let notifyMsg = { message: 'Logout successfully' }
        dispatch(services.notifySuccess(notifyMsg));
        dispatch(customerSignInSuccess(''));
        // setTimeout(function () {
        //   window.location.reload();
        // }, 2000);
      }
    } catch (error) {
      // let notifyMsg = { message: error.response.data.message }
      // // dispatch(customerSignInSuccess(error.response.data.message));
      // dispatch(services.notifyError(notifyMsg));
      // console.log("error ", error);
    }
  }
};

// auth reducer
export const customerLogoutSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_DETAILS,
    payload: data
  }
}

// update password API
export const customerUpdatePassword = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/update-password`, 'put', params, {});
      if (response.data.success === true) {
        dispatch(services.notifySuccess({ message: 'Password updated successfully' }));
        dispatch(customerUpdatePasswordSuccess(true));
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        dispatch(services.notifyError({ message: error.response.data.message }));
      }
    }
  }
};

// auth reducer
export const customerUpdatePasswordSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_UPDATE_PASSWORD,
    payload: data
  }
}

// profile details API
export const customerProfileDetails = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer`, 'get', params, {});
      dispatch(customerProfileDetailsSuccess(response.data));
    } catch (error) {
      console.log("error ", error);
    }
  }
};

// profile details reducer
export const customerProfileDetailsSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_PROFILE_DETAILS,
    payload: data
  }
}

// update profile API
export const customerUpdateProfile = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer`, 'put', params, {});
      dispatch(services.customerProfileDetails());
      dispatch(customerUpdateProfileSuccess(true));
      dispatch(services.notifySuccess({ message: 'Profile updated successfully' }));
    } catch (error) {
      console.log("error ", error);
    }
  }
};

// update profile reducer
export const customerUpdateProfileSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_UPDATE_PROFILE,
    payload: data
  }
}
