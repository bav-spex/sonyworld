import axios from "axios";
import * as services from "./services";
import * as actionType from "./../redux/actionType";
import apiHelper from "../Components/helpers/utils/apiHelper";

export const createCartDetails = async () => {
  let responseData = {};
  const productDetailData = await axios
    .post(`${process.env.REACT_APP_PROJECT_API_URL}/V1/cart`)
    .then((res) => (responseData = res.data));
  // console.log(responseData,"product Data");
  // console.table(allCategoryData.data.children_data,"categoryData in identifier")
  return responseData;
};

export const addToCart = async (data) => {
  const productData = await axios.put(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart`,
    data
  );
  // console.log(wishlistData,"addToWishlist")
  return productData;
};
export const deleteFromCart = async (data) => {
  console.log(data);
  const deleteFromCartData = await axios.delete(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart/items`,
    data
  );
  console.log(deleteFromCartData,"deleteFromCartData")
  return deleteFromCartData;
};

export const getCartData = async () => {
  // console.log("cart data >>>>>>")
  const cartData = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart`
  );
  // console.log(cartData,"cartData")
  return cartData;
};


export const getAvailablePaymentMethods = async () => {
  // console.log("Payment method Data >>>>>>")
  const paymentMethodData = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart/available-payment-methods`
  );
  // console.log(paymentMethodData,"paymentMethodData")
  return paymentMethodData.data;
};

export const getEstimateShippingMethods = async () => {
  // console.log("Payment method Data >>>>>>")
  const estimateShippingMethods = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart/estimate-shipping-methods`
  );
  // console.log(estimateShippingMethods,"estimateShippingMethods")
  return estimateShippingMethods.data;
};

export const getPayfortInformation = async (data) => {
  // console.log("Payment method Data >>>>>>")
  const payfortInformationData = await axios.post(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart/get-payfort-information`, data
  );
  console.log(payfortInformationData, "payfortInformationData")
  return payfortInformationData;
};


// update shipping information API
export const updateShippingInformation = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/cart/shipping-information`, 'put', params, {});
      if (response.data !== "") {
        dispatch(updateShippingInformationSuccess(response.data));
      }
    } catch (error) {
      let message = ""
      if (error.response.status === 400) {
        message = error.response.data.message
      }
      if (error.response.status === 422) {
        message = error.response.data.details.errors
      }
      if (message !== "") {
        let msg = { message: message }
        dispatch(services.notifyError(msg))
      }
    }
  }
};

// update shipping information reducer
export const updateShippingInformationSuccess = (data) => {
  return {
    type: actionType.UPDATE_CUSTOMER_SHIPPING_INFO,
    payload: data
  }
}
