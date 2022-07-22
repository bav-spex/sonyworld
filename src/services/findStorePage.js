// import axios from "axios";

// export const getLocationDetailData = async () => {
//   const locationDetailData = await axios.get(
//     `${process.env.REACT_APP_PROJECT_API_URL}/V1/directory/countries`
//   );
//   // console.log(locationDetailData);
//   console.log("location");
//   return locationDetailData;
// };

// export const promiseHelper = (promise) => {
//   let responseData = {};
//   promise.then((res) => (responseData = res.data));
//   return responseData;
// };

import axios from "axios";

export const getLocationDetailData = async () => {
  let responseData = {};
  console.log("location");
  const locationDetailData = await axios
    .get(`${process.env.REACT_APP_PROJECT_API_URL}/V1/directory/countries`)
    .then((res) => (responseData = res));
  // console.log(responseData,"category_data");
  // console.table(allCategoryData.data.children_data,"categoryData in identifier")
  return responseData;
};
