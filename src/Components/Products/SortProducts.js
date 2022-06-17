import React, { useState, useEffect } from "react";
import Dropdown from "../DropDown";



function SortProducts({ dropdownOptions = [] }) {
    const [selected, setSelected] = useState(dropdownOptions[0]);

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    const onSelectedChange = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    };

    return (
        <div>
            <Dropdown
                label={"Sort by:"}
                dropdownOptions={dropdownOptions}
                selected={selected}
                onSelectedChange={onSelectedChange}
            />
        </div>
    );
}

export default SortProducts;