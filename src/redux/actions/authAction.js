import { GET_HANDSHAKE } from "./../actionType";
import { getHandshake } from "./../../services/auth";

export const getHandshakeData = () => (dispatch) => {
  const res = getHandshake()
    .then((res) => {
      dispatch({
        type: GET_HANDSHAKE,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err, "err in action");
    });
};
