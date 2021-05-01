import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Tasks from "./Task/Tasks";
import User from "./User/User";
import Login from "../Login/Login";
function Navigationbar() {
  return (
    <Router>
      <ul className="navbar">
        <h1 className="logo">LOGO</h1>
        <li>
          <Link className="tab" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="tab" to="/Tasks">
            Tasks
          </Link>
        </li>
        <li>
          <Link className="tab" to="/User">
            User
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/Tasks" component={Tasks}></Route>
        <Route path="/User" component={User}></Route>
      </Switch>
    </Router>
  );
}

export default Navigationbar;
