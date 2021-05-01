import React from "react";
import "./User.css";
import { BrowserRouter as Link } from "react-router-dom";
function User() {
  function ChangePassword(e) {
    console.log(e.target.name);
    console.log(e.target);
  }
  return (
    <div className="user-profile">
      <form className="user-form">
        <label>
          Username :
          <input type="text" name="name" />
        </label>
        <label>
          Password :
          <input type="Password" name="password" />
        </label>
      </form>
      <button onClick={ChangePassword}>Change Password</button>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}
export default User;
