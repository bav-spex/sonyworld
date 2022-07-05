import { GET_HANDSHAKE } from "./../actionType";
import { getHandshake } from "./../../services/auth";

export const getHandshakeData = () => (dispatch) => {
    console.log("in gethandshake data")
  const res = getHandshake()
    .then((res) => {
      console.log(res, "res in action");
      dispatch({
        type: GET_HANDSHAKE,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err, "err in action");
    });
};
