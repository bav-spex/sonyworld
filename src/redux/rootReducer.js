import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customer/customerReducer";
import commonReducer from "./reducers/common/commonReducer";
import customerAddressReducer from "./reducers/customerAddresse/customerAddresseReducer";
import customerOrdersReducer from "./reducers/customerOrders/customerOrdersReducer";
import otherReducer from "./reducers/other/otherReducer";

const rootReducer = combineReducers({
  appData: appReducer,
  authReducer: authReducer,
  customerReducer: customerReducer,
  commonReducer: commonReducer,
  customerAddressReducer: customerAddressReducer,
  customerOrdersReducer: customerOrdersReducer,
  otherReducer: otherReducer
});

export default rootReducer;
