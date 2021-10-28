import React, { useState, useEffect } from 'react';
import register from '../../services/register'
import { Button, TextField, makeStyles, Typography, Grid, Container, FormControlLabel, Checkbox } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  buttons: {
    marginRight: theme.spacing(2)
  },
  button1: {
    display: 'flex',
    justifyContent: 'right'
  },
  error: {
    marginTop: theme.spacing(2),
  }
}))

const RegisterForm = ({ setRegisterCompleted }) => {
  const [error, setError] = useState("")
  const [registerForm, setRegisterForm] = useState({
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: ''
  })

  const classes = useStyles()

  useEffect(() => {
  }, [registerForm]);

  const setErrorandClear = (msg, time) => {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, time)
  }

  const handleFormChange = e => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
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
      setErrorandClear(res.msg, 5000)
    }
  }

  const resetField = () => {
    setRegisterForm({
      email: '',
      emailConfirm: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper} >
        
        <Typography className={classes.header} component="h1" variant="h5"> Rekisteröidy</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" fullWidth label="Etunimi"
                required={true} type="text" name="firstName"
                value={registerForm.firstName} onChange={(e) => handleFormChange(e)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" fullWidth label="Sukunimi"
                required={true} type="text" name="lastName"
                value={registerForm.lastName} onChange={(e) => handleFormChange(e)} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth required={true} label="Sähköpostiosoite" type="email" name="email" value={registerForm.email} onChange={(e) => handleFormChange(e)} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth required={true} label="Vahvista sähköpostiosoite" type="email" name="emailConfirm" value={registerForm.emailConfirm} onChange={(e) => handleFormChange(e)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" fullWidth required={true} label="Salasana" type="password" name="password" value={registerForm.password} onChange={(e) => handleFormChange(e)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" fullWidth required={true} label="Toista salasana" type="password" name="password" value={registerForm.password} onChange={(e) => handleFormChange(e)}/>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel required={true}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={`Olen lukenut ja ymmärtänyt palvelun käyttöehdot`}
              />
            </Grid>
            <Grid item xs={12} className={classes.button1}>
              <Button className={classes.buttons} variant="contained" color="default" onClick={resetField}>Nollaa</Button> 
              <Button variant="contained" type="submit" color="primary">Rekisteröidy</Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {error ? <Alert severity="error" className={classes.error}>{error}</Alert> : null}
    </Container>
  );
}

export default RegisterForm;