import axios from "axios";

export const getHomePageData =  async() => {
  const homepageData =  await axios.get(
    `${process.env.REACT_APP_PROJECT_API_URL}/V1/cms/sony-web-home-en-9696`
  );
  // console.log("hello");
  // console.log(homepageData,"homepageData in identifier")
  return homepageData;
};


export const promiseHelper = (promise)=>{
  let responseData ={}
  promise.then(res=> responseData = res.data)
  // console.log();
  return responseData
}