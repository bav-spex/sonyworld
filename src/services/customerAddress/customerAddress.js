import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';
import { encryptHelper, decryptHelper } from "../../Components/helpers/utils/encryptDecryptHelper";
import * as services from '../services';

export const createCustomerAddress = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'post', params, {});
      console.log("response ", response);
    } catch (error) {

    }
  }
};

// // create addresses
// export const createCustomerAddressSuccess = (data) => {
//   return {
//     type: actionType.CUSTOMER_ADDRESS_LIST,
//     payload: data
//   }
// }

export const getCustomerAddressList = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'get', null, {});
      // console.log("response ", response);
      // dispatch(getCustomerAddressListSuccess(response.data));
    } catch (error) {

    }
  }
};

// get addresses
export const getCustomerAddressListSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_ADDRESS_LIST,
    payload: data
  }
}