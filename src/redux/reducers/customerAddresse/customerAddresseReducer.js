import * as actionType from "../../actionType";

const initialState = {
  customerAddressList: '',
};

const customerAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CUSTOMER_ADDRESS_LIST:
      return { ...state, customerAddressList: action.payload };
    default:
      return state;
  }
};

export default customerAddressReducer;
