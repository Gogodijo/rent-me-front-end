import './App.css';
import React from 'react';
import Confirm from './components/emailconfirm/Confirm'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import Home from './Pages/Home/Home';
import Register from './components/register/Register';
import PasswordResetPage from './Pages/PasswordReset/PasswordResetPage';
import { Container, Divider, makeStyles, } from '@material-ui/core';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from './Pages/Profile/Profile';
import LoginPage from './Pages/loginPage/LoginPage';
import {  useSelector } from 'react-redux'
import Tos from './Pages/Tos/Tos';
import Acc from './Pages/Acc/Acc';
import ScrollToTop from './ScrollToTop';

const useStyles = makeStyles({
  container: {
    background: 'white',
    minHeight: '80vh'
  }
})

function App() {
  const classes = useStyles()
  const user = useSelector(state => state.authentication)

  return (
    <>  
    <Router>
      <ScrollToTop />
      <Header />
      <Divider />
      <Container className={classes.container} maxWidth="md">
      
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
              <LoginPage />
            </Route>
            <Route path="/profile">
            {user?.user?.user ? <Profile /> : <LoginPage /> }  
            </Route>
            <Route path="/tos">
              <Tos />
            </Route>
            <Route path="/accessibility">
              <Acc />
            </Route>
            <Redirect from='*' to='/' />
          </Switch>
      
      </Container>
      <Footer />
     </Router>
     </> 
  );
}

export default App;
