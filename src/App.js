import React, { useState } from "react";
import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login/Login";
import LoginValues from "./config";
import history from "./history";

function App() {
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
      history.push("/home");
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
