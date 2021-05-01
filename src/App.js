import React, { useState } from "react";
import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Login from "./Login/Login";
import LoginValues from "./config";

function App() {
  let history = useHistory();
  const [authFlag, setAuthFlag] = useState(false);
  const [errFlag, setErrFlag] = useState(false);
  const authCheck = (val) => {
    console.log(val, LoginValues, "val");
    if (
      val.username === LoginValues.username &&
      val.password === LoginValues.password
    ) {
      setAuthFlag(true);
      setErrFlag(false);
    } else {
      setErrFlag(true);
    }
  };
  return (
    <Router>
      <div className="App">
        {authFlag ? (
          <Navigationbar />
        ) : (
          <>
            <Login parentCallback={authCheck} />
            {errFlag && <span className="error">Incorrect Inputs !</span>}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
