import React, { useState, useEffect } from 'react';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import login from '../../services/login'

const Login = () => {
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

    const res = await login(loginForm)

    if(res.status){
      console.log(res.data)

      return
    }
    if(!res.status){
      setErrorandClear(res.msg, 2500)
      return
    }
  }

  return (
    <>
      {error ? <Alert severity="error">{error}</Alert> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl required={true} margin="normal">
            <InputLabel htmlFor="email">Sähköposti</InputLabel>
            <Input type="email" name="email" value={loginForm.email} onChange={e => handleFormChange(e)}></Input>
          </FormControl>
        </div>
        <div>
          <FormControl required={true} margin="normal">
            <InputLabel htmlFor="password">Salasana</InputLabel>
            <Input type="password" name="password" value={loginForm.value} onChange={e => handleFormChange(e)}></Input>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" color="primary">Kirjaudu</Button>
      </form>
    </>
  );
}

export default Login;