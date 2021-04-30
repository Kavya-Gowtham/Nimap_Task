import React from "react";
import "../App.css";
function Navigationbar() {
  return (
    <div>
      <div className="navbar">
        <h1 className="logo">LOGO</h1>
        <div className="nav-link">
          <a href="/">Home</a>
          <a href="Tasks">Tasks</a>
          <a href="User">User</a>
        </div>
      </div>
    </div>
  );
}

export default Navigationbar;
