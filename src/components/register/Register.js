import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm'
import {Link} from 'react-router-dom'

const Register = () => {
  const [registerCompleted, setRegisterCompleted] = useState(false)
  if(!registerCompleted){
      return (  <RegisterForm setRegisterCompleted={setRegisterCompleted} />
   );
  }
  return (
    <>
    <div>
      Rekisteröityminen suoritettu. Lähetimme sinulle sähköpostia osoitteesi varmistamiseksi<br />
      Voit palata etusivulle <Link to ="/">tästä</Link>
    </div>
    </>
  )
}
 
export default Register;