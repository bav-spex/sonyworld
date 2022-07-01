import axios from "axios";

export const setHeader = (name, value) => {
  if (name) {
    axios.defaults.headers.common[name] = value;
  }
};
