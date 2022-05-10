import React, { useState } from "react";
import grey_down_arrow from "./../Assets/Icon/grey_down_arrow.svg";
import grey_up_arrow from "./../Assets/Icon/grey_up_arrow.svg";
import "./../SCSS/_accordian.scss";
import Heading1 from "./Font/Heading1";
import Heading3 from "./Font/Heading3";
import Heading7 from "./Font/Heading7";
import Text3 from "./Font/Text3";
function Accordian({ data, isDescription }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="accordian__block">
      <div
        className="accordian__header__block"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Heading1 text={data.title} />
        <img
          src={isOpen ? grey_up_arrow : grey_down_arrow}
          alt=""
          className="accordian__arrow__icon"
        />
      </div>
      <div
        className={
          isOpen
            ? "accordian__detail__block"
            : "accordian__detail__block__disable"
        }
      >
        {isDescription ? (
          <div className="accordian__description__block">
            <Heading3 text="Description" marginBottom={10} />
            <Text3 text={data.description} marginBottom={20} />
          </div>
        ) : (
          ""
        )}
        <div className="accordian__data__block">
          <Heading3 text={data.keyValueTitle} marginBottom={20} />
          <div className="accordian__keyValue__block">
            {data.keyValueData.map((keyValue, keyValueIndex) => {
              return (
                <div className="keyValue row" key={keyValue.id}>
                  <p className="col-3 key">
                    <Heading7 text={keyValue.key} marginBottom={10} />
                  </p>
                  <p className="col-9 value">
                    <Text3 text={keyValue.value} marginBottom={10} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
