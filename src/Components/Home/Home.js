import React, { useState } from "react";
import "./Home.css";
import Dropdown from "./Dropdown";
import BlockInfo from "./BlockInfo";

function Home() {
  const [dropValues, setDropValues] = useState("");
  const dropdownValue = (val) => {
    setDropValues(val);
  };
  return (
    <div>
      <Dropdown parentCallback={dropdownValue} />
      <BlockInfo value={dropValues} />
    </div>
  );
}
export default Home;
