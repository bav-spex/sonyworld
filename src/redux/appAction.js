import * as types from "./actionType";
import axios from "axios";
import { apiHomePageData } from "../services/homepage";

const getHomePageData = (data) => ({
  type: types.GET__HOME__PAGE__DATA,
  payload: data,
});

const setLoading = (data) => ({
  type: types.LOADING,
  payload: data,
});


// const getProductData = (list) => ({
//   type: types.GET__CLIENT__PRODUCT__DATA,
//   payload: list,
// });
// const getApplicationData = (list) => ({
//   type: types.GET__CLIENT__APPLICATION__DATA,
//   payload: list,
// });

let bannerAPI = `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`;
// let productAPI = `${process.env.REACT_APP_PROJECT_API_URL}/productList`;
// let applicationAPI = `${process.env.REACT_APP_PROJECT_API_URL}/applicationList`;

const headers = {
  "api-key": "rblabels@123",
};

export const loadHomePageData = () => {
   return async function  (dispatch) {
    const data = await apiHomePageData();
    console.log(data.data);
    dispatch(getHomePageData(data.data));
    dispatch(setLoading(false));
    return data.data
  };
  // return async function (dispatch) {
  //   await axios.post(bannerAPI, {}, { headers }).then((res) => {
  //     dispatch(getBannerData(res.data.data));
  //   });
  // await axios.post(productAPI, {}, { headers }).then((res) => {
  //   dispatch(getProductData(res.data.data));
  // });
  // await axios.post(applicationAPI, {}, { headers }).then((res) => {
  //   dispatch(getApplicationData(res.data.data));
  // });
};
