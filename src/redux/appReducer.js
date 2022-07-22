import * as types from "./actionType";

const initialState = {
<<<<<<< HEAD
    homepageData: {},
    categoryData: {},
    productData: {},
    locationDetailData: {},
    loading: true,
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
        case types.GET__PRODUCT__DETAIL__DATA:
            return {
                ...state,
                productData: action.payload,
            };
        case types.GET__LOCATION__DETAIL__DATA:
            return {
                ...state,
                locationDetailData: action.payload,
            };
        case types.LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
=======
  homepageData: {},
  categoryData: {},
  productData: {},
  wishlistData: [],
  cityLocationData:[],
  loading: true,
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
    case types.GET__PRODUCT__DETAIL__DATA:
      return {
        ...state,
        productData: action.payload,
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
    case types.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
  
    default:
      return state;
  }
>>>>>>> 1dae517c735daae5a9df1e234702050e8ba6b74f
};

export default appReducer;