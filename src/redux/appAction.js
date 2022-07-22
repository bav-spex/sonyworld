import * as types from "./actionType";
import axios from "axios";
import { getHomePageData } from "../services/homepage.service";
import { getAllCategoryData } from "../services/category.service";
import { getProductDetail } from "../services/pdp.service";
<<<<<<< HEAD
import { getLocationDetailData } from "../services/findStore.service";

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
=======
import { getWishlistData } from "../services/wishlist.services";
import { getCitiesLocationData } from "../services/storeLocation.service";


>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f

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
    return async function(dispatch) {
        const homepagedata = await getHomePageData();
        // console.log(homepagedata.data);
        dispatch(saveHomePageData(homepagedata.data));

        return homepagedata.data
    };

};
export const loadAllCategoryData = () => {
<<<<<<< HEAD
    return async function(dispatch) {
        const categorydata = await getAllCategoryData();
        // console.log(categorydata.data);
        dispatch(saveAllCategoryData(categorydata.data));
        return categorydata.data
    };

=======
   return async function  (dispatch) {
    const categorydata = await getAllCategoryData();
    // console.log(categorydata.data);
    dispatch(saveAllCategoryData(categorydata.data));
    return categorydata.data
  };
>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f
};



// Loading Product Details Page Data //

const saveProductDetailData = (data) => ({
  type: types.GET__PRODUCT__DETAIL__DATA,
  payload: data,
});


export const loadProductDetailData = (id) => {
    return async function(dispatch) {
        const productData = await getProductDetail(id);
        // console.log(productData);
        dispatch(saveProductDetailData(productData));
        return productData
    };
};

<<<<<<< HEAD
// location page data //

const saveLocationDetailData = (data) => ({
    type: types.GET__WISHLIST__DATA,
    payload: data,
=======

// Loading Wishlist  Page Data //

const saveWishlistData = (data) => ({
  type: types.GET__WISHLIST__DATA,
  payload: data,
>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f
});



<<<<<<< HEAD
export const loadLocationDetailData = () => {
    return async function(dispatch) {
        const locationDetailData = await getLocationDetailData();
        dispatch(saveLocationDetailData(locationDetailData.data));
        return locationDetailData.data
    };
};
=======
export const loadWishlistData = () => {
   return async function  (dispatch) {
    const wishlistData = await getWishlistData();
    dispatch(saveWishlistData(wishlistData.data));
    return wishlistData.data
  };
};

// Loading Store  Page Data //

const saveCitiesLocationData = (data) => ({
  type: types.GET__CITY__LOCATION__DATA,
  payload: data,
});



export const loadCitiesLocationData = () => {
   return async function  (dispatch) {
    const cityLocationData = await getCitiesLocationData();
    dispatch(saveCitiesLocationData(cityLocationData.data));
    return cityLocationData.data
  };
};
>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f
