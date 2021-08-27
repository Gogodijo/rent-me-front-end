import React, {useState} from 'react';
import LoginForm from './LoginForm'
import ForgottenPassword from './ForgottenPassword';

const Login = () => {
 const [passwordForgotten, setPasswordForgotten] =  useState(false)

 return (
   <>
   {passwordForgotten?<ForgottenPassword setPasswordForgotten={setPasswordForgotten}></ForgottenPassword>:
   <LoginForm setPasswordForgotten={setPasswordForgotten}></LoginForm>}
   </>
 )
}

export default Login

