import axios from "axios";
import { setHeader } from "./config";
import apiHelper from './../Components/helpers/utils/apiHelper'
import * as actionType from './../redux/actionType';
import { encryptHelper, decryptHelper } from "./../Components/helpers/utils/encryptDecryptHelper";

export const getHandshake = async () => {
  try {
    setHeader("x-device-os-type", "ios");
    setHeader("x-app-version", "1.4.1");
   return  await axios.post(
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
      let res = response.data;
      if (res.status === true) {
        dispatch(userSignUpSuccess(res));
        // store data in local storage
        let details = res.data
        let encryptData = encryptHelper(JSON.stringify(details))
        localStorage.setItem("userDetails", encryptData);
      }
    } catch (error) {
      console.log("error ", error);
    }
  }
};

// auth reducer
export const userSignUpSuccess = (data) => {
  return {
    type: actionType.AUTH_DETAILS,
    payload: data
  }
}