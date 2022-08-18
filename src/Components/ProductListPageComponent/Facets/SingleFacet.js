import React, { useEffect, useState } from "react";
import { SET__WISHLIST__COUNT } from "../../../redux/actionType";

function SingleFacet({
  constructParamFn,
  childrenFn,
  facetData,
  facetKey,
  item,
  onFilter,
}) {
  const [check, setCheck] = useState(false);
const [count,setCount] = useState(0)
  const handleChange = (facetKey, item) => {
    setCheck(!check);
    setCount(count+1)
  
    onFilter(
      facetKey,
      constructParamFn(item),
      facetData[facetKey].multiple_selectable
    );
  };

  useEffect(()=>{
    if(count ===0){
      onFilter(
        facetKey,
        constructParamFn(item),
        facetData[facetKey].multiple_selectable
      );
    }
  },[count])
  // console.log(check);
  
  return (
    <div className="facet__block" key={`${Math.random()}${facetKey}`}>
      <input
        key={`${Math.random()}${facetKey}`}
        type="checkbox"
        className="preferences__select__input__check"
        name="color"
        // value={item.key}
        checked={check}
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
}

export default SingleFacet;
