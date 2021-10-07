import React, {useState} from 'react';
import LoginForm from './LoginForm'
import ForgottenPassword from './ForgottenPassword';

const Login = (props) => {
 const [passwordForgotten, setPasswordForgotten] =  useState(false)

 return (
   <>
   {passwordForgotten?<ForgottenPassword setPasswordForgotten={setPasswordForgotten}></ForgottenPassword>:
   <LoginForm setPasswordForgotten={setPasswordForgotten} closePopUp={props.closePopUp}></LoginForm>}
   </>
 )
}

export default Login

