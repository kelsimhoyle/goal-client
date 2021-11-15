import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddGoal from "./pages/User/AddGoal";
import Dashboard from "./pages/User/Dashboard";
import Login from "./pages/User/Login";
import SignUp from "./pages/User/SignUp";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
        <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id" component={Dashboard} />
            <Route exact path="/user/addgoal/:id" component={AddGoal} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
      </UserContextProvider>
  );
};

export default App;
