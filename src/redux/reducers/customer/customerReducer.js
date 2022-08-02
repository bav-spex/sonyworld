import * as actionType from "./../../actionType";

const initialState = {
  customerDetails: '',
  customerSignUpMsg: '',
  customerLogout: '',
  customerSignInMsg: false
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CUSTOMER_DETAILS:
      return { ...state, customerDetails: action.payload };
    case actionType.CUSTOMER_SIGN_UP_MSG:
      return { ...state, customerSignUpMsg: action.payload };
    case actionType.CUSTOMER_LOG_OUT:
      return { ...state, customerLogout: action.payload };
    case actionType.CUSTOMER_SIGN_IN_MSG:
      return { ...state, customerSignInMsg: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
