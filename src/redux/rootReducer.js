import { combineReducers } from "redux";
import datReducer from "./datReducer";

const rootReducer = combineReducers({
  data: datReducer,
});

export default rootReducer