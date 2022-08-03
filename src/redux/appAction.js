import * as types from "./actionType";
import axios from "axios";
import { getHomePageData } from "../services/homepage.service";
import { getAllCategoryData } from "../services/category.service";
import { getProductDetail } from "../services/pdp.service";
import { getWishlistData } from "../services/wishlist.services";
import { getCitiesLocationData } from "../services/storeLocation.service";
import { getCountriesLocationData } from "../services/storeLocation.service";
import { getStoresLocationData } from "../services/storeLocation.service";
import { getCategoryFilterData } from "../services/plp.service";
import { createCartDetails, getCartData, getPayfortInformation } from "../services/cart.service";
import { getOrderDetails } from "../services/order.service";

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
  return async function (dispatch) {
    const homepagedata = await getHomePageData();
    // console.log(homepagedata.data);
    dispatch(saveHomePageData(homepagedata.data));

    return homepagedata.data;
  };
};

export const loadAllCategoryData = () => {
  return async function (dispatch) {
    const categorydata = await getAllCategoryData();
    // console.log(categorydata.data);
    dispatch(saveAllCategoryData(categorydata.data));
    dispatch({
      type: types.SET__SELECTED__CATEGORY,
      payload: categorydata.data.children_data[0],
    });

    return categorydata.data;
  };
};

// Loading Product Details Page Data //

const saveProductDetailData = (data) => ({
  type: types.GET__PRODUCT__DETAIL__DATA,
  payload: data,
});

export const loadProductDetailData = (id) => {
  return async function (dispatch) {
    const productData = await getProductDetail(id);
    // console.log(productData);
    dispatch(saveProductDetailData(productData));
    return productData;
  };
};

// Loading Product Details Page Data //

const saveCategoryFilterData = (data) => ({
  type: types.GET__PRODUCT__FILTER__DATA,
  payload: data,
});

export const loadCategoryFilterData = (filterDetails) => {
  return async function (dispatch) {
    const filterData = await getCategoryFilterData(filterDetails);
    // console.log(productData);
    dispatch(saveCategoryFilterData(filterData));
    return filterData;
  };
};

// Loading Wishlist  Page Data //

const saveWishlistData = (data) => ({
  type: types.GET__WISHLIST__DATA,
  payload: data,
});

export const loadWishlistData = () => {
  return async function (dispatch) {
    const wishlistData = await getWishlistData();
    dispatch(saveWishlistData(wishlistData.data));
    return wishlistData.data;
  };
};

// Loading Store  Page Data //

// cities //

const saveCitiesLocationData = (data) => ({
  type: types.GET__CITY__LOCATION__DATA,
  payload: data,
});

export const loadCitiesLocationData = () => {
  return async function (dispatch) {
    const cityLocationData = await getCitiesLocationData();
    dispatch(saveCitiesLocationData(cityLocationData.data));
    return cityLocationData.data;
  };
};

// countries //

const saveCountriesLocationData = (data) => ({
  type: types.GET__COUNTRIES__LOCATION__DATA,
  payload: data,
});

export const loadCountriesLocationData = () => {
  return async function (dispatch) {
    const countriesLocationData = await getCountriesLocationData();
    dispatch(saveCountriesLocationData(countriesLocationData.data));
    return countriesLocationData.data;
  };
};

// Store //

const saveStoresLocationData = (data) => ({
  type: types.GET__STORES__LOCATION__DATA,
  payload: data,
});

export const loadStoresLocationData = () => {
  return async function (dispatch) {
    const storesLocationData = await getStoresLocationData();
    dispatch(saveStoresLocationData(storesLocationData.data));
    return storesLocationData.data;
  };
};

const saveCartQuoteId = (data) => ({
  type: types.GET__CART__QUOTE__ID,
  payload: data,
});

export const loadCreateCart = () => {
  return async function (dispatch) {
    const createCartData = await createCartDetails();
    dispatch(saveCartQuoteId(createCartData.quoteId));
  };
};

const saveCartData = (data) => ({
  type: types.GET__CART__DATA,
  payload: data,
});

export const loadCartData = () => {
  return async function (dispatch) {
    const cartData = await getCartData();
    // console.log("cartData ", cartData);

    dispatch(saveCartData(cartData.data));
    return cartData.data;
  };
};

const savePayfortInformationData = (data) => ({
  type: types.SET__ORDER__ID__DATA,
  payload: data,
});

export const loadPayfortInformation = (data) => {
  return async function (dispatch) {
    const payfortInformationData = await getPayfortInformation(data);
    console.log("payfortInformationData ", payfortInformationData);
    if (payfortInformationData.success) {
      dispatch(savePayfortInformationData(payfortInformationData));
    }
    return payfortInformationData;
  };
};

//  load Order ID Detaild Data
const saveOrderDetailsData = (data) => ({
    type: types.GET__ORDER__DETAIL__DATA,
    payload: data,
  });
  
  export const loadOrderDetailsData = (id) => {
    return async function (dispatch) {
      const orderDetailsData = await getOrderDetails(id);
      // console.log(productData);
      dispatch(saveOrderDetailsData(orderDetailsData));
      return orderDetailsData;
    };
  };
  