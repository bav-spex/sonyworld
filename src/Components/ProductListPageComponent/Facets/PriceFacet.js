import React from "react";

function PriceFacet({ facetData, facetKey }) {
  console.log(facetData[facetKey]);
  const constructParamFn = (item) => `${item.from}-${item.to}`;
  const childrenFn = (item) => (
    <>
      <label>{`${item.from}${item.isMax ? "+" : ` - ${item.to}`}`}</label>
      <span>{`(${item.count})`}</span>
    </>
  );
  return (
    <>
      <h1>Price</h1>
      {facetData[facetKey]?.collection?.map((item, itemIndex) => {
        console.log(item);
        return (
          <div key={`facet_item_${facetKey}${itemIndex}`}>
            <div>
              <p
                className="facet-category-item"
                // onClick={() => toggleFilter(attrKey, constructParamFn(item), facetData[facetKey].multiple_selectable)}
              >
                {childrenFn(item)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PriceFacet;
