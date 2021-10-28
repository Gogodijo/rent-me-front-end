import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import confirm from '../../services/confirm'
import { Link } from 'react-router-dom'

async function fetchData(setConfirmed, id) {
  const res = await confirm(id)
  if (!res) {
    setConfirmed({ status: 'failure' })
    return
  }
  setConfirmed({ status: 'success' })
}

const loading = () => {
  return (
    <>  Varmistetaan sähköpostia.... </>
  )
}
const failed = () => {
  return (
    <>Sähköpostin varmistaminen epäonnistui. Yritä uudestaan</>
  )
}
const success = () => {
  return (
    <>Sähköposti varmistettu. Voit nyt palata etusivulle ja kirjautua sisään <Link to="/">tästä</Link></>
  )
}

const Confirm = () => {

  const [confirmed, setConfirmed] = useState({ status: 'loading' })
  const { id } = useParams()

  useEffect(() => {
    fetchData(setConfirmed, id)
  }, [id]);

  if (confirmed.status === 'loading') { return loading() }
  if (confirmed.status === 'failure') { return failed()}
  if (confirmed.status === 'success') { return success()}
}

export default Confirm;