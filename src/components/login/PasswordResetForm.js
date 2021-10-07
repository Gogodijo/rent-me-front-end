import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField } from '@material-ui/core'
import { makeStyles, } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    marginTop: theme.spacing(3)
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
}))

const PasswordResetForm = ({ id }) => {
  const [passwordForm, setPasswordForm] = useState({ password: '', passwordConfirm: '' })
  const [buttonDisabled, setButtonDisabled] = useState([true, ""])
  const classes = useStyles()
  useEffect(() => {
    if (passwordForm.password !== '' || passwordForm.passwordConfirm !== '') {
      if (passwordForm.password.length < 8) return setButtonDisabled([true, "Salasanan on oltava yli 8 merkkiä pitkä"])
      if (passwordForm.password !== passwordForm.passwordConfirm) return setButtonDisabled([true, "Salasanat eivät täsmää"])
      return setButtonDisabled([false, ""])
    }
    return setButtonDisabled([true, ""])
  }, [passwordForm])

  const handleFormChange = e => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

  }
  return (
    <div className={classes.formContainer}>

      <form onSubmit={handleSubmit}>
        <div>
          <TextField margin="dense" variant="outlined" required={true}
            label="Uusi Salasana" error={buttonDisabled[1]}
            helperText={buttonDisabled[1]} type="password"
            name="password" value={passwordForm.password}
            onChange={e => handleFormChange(e)} />
        </div>
        <div>
          <TextField margin="dense" variant="outlined" required={true}
            label="Toista salasana" error={buttonDisabled[1]}
            type="password" name="passwordConfirm"
            value={passwordForm.passwordConfirm}
            onChange={e => handleFormChange(e)} />
        </div>
        <div>
          <Button variant="contained" type="submit" className={classes.button}
            color="primary" disabled={buttonDisabled[0]}>Tallenna</Button>
        </div>
      </form>
    </div>
  )
}

export default PasswordResetForm