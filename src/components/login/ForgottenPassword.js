import React, { useState} from 'react';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core'
import resetPassword from '../../services/resetPassword';

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: "flex",
    justifyContent:'space-between',
  },
  header: {
    margin: theme.spacing(2,0),
  }
}))

const ForgottenPassword = (props) => {
  const [email, setEmail] = useState('')
  const [reply, setReply] = useState('')

  const classes = useStyles()

  const handleSubmit = async e => {
    e.preventDefault()
    setEmail('')
    setReply('Odota hetki....')
    const res = await resetPassword(email)
    if(res.status) {
      setReply(res.msg)
    }
    else {
      setReply(res.msg)
    }
    setTimeout(() => {
      setReply('')
    }, 10000)
  }

  return (
    <>
      <Typography className={classes.header} variant="h6">Salasanan palautus</Typography>
      <Typography variant="body1">Jos olet unohtanut salasanasi anna tilisi sähköpostiosoite, johon lähetämme ohjeet salasanan palauttamista varten</Typography>
      {reply ? <p>{reply}</p> :<form onSubmit={handleSubmit}>
        <div>
            <TextField label="Sähköposti" required={true} margin='dense' variant="outlined" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className={classes.buttonContainer}>
        <Button variant ="contained" onClick={()=> props.setPasswordForgotten(p => !p)} color="default">Takaisin</Button>
        <Button variant="contained" type="submit" color="primary">Lähetä</Button>
        </div>
      </form> 
      }

    </>
  )
}

export default ForgottenPassword