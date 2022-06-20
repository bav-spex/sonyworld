// import * as types from "./actionType";
// import axios from "axios";

// const getBannerData = (list) => ({
//   type: types.GET__CLIENT__BANNER__DATA,
//   payload: list,
// });
// const getProductData = (list) => ({
//   type: types.GET__CLIENT__PRODUCT__DATA,
//   payload: list,
// });
// const getApplicationData = (list) => ({
//   type: types.GET__CLIENT__APPLICATION__DATA,
//   payload: list,
// });

// let bannerAPI = `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`;
// let productAPI = `${process.env.REACT_APP_PROJECT_API_URL}/productList`;
// let applicationAPI = `${process.env.REACT_APP_PROJECT_API_URL}/applicationList`;

// const headers = {
//   "api-key": "rblabels@123",
// };


// export const loadClientAllData = () => {
//   return async function (dispatch) {
//     await axios.post(bannerAPI, {}, { headers }).then((res) => {
//       dispatch(getBannerData(res.data.data));
//     });
//     await axios.post(productAPI, {}, { headers }).then((res) => {
//       dispatch(getProductData(res.data.data));
//     });
//     await axios.post(applicationAPI, {}, { headers }).then((res) => {
//       dispatch(getApplicationData(res.data.data));
//     });
//   };
// };

