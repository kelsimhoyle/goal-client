import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import AddGoal from "./pages/User/AddGoal";
import Dashboard from "./pages/User/Dashboard";

const App = () => {
  return (
    <UserContextProvider>

      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id" component={Dashboard} />
            <Route exact path="/user/addgoal/:id" component={AddGoal} />
          </Switch>
        </div>
      </Router>
      </UserContextProvider>
  );
};

export default App;
