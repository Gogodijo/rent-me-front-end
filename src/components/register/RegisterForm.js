import React, { useState, useEffect } from 'react';
import register from '../../services/register'
import { FormControl, Input, InputLabel,Button } from '@material-ui/core'
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
            <InputLabel htmlFor="name">Nimi</InputLabel>
            <Input type="text" name="name" value={registerForm.name} onChange={(e) => handleFormChange(e)}></Input>
          </FormControl>
        </div>
        <div>
          <FormControl required="true" margin="normal">
            <InputLabel htmlFor="email">Sähköpostiosoite</InputLabel>
            <Input type="email" name="email" value={registerForm.email} onChange={(e) => handleFormChange(e)}></Input>
          </FormControl>
        </div>
        <div>
          <FormControl required="true" margin="normal">
            <InputLabel htmlFor="password">Salasana</InputLabel>
            <Input type="password" name="password" value={registerForm.password} onChange={(e) => handleFormChange(e)}></Input>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" color="primary">Rekisteröidy</Button>
      </form>

    </>
  );
}

export default RegisterForm;