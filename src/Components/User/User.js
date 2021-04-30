import React from "react";
import "./User.css";

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
      <button>Logout</button>
    </div>
  );
}
export default User;
