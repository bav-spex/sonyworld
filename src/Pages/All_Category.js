import React from "react";
import "./../SCSS/_allCategory.scss";
import CategoryBanner from "../Components/CategoryComponent/CategoryBanner";
const All_Category = () => {
  console.log("AllCategory");
  return (
    <div className="container-fluid allCategory">
      <CategoryBanner/>
    </div>
  );
};

export default All_Category;
