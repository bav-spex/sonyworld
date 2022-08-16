import React, { useEffect, useState } from "react";

function SingleFacet({
  constructParamFn,
  childrenFn,
  facetData,
  facetKey,
  item,
  onFilter,
}) {
  useEffect(() => {
    setCheck(false);
  }, []);
  const [check, setCheck] = useState(false);
  const handleChange = (facetKey, item) => {
    setCheck(!check);
    onFilter(
      facetKey,
      constructParamFn(item),
      facetData[facetKey].multiple_selectable
    );
  };
  return (
    <div className="facet__block" key={`${Math.random()}${facetKey}`}>
      <input
        key={`${Math.random()}${facetKey}`}
        type="checkbox"
        className="preferences__select__input__check"
        name="color"
        // value={item.key}
        defaultChecked={check}
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
}

export default SingleFacet;
