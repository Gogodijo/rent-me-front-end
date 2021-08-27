import React, { useState, useEffect } from 'react';
import register from '../../services/register'
import { FormControl,Button, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

const RegisterForm = ({ setRegisterCompleted }) => {
  const [error, setError] = useState("")
  const [registerForm, setRegisterForm] = useState({
    email: '',
    emailConfirm: '',
    password: '',
    name: ''
  })

  useEffect(() => {
  }, [registerForm]);

  const setErrorandClear = (msg, time) => {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, time)
  }

  const handleFormChange = event => {
    setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const res = await register(registerForm)
    console.log(res)
    if (res.status) {
      setRegisterCompleted(true)
      return
    }
    else {
      setErrorandClear(res.msg,3000)
    }
  }

  return (
    <>
    {error ? <Alert severity="error">{error}</Alert> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl required="true" margin="normal">
            <TextField label="Nimi" required="true" type="text" name="name" value={registerForm.name} onChange={(e) => handleFormChange(e)} />
          </FormControl>
        </div>
        <div>
          <FormControl required="true" margin="normal">
            <TextField required="true" label="Sähköpostiosoite" type="email" name="email" value={registerForm.email} onChange={(e) => handleFormChange(e)} />
          </FormControl>
        </div>
        <div>
          <FormControl required="true" margin="normal">
            <TextField required="true" label="Salasana" type="password" name="password" value={registerForm.password} onChange={(e) => handleFormChange(e)} />
          </FormControl>
        </div>
        <Button variant="contained" type="submit" color="primary">Rekisteröidy</Button>
      </form>
    </>
  );
}

export default RegisterForm;