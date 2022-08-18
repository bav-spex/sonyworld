import React from "react";
import "./../../../SCSS/ProductListPage/_facets.scss";
import SingleFacet from "./SingleFacet";

function PriceFacet({ facetData, facetKey, onFilter }) {
  // console.log(facetData, facetKey);
  // console.log(facetData[facetKey]);
  const constructParamFn = (item) => `${item.from}-${item.to}`;
  const childrenFn = (item) => (
    <>
      <label>{`${item.from}${item.isMax ? "+" : ` - ${item.to}`}`}</label>
      <span>{`(${item.count})`}</span>
    </>
  );
  const handleChange = (facetKey, item) => {
    onFilter(
      facetKey,
      constructParamFn(item),
      facetData[facetKey].multiple_selectable
    );
  };
  return (
    <div className="main__facets__block">
      <h1 className="main__facets__title">Price</h1>
      {facetData[facetKey]?.collection?.map((item, itemIndex) => {
        return (
          // <SingleFacet
          //   constructParamFn={constructParamFn}
          //   childrenFn={childrenFn}
          //   key={`${Math.random(Math.random() * 100) + 1}${facetKey}`}
          //   // key={itemIndex}
          //   facetData={facetData}
          //   facetKey={facetKey}
          //   item={item}
          //   onFilter={onFilter}
          // />
          <div
            className="facet__block"
            key={itemIndex}
          >
            <input
              // key={`${Math.random(Math.random() * 100) + 1}${facetKey}`}
              type="checkbox"
              className="preferences__select__input__check"
              name="color"
              // value={item.key}
              defaultChecked={false}
              onChange={() => handleChange(facetKey, item)}
            />
            <p
              className="facet__item__label"
              // onClick={() => onFilter(facetKey, constructParamFn(item), facetData[facetKey].multiple_selectable)}
            >
              {childrenFn(item)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PriceFacet;
