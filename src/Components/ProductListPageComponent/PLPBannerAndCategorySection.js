import React, { useState, useEffect } from "react";
import Text1 from "../Font/Text1";
import "./../../SCSS/ProductListPage/_plpBannerAndCategorySection.scss";
import PLPBannerSectionOne from "./PLPBannerSectionOne";
const PLPCategorySection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(
    props.categoryData[0]
  );

  useEffect(() => {
    // setSelectedCategory(props.categoryData[0]);
  }, [props.categoryData]);

  const onSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  return (
    <>
      <PLPBannerSectionOne
        bannerImage={selectedCategory.bannerImage}
        title={selectedCategory.title}
      />
      <div className="plp__main__category__section">
        <div className="plp__inner__category__section">
          <div className="plp__category__section">
            {props.categoryData.map((cat) => {
              return (
                <div
                  className={
                    selectedCategory.title === cat.title
                      ? "selected__plp__category__block"
                      : "plp__category__block"
                  }
                  onClick={() => onSelectCategory(cat)}
                >
                  <img
                    className="plp__category__image"
                    src={
                      selectedCategory.title === cat.title
                        ? cat.selectedIcon
                        : cat.defaultIcon
                    }
                    alt={cat.title}
                  />
                  <Text1
                    text={cat.title}
                    color={
                      selectedCategory.title === cat.title
                        ? "#DC3A1A"
                        : "#ffffff"
                    }
                  />
                </div>

                // <div
                //   className={`category__section__block ${
                //     selectedCategory.title === item.title ? "active__category" : ""
                //   }`}
                //   onClick={() => onSelectCategory(item)}
                // >
                //   <div
                //     className={`category__section__image__block ${
                //       selectedCategory.title === item.title ? "active__image" : ""
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
    </>
  );
};

export default PLPCategorySection;
