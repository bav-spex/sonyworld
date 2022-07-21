import { combineReducers } from "redux";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  appData: appReducer,
});

export default rootReducer;
