import * as types from "./actionType";

const initialState = {
  homepageData: {},
  categoryData: {},
  productData: {},
  wishlistData: [],
  cityLocationData: [],
  countriesLocationData: [],
  storesLocationData: [],
  filterData: {},
  selectedCategory: {},
  loading: true,
  cartQuoteId: "",
  cartData: [],
  payfortInformationData:{},
  deliveryShippingInfo: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET__HOME__PAGE__DATA:
      return {
        ...state,
        homepageData: action.payload,
      };
    case types.GET__ALL__CATEGORY__DATA:
      return {
        ...state,
        categoryData: action.payload,
      };
    case types.SET__SELECTED__CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case types.GET__PRODUCT__DETAIL__DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case types.GET__PRODUCT__FILTER__DATA:
      return {
        ...state,
        filterData: action.payload,
      };
    case types.SET__ORDER__ID__DATA:
      return {
        ...state,
        payfortInformationData: action.payload,
      };
    case types.GET__WISHLIST__DATA:
      return {
        ...state,
        wishlistData: action.payload,
      };
    case types.GET__CITY__LOCATION__DATA:
      return {
        ...state,
        cityLocationData: action.payload,
      };
    case types.GET__COUNTRIES__LOCATION__DATA:
      return {
        ...state,
        countriesLocationData: action.payload,
      };
    case types.GET__STORES__LOCATION__DATA:
      return {
        ...state,
        storesLocationData: action.payload,
      };
    case types.GET__CART__QUOTE__ID:
      return {
        ...state,
        cartQuoteId: action.payload,
      };
    case types.GET__CART__DATA:
      return {
        ...state,
        cartData: action.payload,
      };
    case types.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.UPDATE_CUSTOMER_SHIPPING_INFO:
      return {
        ...state,
        deliveryShippingInfo: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
