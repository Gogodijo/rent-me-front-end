import React from 'react';
import {  makeStyles,  Container,} from '@material-ui/core'
import Login from '../../components/login/Login';

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

}))

const LoginPage = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
      <Login />
      </div>
    </Container>
  )
}

export default LoginPage;