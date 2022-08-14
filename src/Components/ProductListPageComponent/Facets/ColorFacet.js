import React from 'react'

function ColorFacet({facetData,facetKey}) {
  console.log(facetData[facetKey]);
    const constructParamFn = (item) => `${item.key}`;
  
    const childrenFn = (item) => (
      <>
        <label>{item.label}</label>
        <span>{`(${item.count})`}</span>
      </>
    );
    return (
      <>
        <h1>Color</h1>
      {facetData[facetKey]?.collection?.map((item, itemIndex) => (
        <div key={`facet_item_${facetKey}${itemIndex}`}>
          <div >
            <p
              className="facet-category-item"
              // onClick={() => toggleFilter(attrKey, constructParamFn(item), facetData[facetKey].multiple_selectable)}
              >
              {childrenFn(item)}
            </p>
          </div>
        </div>
      ))}
      </>
    )
}

export default ColorFacet