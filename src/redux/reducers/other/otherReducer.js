import * as actionType from "../../actionType";

const initialState = {
  flyerPdf: ''
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_FLYER_PDF:
      return { ...state, flyerPdf: action.payload };
    default:
      return state;
  }
};

export default otherReducer;
