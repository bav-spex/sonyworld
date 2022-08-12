import React from 'react'

function BrandFacet({facetData,facetKey}) {
  console.log(facetData);
  console.log(facetKey);

  const constructParamFn = (item) => `${item.key}`;

  const childrenFn = (item) => (
    <>
      <label>{item.label}</label>
      <span>{`(${item.count})`}</span>
    </>
  );
  return (
    <>
    <h1>Brand</h1>
    {facetData[facetKey]?.collection?.map((item, itemIndex) => (
      <div key={`facet_item_${facetKey}${itemIndex}`}>
        <div >
          <a
            className="facet-category-item"
            // onClick={() => toggleFilter(attrKey, constructParamFn(item), facetData[facetKey].multiple_selectable)}
            >
            {childrenFn(item)}
          </a>
        </div>
      </div>
    ))}
    </>
  )
}

export default BrandFacet