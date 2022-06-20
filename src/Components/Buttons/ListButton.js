import React from "react";
import "./../../SCSS/components/Buttons/_listButton.scss";
import { ReactComponent as ListIcon } from "./../../assets/Icon/list_icon.svg";

function ListButton({ isActive }) {
  console.log(isActive);
  return (
    <div
      className={`_listButton__container ${isActive ? "active" : "inactive"}`}
    >
      <ListIcon />
    </div>
  );
}

export default ListButton;