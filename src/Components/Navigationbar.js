import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <div>
      <div className="navbar">
        <h1 className="logo">LOGO</h1>
        <div className="nav-link">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Tasks">
            <li>Tasks</li>
          </Link>
          <Link to="/User">
            <li>User</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigationbar;
