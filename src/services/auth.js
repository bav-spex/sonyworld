import axios from "axios";
import { setHeader } from "./config";
import apiHelper from './../Components/helpers/utils/apiHelper'
import * as actionType from './../redux/actionType';
import { encryptHelper, decryptHelper } from "./../Components/helpers/utils/encryptDecryptHelper";
import * as services from './services';

export const getHandshake = async () => {
  try {
    setHeader("x-device-os-type", "ios");
    setHeader("x-app-version", "1.4.1");
    return await axios.post(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/handshake`,
      {
        store: "sony_en",
        //   store: "en",
      }
    )
    // return res
    // res.then(res=>console.log(res))
    // if (res.data && res.data.token) {
    //   setHeader("X-Access-Token", res.data.token);
    //   return res.data;
    // }
  } catch (e) {
    console.log(e, "error in handshake");
  }
};

export const refreshHandshake = async () => {
  const res = await axios.post(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/handshake/refresh`,
    {
      store: "sony_en",
      //   store: "en",
    }
  );
};

// signup API
export const userSignUp = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer`, 'post', params, {});
      let detailsParams = {
        id: response.data.id
      }
      let userInfo = await services.getUserDetails(detailsParams);
      dispatch(userDetailsSuccess(userInfo));
      let encryptData = encryptHelper(JSON.stringify(userInfo))
      localStorage.setItem("userDetails", encryptData);
    } catch (error) {
      dispatch(userSignUpError(error.response.data.message));
    }
  }
};

// auth reducer
export const userSignUpError = (data) => {
  return {
    type: actionType.USER_SIGN_UP_ERROR,
    payload: data
  }
}

// signin API
export const userSignIn = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/login`, 'post', params, {});
      let details = response.data;
      let encryptData = encryptHelper(JSON.stringify(details))
      localStorage.setItem("userDetails", encryptData);
    } catch (error) {
      console.log("error ", error);
    }
  }
};

// check-password-strength - Get customer details.
export const getUserDetails = async (params) => {
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
export const userDetailsSuccess = (data) => {
  return {
    type: actionType.AUTH_DETAILS,
    payload: data
  }
}
