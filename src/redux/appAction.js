import * as types from "./actionType";
import axios from "axios";
import {  getHomePageData } from "../services/homepage.service";
import { getAllCategoryData } from "../services/category.service";
import { getProductDetail } from "../services/pdp.service";
import { getWishlistData } from "../services/wishlist.services";



const setLoading = (data) => ({
  type: types.LOADING,
  payload: data,
});


// Loading Home Page Data //

const saveHomePageData = (data) => ({
  type: types.GET__HOME__PAGE__DATA,
  payload: data,
});

const saveAllCategoryData = (data) => ({
  type: types.GET__ALL__CATEGORY__DATA,
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



// Loading Product Details Page Data //

const saveProductDetailData = (data) => ({
  type: types.GET__PRODUCT__DETAIL__DATA,
  payload: data,
});


export const loadProductDetailData = (id) => {
   return async function  (dispatch) {
    const productData = await getProductDetail(id);
    // console.log(productData);
    dispatch(saveProductDetailData(productData));
    return productData
  };
};


// Loading Wishlist  Page Data //

const saveWishlistData = (data) => ({
  type: types.GET__WISHLIST__DATA,
  payload: data,
});



export const loadWishlistData = () => {
   return async function  (dispatch) {
    const wishlistData = await getWishlistData();
    dispatch(saveWishlistData(wishlistData.data));
    return wishlistData.data
  };
};
