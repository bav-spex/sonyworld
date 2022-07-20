import axios from "axios";

export const getProductDetail =  async(sku) => {
    let responseData ={}
    const productDetailData =  await axios.get(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/products/${sku}`
    ).then(res=> responseData = res.data);
    // console.log(responseData,"product Data");
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData;
  };