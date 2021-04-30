import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import Home from "./Components/Home/Home";
import Tasks from "./Components/Task/Tasks";
import User from "./Components/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Tasks" component={Tasks}></Route>
          <Route path="/User" component={User}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
