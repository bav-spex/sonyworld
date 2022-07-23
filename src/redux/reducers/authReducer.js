import * as actionType from "./../actionType";

const initialState = {
  userLoggedIn: false,
  userData: {},
  token: "",
  authDetails: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_HANDSHAKE:
      return {
        ...state,
        userData: action.payload.user,
        token: action.payload.token
      };
    case actionType.AUTH_DETAILS:
      return { ...state, authDetails: action.payload };
    default:
      return state;
  }
};

export default authReducer;
