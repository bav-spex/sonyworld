import React from "react";
import "./../../../SCSS/ProductListPage/_facets.scss";
import SingleFacet from "./SingleFacet";
function BrandFacet({ facetData, facetKey, onFilter }) {
  // console.log(facetData[facetKey]);
  const constructParamFn = (item) => `${item.key}`;

  const childrenFn = (item) => (
    <>
      <label>{item.label}</label>
      <span>{`(${item.count})`}</span>
    </>
  );
  return (
    <div className="main__facets__block">
      <h1 className="main__facets__title">Color</h1>
      {facetData[facetKey]?.collection?.map((item, itemIndex) => {
        return (
          <SingleFacet
            constructParamFn={constructParamFn}
            childrenFn={childrenFn}
            key={itemIndex}
            facetData={facetData}
            facetKey={facetKey}
            item={item}
            onFilter={onFilter}
          />
        );
      })}
    </div>
  );
}

export default BrandFacet;
