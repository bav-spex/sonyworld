import React from "react";
import "./../SCSS/_allCategory.scss";
import CategoryBanner from "../Components/CategoryComponent/CategoryBanner";
import CategoryByScreenSize from "../Components/CategoryComponent/CategoryByScreenSize";

const All_Category = () => {
  console.log("AllCategory");
  return (
    <div className="container-fluid allCategory">
      <CategoryBanner/>
      <CategoryByScreenSize/>
    </div>
  );
};

export default All_Category;
