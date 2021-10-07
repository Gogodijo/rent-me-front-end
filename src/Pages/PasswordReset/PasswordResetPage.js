import React from 'react';
import { useParams, } from 'react-router-dom'
import { makeStyles, Container, Typography, } from '@material-ui/core'
import PasswordResetForm from '../../components/login/PasswordResetForm';


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

const PasswordResetPage = () => {
  const classes = useStyles()
  const { id } = useParams()
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Typography variant="h4">Salasanan vaihtaminen</Typography>
        <Typography variant="body1">Anna tilisi uusi salasana. Salasanan on oltava vähintään 8 merkkiä pitkä </Typography>
        <PasswordResetForm className={classes.form} id={id}></PasswordResetForm>
      </div>
    </Container>
  )
}

export default PasswordResetPage