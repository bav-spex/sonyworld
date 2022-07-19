import * as types from "./actionType";

const initialState = {
  homepageData: {},
  loading: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET__HOME__PAGE__DATA:
      return {
        ...state,
        homepageData: action.payload,
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
