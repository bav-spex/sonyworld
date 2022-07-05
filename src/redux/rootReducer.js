import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./reducers/authReducer";
const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer,
});

export default rootReducer;
