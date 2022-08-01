import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';
import { encryptHelper, decryptHelper } from "../../Components/helpers/utils/encryptDecryptHelper";
import * as services from '../services';

export const createCustomerAddress = (params) => {
 console.log("params ======", params);
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/addresses`, 'post', params, {});
 console.log("response ", response);
    } catch (error) {

    }
  }
};
