import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, makeStyles, CircularProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import CheckIcon from '@material-ui/icons/Check';
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../redux/actions/userActions'
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles(theme => ({
  forgottenText: {
    padding: theme.spacing(2, 0),
    '&:hover': {
      cursor: 'pointer',
    }
  },
  registerText: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
  header: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(0, 0, 1, 0),
    textAlign: 'center'
  },
  submitButton: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  submitButton2: {
    width: '100%',
  },
  rotator : {
    height:'100%'
  },
  container: {
    padding: theme.spacing(2),
  },
}))

const LoginForm = ({ setPasswordForgotten, closePopUp }) => {

  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const classes = useStyles()
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.authentication)

  const setErrorandClear = (msg, time) => {
    setError(msg)
    setTimeout(() => {
      setError("")
      dispatch(userActions.reset())
    }, time)
  }

  useEffect(() => {
    if (user.message && !user.loggedIn) {
      setErrorandClear(user.message, 3000)
    }
    return () => {
      if (closePopUp && (user.loggedIn ) && !error ) {
        closePopUp()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleFormChange = async e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  const handleSubmit = async event => {
    event.preventDefault()
    dispatch(userActions.login(loginForm.email, loginForm.password))
  }
  const handleregisterTextClick = () => {
    history.push('/register')
    if (closePopUp) closePopUp()
  }
  const returnIcon = () => {
    if (user.loggingIn && user.user) {
      return (<CircularProgress className={classes.rotator} />)
    }
    if (user.loggedIn && user.user) {
      return (<CheckIcon color="primary" style={{ fontSize: 30 }} />)
    }
  }

  const handleLogin = d => {
    dispatch(userActions.loginGoogle(d))
  }
  const handleLoginFailure = e => {
    return
  }
  return (
    <div className={classes.container}>

      <Typography className={classes.header} variant="h6">Kirjaudu sisään</Typography>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField tabindex="1" autoFocus margin='dense' variant="outlined" type="email" label="Sähköposti" required={true} name="email" value={loginForm.email} onChange={e => handleFormChange(e)}></TextField>
          </div>
          <div>
            <TextField tabindex="2" margin='dense' variant="outlined" label="Salasana" required={true} type="password" name="password" value={loginForm.value} onChange={e => handleFormChange(e)}></TextField>
          </div>
          <div className={classes.submitButton}>
            <Button className={classes.submitButton2} disabled={!!error || !!user.loggingIn || !!user.loggedIn} variant="contained" type="submit" color="primary">Kirjaudu</Button>
            {returnIcon()}
          </div>
        </form>
        {error ? <Alert severity="error">{error}</Alert> : null}
      <GoogleLogin
      clientId={""} 
        buttonText="Kirjaudu Googlen avulla"
        onSuccess={handleLogin}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
        className={classes.submitButton2}
        disabled= {!!error || !!user.loggingIn || !!user.loggedIn}
        />
      </div>
      <div >
        <Typography className={classes.forgottenText} variant="body1" onClick={() => setPasswordForgotten(p => !p)}>Salasana unohtunut?</Typography>
        <Typography className={classes.registerText} variant="body1" onClick={handleregisterTextClick}>Rekisteröidy käyttäjäksi</Typography>
      </div>

    </div>
  );
}

export default LoginForm;