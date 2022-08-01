import React, { useState, useEffect } from "react";
import Text1 from "../Font/Text1";
import "./../../SCSS/ProductListPage/_plpBannerAndCategorySection.scss";
import PLPBannerSectionOne from "./PLPBannerSectionOne";

import white_tv from "./../../assets/Icon/white_tv.svg";
import red_tv from "./../../assets/Icon/red_tv.svg";
import white_accessories from "./../../assets/Icon/white_accessories.svg";
import red_accessories from "./../../assets/Icon/red_accessories.svg";
const PLPCategorySection = ({ categoryData, selectedMainCategory,updateSelectedSubCategoryId,selectedCategoryId }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState({});
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(selectedCategoryId);
  console.log(selectedMainCategory);
  console.log(selectedSubCategory);
  useEffect(() => {
    if (selectedMainCategory) {
      setSelectedSubCategory(selectedMainCategory.children_data[0]);
    }
  }, []);

  const onSelectCategory = (item) => {
    // console.log(item);
    updateSelectedSubCategoryId(item)
    setSelectedSubCategory(item);
    setSelectedSubCategoryId(item.id)
    
  };

  return (
    <>
      <PLPBannerSectionOne
        bannerImage={selectedMainCategory?.categoryaicon}
        title={selectedMainCategory.name}
      />
      {selectedMainCategory?.children_data.length !== 0 ?(

      
      <div className="plp__main__category__section">
        <div className="plp__inner__category__section">
          <div className="plp__category__section">
            {selectedMainCategory?.children_data.map((cat, catIndex) => {
             
              return (
                <div
                  key={cat.id}
                  className={
                    selectedSubCategoryId == cat.id
                      ? "selected__plp__category__block"
                      : "plp__category__block"
                  }
                  onClick={() => onSelectCategory(cat)}
                >
                  <img
                    className="plp__category__image"
                    src={
                      selectedSubCategoryId == cat.id
                        ? red_tv
                        : white_tv
                    }
                    alt={cat.name}
                  />
                  <Text1
                    text={cat.name}
                    color={
                      selectedSubCategoryId == cat.id
                        ? "#DC3A1A"
                        : "#ffffff"
                    }
                  />
                </div>

                // <div
                //   className={`category__section__block ${
                //     selectedSubCategory.title === item.title ? "active__category" : ""
                //   }`}
                //   onClick={() => onSelectCategory(item)}
                // >
                //   <div
                //     className={`category__section__image__block ${
                //       selectedSubCategory.title === item.title ? "active__image" : ""
                //     }`}
                //   >
                //     <img
                //       className="category__section__image"
                //       src={item.image}
                //       alt="television"
                //     />
                //   </div>
                //   <div className="category__section__title__block">
                //     <p className="category__section__title">{item.title}</p>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
      ):""}
    </>
  );
};

export default PLPCategorySection;
