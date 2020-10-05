import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import RegisteredActivity from './components/RegisteredActivity/RegisteredActivity';
import Admin from './components/Admin/Admin';
import Event from './components/Event/Event';
import AllActivity from './components/AllActivity/AllActivity';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container" >
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <Route path="/registeredActivity">
              <RegisteredActivity></RegisteredActivity>
            </Route> */}
                        <Route path="/allActivity">
              <AllActivity></AllActivity>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/event">
              <Event></Event>
            </Route>
            <PrivateRoute path="/register/:activityName/:activityImage">
              <Register></Register>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;

