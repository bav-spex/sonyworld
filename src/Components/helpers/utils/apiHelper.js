import axios from "axios";

const API_URL = process.env.REACT_APP_PROJECT_API_URL; // base url
const authToken = localStorage.getItem("auth-token"); // language code

const apiHelper = async (api, method, data, headers) => {

  let url = `${API_URL}${api}`;

  // headers['Authorization'] = `Bearer ${authToken}`;
  // headers['Content-Type'] = 'multipart/form-data';

  return await new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    }).catch(err => {
      reject(err)
    }).then(res => {
      resolve(res)
    })
  })
}

export default apiHelper;