import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';
import * as services from '../services';

export const getCustomerOrdersList = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/orders?sort=${params.sort}&order=${params.order}`, 'get', params, {});
 console.log("response ", response);
      dispatch(getCustomerOrdersListSuccess(response.data));
    } catch (error) {
 console.log("error ", error);
    }
  }
};

// get addresses
export const getCustomerOrdersListSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_ORDER_LIST,
    payload: data
  }
}

export const getCustomerOrderDetails = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/customer/orders/${params.id}`, 'get', params, {});
      console.log("response ", response);
      dispatch(getCustomerOrderDetailsSuccess(response.data));
    } catch (error) {
      console.log("error ", error);
      if (error.response.status === 404) {
        dispatch(services.notifyError({ message: error.response.data.message }))
      }
    }
  }
};

// get addresses
export const getCustomerOrderDetailsSuccess = (data) => {
  return {
    type: actionType.CUSTOMER_ORDER_DETAILS,
    payload: data
  }
}
