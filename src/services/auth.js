import axios from "axios";
import { setHeader } from "./config";

export const getHandshake = async () => {
  setHeader("x-device-os-type", "ios");
  setHeader("x-app-version", "1.4.1");
  const res = await axios.post(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/handshake`,
    {
      store:"sony_en"
    //   store: "en",
    }
  );
  if (res.data && res.data.token) {
    setHeader("X-Access-Token", res.data.token);
  }
};
