import axios from "axios";

export const getAllCategoryData = async() => {
    let responseData = {}
        // console.log("object");
    const allCategoryData = await axios.get(
        `${process.env.REACT_APP_PROJECT_API_URL}/V1/categories`
    ).then(res => responseData = res);
    // console.log(responseData,"category_data");
    // console.table(allCategoryData.data.children_data,"categoryData in identifier")
    return responseData;
};