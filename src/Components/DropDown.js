import React from "react";
import "./../SCSS/_customselect.scss"

const Dropdown = ({ label, dropdownOptions, selected, onSelectedChange }) => {
  return (
    <div className="ui form">
      {" "}
      <div className="field">
        <label className="label">{label} &nbsp;</label>

        <select
          onChange={(e) => onSelectedChange(e)}
          className="_customselect"
        >
          {dropdownOptions.map(({ label, value }) => (
            <option key={value + label} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;