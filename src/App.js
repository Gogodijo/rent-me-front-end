import './App.css';
import React, { useState, useEffect } from 'react';
import Confirm from './components/emailconfirm/Confirm'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/confirm/:id">
        <Confirm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}

export default App;
