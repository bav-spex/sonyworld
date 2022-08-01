import * as actionType from "../../actionType";

const initialState = {
  customerAddressList: '',
  customerAddUpdateManage: '',
};

const customerAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CUSTOMER_ADDRESS_LIST:
      return { ...state, customerAddressList: action.payload };
    case actionType.CUSTOMER_ADDRESS_ADD_UPDATE_ERR_MSG:
      return { ...state, customerAddUpdateManage: action.payload };
    default:
      return state;
  }
};

export default customerAddressReducer;
