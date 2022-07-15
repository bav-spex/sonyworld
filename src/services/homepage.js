import axios from "axios";

export const getIdentifier =  async() => {
  const homepageData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cms/sony-web-home-en-9696`
  );
  debugger
  console.log("hello");
  console.log(homepageData,"homepageData in identifier")
  // return homepageData;
};
export const getAllCategory =  async() => {
  let responseData ={}
  const allCategoryData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/categories`
  ).then(res=> responseData = res.data);
  console.log(responseData);
  // console.table(allCategoryData.data.children_data,"categoryData in identifier")
  return responseData;
};

export const promiseHelper = (promise)=>{
  let responseData ={}
  promise.then(res=> responseData = res.data)
  console.log();
  return responseData
}