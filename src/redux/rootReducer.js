import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customer/customerReducer";
import commonReducer from "./reducers/common/commonReducer";
import customerAddressReducer from "./reducers/customerAddresse/customerAddresseReducer";

const rootReducer = combineReducers({
  appData: appReducer,
  authReducer: authReducer,
  customerReducer: customerReducer,
  commonReducer: commonReducer,
  customerAddressReducer: customerAddressReducer
});

export default rootReducer;
