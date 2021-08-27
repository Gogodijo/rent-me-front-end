import React, { useState, useEffect } from 'react';
import { Input, InputLabel, FormControl, Button } from '@material-ui/core'
import resetPassword from '../../services/resetPassword';

const ForgottenPassword = (props) => {
  const [email, setEmail] = useState('')
  const [reply, setReply] = useState('')

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
      <h2>Salasanan palautus</h2>
      <p>Jos olet unohtanut salasanasi anna tilisi sähköpostiosoite, johon lähetämme ohjeet salasanan palauttamista varten</p>
      {reply ? <p>{reply}</p> :<form onSubmit={handleSubmit}>
        <div>
          <FormControl required={true} margin="normal">
            <InputLabel htmlFor="email">Sähköposti</InputLabel>
            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
          </FormControl>
        </div>
        <Button variant="contained" type="submit" color="primary">Lähetä</Button>
      </form> 
      }

    </>
  )
}

export default ForgottenPassword