import axios from "axios";

export const getOrderDetails =  async(id) => {
    let responseData ={}
    const orderDetailData =  await axios.get(
      `${process.env.REACT_APP_PROJECT_API_URL}/V1/customer/orders/${id}`
    ).then(res=> responseData = res.data);
    console.log(orderDetailData,"orderDetailData");
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData;
  };