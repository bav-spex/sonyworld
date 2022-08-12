import apiHelper from '../../Components/helpers/utils/apiHelper'
import * as actionType from '../../redux/actionType';

export const getFlyerPdf = (params) => {
  return async dispatch => {
    try {
      let response = await apiHelper(`/V1/flyer`, 'get', params, {});
      if (response.status === 200) {
        dispatch(getFlyerPdfSuccess(response.data));
      }
    } catch (error) {
      console.log("error ", error);
    }
  }
};

// get addresses
export const getFlyerPdfSuccess = (data) => {
  return {
    type: actionType.GET_FLYER_PDF,
    payload: data
  }
}
