import React, { useState } from "react";
import LoginValues from "../../config";
import "./User.css";
function User() {
  const [psdFlag, setPsdFlag] = useState(false);
  const [changepsd, setChangePSD] = useState("");
  const ChangePassword = () => {
    setPsdFlag(true);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setChangePSD(e.target.value);
  };
  return (
    <div className="user-profile">
      <form className="user-form">
        <label>
          Username :
          <input type="text" name="name" value={LoginValues.username} />
        </label>
        {psdFlag ? (
          <div className="flex">
            <label>New Password :</label>
            <input
              type="Password"
              name="password"
              value={changepsd}
              className="password"
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="flex">
            <label>Password :</label>
            <input
              type="Password"
              name="password"
              value={LoginValues.password}
            />
          </div>
        )}
      </form>
      <button onClick={ChangePassword}>
        {psdFlag ? "Save Password" : "Change Password"}
      </button>
      <a href="/">
        <button>Logout</button>
      </a>
    </div>
  );
}
export default User;
