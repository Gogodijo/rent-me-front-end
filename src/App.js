import './App.css';
import React, { useState, useEffect } from 'react';
import Confirm from './components/emailconfirm/Confirm'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"
import Home from './Pages/Home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import PasswordResetPage from './Pages/PasswordReset/PasswordResetPage';
import { Container, Divider, makeStyles, } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const useStyles = makeStyles({
  container: {
    background: 'white',
    height: '100vh'
  }
})

function App() {
  const classes = useStyles()


  return (
    <>
      <Header />
       <Divider  />
      <Container className={classes.container} maxWidth="md">
        <Router>
          <Switch>
            <Route exact path="/confirm/:id">
              <Confirm />
            </Route>
            <Route exact path="/resetpassword/:id">
              <PasswordResetPage />
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
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
