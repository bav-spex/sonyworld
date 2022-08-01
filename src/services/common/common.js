import * as actionType from "./../../redux/actionType";

// loader start
export const loaderStart = (data) => {
  return {
    type: actionType.LOADER_START,
    payload: true
  }
}

// loader end
export const loaderEnd = (data) => {
  return {
    type: actionType.LOADER_END,
    payload: false
  }
}

// notify success for api response is success
export const notifySuccess = (data) => {
  data.status = true;
  return {
    type: actionType.NOTIFY_SUCCESS_MSG,
    payload: data
  }
}

// notify error for api response is error
export const notifyError = (data) => {
  data.status = false;
  return {
    type: actionType.NOTIFY_ERROR_MSG,
    payload: data
  }
}

// notify message clear
export const notifyClear = (data) => {
  data.status = false;
  return {
    type: actionType.NOTIFY_ERROR_MSG,
    payload: ''
  }
}