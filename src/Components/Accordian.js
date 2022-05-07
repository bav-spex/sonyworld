import React,{useState} from "react";
import grey_down_arrow from "./../Assets/Icon/grey_down_arrow.svg";
import grey_up_arrow from "./../Assets/Icon/grey_up_arrow.svg";
import "./../SCSS/_accordian.scss";
function Accordian({ data, isDescription }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="accordian__block">
      <div className="accordian__header__block" onClick={()=>{setIsOpen(!isOpen)}}>
        <p className="accordian__title">{data.title}</p>
        <img src={isOpen ? grey_up_arrow : grey_down_arrow} alt="" className="accordian__arrow__icon" />
      </div>
      <div className={isOpen ? "accordian__detail__block":"accordian__detail__block__disable"}>
        {isDescription ? (
          <div className="accordian__description__block">
            <p className="data__title">Description</p>
            <p className="accordian__detail__description">{data.description}</p>
          </div>
        ) : (
          ""
        )}
        <div className="accordian__data__block">
          <p className="data__title">{data.keyValueTitle}</p>
          <div className="accordian__keyValue__block">
            {data.keyValueData.map((keyValue, keyValueIndex) => {
              return (
                <div className="keyValue row" key={keyValue.id}>
                  <p className="col-3 key">{keyValue.key}</p>
                  <p className="col-9 value">{keyValue.value}</p>
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
