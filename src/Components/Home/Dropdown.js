import React, { useState } from "react";
import "./Home.css";
import message from "./Message";

function Dropdown() {
  const [dropdownItems] = useState([
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

  const [value, setValue] = useState();

  //functions & event listeners
  function dropdownHandler(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <select
        id="select"
        className="dropdown"
        value={value}
        onChange={dropdownHandler}
      >
        {dropdownItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {message.map((data) => (
        <p className="info" key={data.id}>
          {data.Passage}
        </p>
      ))}
    </div>
  );
}
export default Dropdown;
