import axios from "axios";

export const getCategoryFilterData =  async(filterDetails) => {
    console.log(filterDetails);
    let responseData ={}
    const categoryFilterData =  await axios.post(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/products/filter/details`,filterDetails
    ).then(res=> responseData = res);
    // console.log(responseData.data,"filter Data");
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData.data;
  };