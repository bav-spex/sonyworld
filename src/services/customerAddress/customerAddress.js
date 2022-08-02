import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';
import { encryptHelper, decryptHelper } from "../../Components/helpers/utils/encryptDecryptHelper";
import * as services from '../services';

export const createCustomerAddress = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'post', params, {});
      if (response.data.success === true) {
        let msg = { message: "Address Added successfully." }
        dispatch(services.notifySuccess(msg))
        dispatch(updateCustomerAddressSuccess(response.data));
        dispatch(services.getCustomerAddressList());
      }
    } catch (error) {
      // let msg = { message: "Address updated successfully." }
      // dispatch(services.notifyError(msg))
      dispatch(updateCustomerAddressSuccess(error));
    }
  }
};

export const getCustomerAddressList = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'get', null, {});
      dispatch(getCustomerAddressListSuccess(response.data));
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

export const updateCustomerAddress = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'put', params, {});
      if (response.data.success === true) {
        let msg = { message: "Address updated successfully." }
        dispatch(services.notifySuccess(msg))
        dispatch(updateCustomerAddressSuccess(response.data));
        dispatch(services.getCustomerAddressList());
      }
    } catch (error) {
      console.log("error ", error);
      // let msg = { message: "Address updated successfully." }
      // dispatch(services.notifyError(msg))
      dispatch(updateCustomerAddressSuccess(error));
    }
  }
};

// get addresses
export const updateCustomerAddressSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_ADDRESS_ADD_UPDATE_ERR_MSG,
    payload: data
  }
}

export const deleteCustomerAddress = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'delete', params, {});
      if (response.data.success === true) {
        let msg = { message: "Address deleted successfully." }
        dispatch(services.notifySuccess(msg))
        dispatch(deleteCustomerAddressSuccess(response.data));
        dispatch(services.getCustomerAddressList());
      }
    } catch (error) {
      console.log("error ", error);

    }
  }
};

// delete customer addresse
export const deleteCustomerAddressSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_ADDRESS_DELETE,
    payload: data
  }
}