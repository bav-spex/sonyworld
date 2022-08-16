import axios from "axios";

export const getFilterData =  async(filterDetails) => {
    // console.log(filterDetails);
    let responseData ={}
    const filterData =  await axios.post(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/products/filter/details`,filterDetails
    ).then(res=> responseData = res);
    // console.log(responseData.data,"filter Data");
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData.data;
  };
export const getApplyFilterData =  async(filterDetails) => {
    // console.log(filterDetails);
    let responseData ={}
    const categoryFilterData =  await axios.post(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/products/filter/apply`,filterDetails
    ).then(res=> responseData = res)
    // console.log(categoryFilterData);
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData.data;
  };

export const getProductsOfCategory =  async(filterData) => {
    // console.log(filterData.id);
    let responseData ={}
    const productsOfCategoryData =  await axios.get(
      // `${process.env.REACT_APP_PROJECT_API_URL}/V1/category/${filterData.id}/products?limit=${filterData?.limit}&offset=${filterData?.offset}&sortBy=${filterData?.sortBy}`
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/category/${filterData.id}/products`
    ).then(res=>responseData=res)
    // console.log(responseData);
    return responseData
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
   
  };