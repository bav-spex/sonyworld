import axios from "axios";

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

export const getCartData = async () => {
  console.log("cart data >>>>>>")
  const cartData = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart`
  );
  console.log(cartData,"cartData")
  return cartData;
};


export const getAvailablePaymentMethods = async () => {
  // console.log("Payment method Data >>>>>>")
  const paymentMethodData = await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cart/available-payment-methods`
  );
  console.log(paymentMethodData,"paymentMethodData")
  return paymentMethodData.data;
};
