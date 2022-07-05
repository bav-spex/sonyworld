import { GET_HANDSHAKE } from "./../actionType";

const initialState = {
  userLoggedIn: false,
  userData: {},
  token:""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HANDSHAKE:
      return {
        ...state,
        userData: action.payload.user,
        token:action.payload.token
      };
    default:
      return state;
  }
};

export default authReducer;
