import apiHelper from "../../Components/helpers/utils/apiHelper";

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