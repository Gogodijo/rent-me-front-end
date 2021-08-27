import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import confirm from '../../services/confirm'
import {Link} from 'react-router-dom'

const Confirm = () => {
  const [confirmed, setConfirmed] = useState({status:'loading'})
  const {id} = useParams()
  useEffect( () => {
    async function fetchData(){
      const res = await confirm(id)
      if(!res){
        setConfirmed({status:'failure'})
        return
      }
      setConfirmed({status:'success'})
    }
    fetchData()
  }, [id]);
  if(confirmed.status === 'loading'){
    return (
      <>
      Confirming email... Wait...
      </>
    )
  }
  if(confirmed.status === 'failure'){
    return (
      <>
      Email confirmation failed. Please try again
      </>
    )
  }
  if(confirmed.status === 'success')
  return ( 
    <>
    Email confirmed. Return to main page and login <Link to="/">here</Link>
    </>
   );
}
 
export default Confirm;