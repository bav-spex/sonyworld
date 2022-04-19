import * as types from "./actionType";

const initialState = {
  bannerData: [],
  productsData: [],
  applicationData: [],
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET__CLIENT__BANNER__DATA:
      return {
        ...state,
        bannerData: action.payload,
      };
    case types.GET__CLIENT__PRODUCT__DATA:
      return {
        ...state,
        productsData: action.payload,
      };
    case types.GET__CLIENT__APPLICATION__DATA:
      return {
        ...state,
        applicationData: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
