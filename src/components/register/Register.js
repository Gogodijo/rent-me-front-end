import React, { useState,  } from 'react';
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'
import {  makeStyles, Typography,  Container,} from '@material-ui/core'

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
  }
}))

const Register = () => {
  const [registerCompleted, setRegisterCompleted] = useState(false)

  const classes = useStyles()

  if (!registerCompleted) {
    return (<RegisterForm setRegisterCompleted={setRegisterCompleted} />
    );
  }
  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Typography className={classes.header} component="h1" variant="h5"> Rekisteröidy</Typography>
        <Typography variant="body1"> Rekisteröityminen suoritettu. Lähetimme sinulle sähköpostia osoitteesi varmistamiseksi.<br />
          Voit palata etusivulle <Link to="/">tästä</Link></Typography>
      </div>
    </Container>
  )
}

export default Register;