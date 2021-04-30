import React, { useState } from "react";
import "./Home.css";

function Dropdown() {
  const [dropstate, setDropState] = useState("");
  return (
    <div>
      <select
        className="dropdown"
        value={dropstate}
        onChange={(e) => {
          setDropState(e.target.value);
        }}
      >
        <option value="dropdown1">Dropdown1</option>
        <option value="dropdown2">Dropdown2</option>
        <option className="dropdown-list" value="dropdown3">
          Dropdown3
        </option>
        <option value="dropdown4">Dropdown4</option>
      </select>
    </div>
  );
}
export default Dropdown;
