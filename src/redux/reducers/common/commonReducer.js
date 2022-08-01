import * as actionType from "./../../actionType";

const initialState = {
  loading: false,
  notifyMsg: '',
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.LOADER_START:
      return { ...state, loading: true };
    case actionType.LOADER_END:
      return { ...state, loading: false };
    case actionType.NOTIFY_SUCCESS_MSG:
      return { ...state, notifyMsg: action.payload };
    case actionType.NOTIFY_ERROR_MSG:
      return { ...state, notifyMsg: action.payload };
    case actionType.NOTIFY_CLEAR_MSG:
      return { ...state, notifyMsg: action.payload };
    default:
      return state;
  }
}
export default commonReducer;