import axios from "axios";

export const createCartDetails = async () => {
  let responseData = {};
  const productDetailData = await axios
    .post(`${process.env.REACT_APP_PROJECT_API_URL}/V1/cart`)
    .then((res) => (responseData = res.data));
  // console.log(responseData,"product Data");
  // console.table(allCategoryData.data.children_data,"categoryData in identifier")
  return responseData;
};
