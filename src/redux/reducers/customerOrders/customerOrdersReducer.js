import * as actionType from "../../actionType";

const initialState = {
  customerOrderList: '',
  customerOrderDetails: '',
};

const customerOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CUSTOMER_ORDER_LIST:
      return { ...state, customerOrderList: action.payload };
    case actionType.CUSTOMER_ORDER_DETAILS:
      return { ...state, customerOrderDetails: action.payload };
    default:
      return state;
  }
};

export default customerOrdersReducer;
