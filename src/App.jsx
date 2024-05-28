import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";

import Search from "./components/users/Search";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            {/* Add this line to specify the routing*/}
            <Route exact path="/user/:id" component={User} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
