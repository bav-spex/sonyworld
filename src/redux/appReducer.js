import * as types from "./actionType";

const initialState = {
  homepageData: {},
  categoryData: {},
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
    case types.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
  
    default:
      return state;
  }
};

export default appReducer;
