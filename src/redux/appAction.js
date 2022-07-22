import * as types from "./actionType";
import axios from "axios";
import {  getHomePageData } from "../services/homepage.service";
import { getAllCategoryData } from "../services/category.service";
import { getProductDetail } from "../services/pdp.service";

const saveHomePageData = (data) => ({
  type: types.GET__HOME__PAGE__DATA,
  payload: data,
});
const saveAllCategoryData = (data) => ({
  type: types.GET__ALL__CATEGORY__DATA,
  payload: data,
});
const saveProductDetailData = (data) => ({
  type: types.GET__PRODUCT__DETAIL__DATA,
  payload: data,
});

const setLoading = (data) => ({
  type: types.LOADING,
  payload: data,
});



export const loadHomePageData = () => {
   return async function  (dispatch) {
    const homepagedata = await getHomePageData();
    // console.log(homepagedata.data);
    dispatch(saveHomePageData(homepagedata.data));
    
    return homepagedata.data
  };
  
};
export const loadAllCategoryData = () => {
   return async function  (dispatch) {
    const categorydata = await getAllCategoryData();
    // console.log(categorydata.data);
    dispatch(saveAllCategoryData(categorydata.data));
    return categorydata.data
  };
  
};
export const loadProductDetailData = (id) => {
   return async function  (dispatch) {
    const productData = await getProductDetail(id);
    // console.log(productData);
    dispatch(saveProductDetailData(productData));
    return productData
  };
};
