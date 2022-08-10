import * as actionType from "./../../actionType";

const initialState = {
  customerDetails: '',
  customerSignUpMsg: '',
  customerLogout: '',
  customerSignInMsg: false,
  customerUpdatePasswordStatus: false,
  customerProfileDetails: '',
  customerUpdateProfileStatus: false
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
    case actionType.CUSTOMER_UPDATE_PASSWORD:
      return { ...state, customerUpdatePasswordStatus: action.payload };
    case actionType.CUSTOMER_PROFILE_DETAILS:
      return { ...state, customerProfileDetails: action.payload };
    case actionType.CUSTOMER_UPDATE_PROFILE:
      return { ...state, customerUpdateProfileStatus: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
