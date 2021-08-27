import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
//import login from '../../services/login'

const LoginForm = ({setPasswordForgotten}) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const setErrorandClear = (msg, time) => {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, time)
  }

  const handleFormChange = async e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  const handleSubmit = async event => {
    event.preventDefault()

    /*const res = await login(loginForm)

    if(res.status){
      console.log(res.data)
      return
    }
    if(!res.status){
      setErrorandClear(res.msg, 2500)
      return
    }*/
  }

  return (
    <>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl required="true" margin="normal">
            <TextField type="email" label="Sähköposti" required="true" name="email" value={loginForm.email} onChange={e => handleFormChange(e)}></TextField>
          </FormControl>
        </div>
        <div>
          <FormControl required="true" margin="normal">
            <TextField label="Salasana" required="true" type="password" name="password" value={loginForm.value} onChange={e => handleFormChange(e)}></TextField>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" color="primary">Kirjaudu</Button>
      </form>
      <p onClick={()=> setPasswordForgotten(p => !p)}>Salasana unohtunut?</p>
    </>
  );
}

export default LoginForm;