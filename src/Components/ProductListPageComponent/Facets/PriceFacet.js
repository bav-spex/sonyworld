import React from 'react'

function PriceFacet({facetData,facetKey}) {
  console.log(facetData);
  console.log(facetKey);
  const constructParamFn = (item) => `${item.from}-${item.to}`;
  const childrenFn = (item) => (
    <>
      <label>{`${item.from}${(item.isMax ? '+' : ` - ${item.to}`)}`}</label>
      <span>{`(${item.count})`}</span>
    </>
  );
  return (
    <>
      <h1>Price</h1>
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

export default PriceFacet