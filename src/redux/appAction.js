import * as types from "./actionType";
import axios from "axios";
import {  apiAllCategoryData, apiHomePageData } from "../services/homepage";

const getHomePageData = (data) => ({
  type: types.GET__HOME__PAGE__DATA,
  payload: data,
});
const getAllCategoryData = (data) => ({
  type: types.GET__ALL__CATEGORY__DATA,
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
    const homepagedata = await apiHomePageData();
    // console.log(homepagedata.data);
    dispatch(getHomePageData(homepagedata.data));
    
    return homepagedata.data
  };
  
};
export const loadAllCategoryData = () => {
   return async function  (dispatch) {
    const categorydata = await apiAllCategoryData();
    // console.log(categorydata.data);
    dispatch(getAllCategoryData(categorydata.data));
    return categorydata.data
  };
  
};
