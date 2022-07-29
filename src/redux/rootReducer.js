import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  appData: appReducer,
  authReducer: authReducer,
});

export default rootReducer;
