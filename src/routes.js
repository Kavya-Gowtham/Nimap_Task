import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import history from "./history";
import Login from "./Login/Login";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default Routes;
