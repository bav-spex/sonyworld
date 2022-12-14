import React from 'react'

function GenreFacet({facetData,facetKey}) {
    const constructParamFn = (item) => `${item.key}`;
  
    const childrenFn = (item) => (
      <>
        <label>{item.label}</label>
        <span>{`(${item.count})`}</span>
      </>
    );
    return (
      <>
        <h1>Genre</h1>
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

export default GenreFacet