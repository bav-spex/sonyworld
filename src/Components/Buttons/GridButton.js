import React from "react";
import "./../../SCSS/components/Buttons/_gridButton.scss";
import { ReactComponent as GridIcon } from "./../../Assets/Icon/grid_icon.svg";

function GridButton({ isActive }) {
  console.log(isActive);
  return (
    <div
      className={`_gridButton__container ${isActive ? "active" : "inactive"}`}
    >
      <GridIcon />
    </div>
  );
}

export default GridButton;