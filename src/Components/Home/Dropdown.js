import React, { useState } from "react";
import "./Home.css";
import message from "./Message";

function Dropdown(props) {
  console.log(props);

  //State declaration
  const [dropdownItems] = useState([
    {
      label: "Select Dropdown",
      value: "dropdown0",
    },
    {
      label: "Dropdown1",
      value: "dropdown1",
    },
    {
      label: "Dropdown2",
      value: "dropdown2",
    },
    {
      label: "Dropdown3",
      value: "dropdown3",
    },
  ]);

  const [dropstate, setDropState] = useState("");

  //functions & event listeners
  function dropdownHandler(e) {
    setDropState(e.target.value);
    props.parentCallback(e.target.value);
  }
  return (
    <div>
      <select
        id="select"
        className="dropdown"
        value={dropstate}
        onChange={dropdownHandler}
      >
        {dropdownItems.map((item) => (
          <option id="list" key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
