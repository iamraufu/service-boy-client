import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CustomerReview from "./Components/CustomerReview/CustomerReview";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Undefined from "./Components/Undefined/Undefined";
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute.js';
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import Bookings from "./Components/Dashboard/Bookings/Bookings";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/reviews">
            <CustomerReview />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>

          <PrivateRoute path="/bookings/:id">
            <Bookings/>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="*">
            <Undefined/>
          </Route>

        </Switch>

      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
