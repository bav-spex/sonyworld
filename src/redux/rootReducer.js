import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./reducers/authReducer";
import customerReducer from "./reducers/customer/customerReducer";
import commonReducer from "./reducers/common/commonReducer";

const rootReducer = combineReducers({
  appData: appReducer,
  authReducer: authReducer,
  customerReducer: customerReducer,
  commonReducer: commonReducer,
});

export default rootReducer;
