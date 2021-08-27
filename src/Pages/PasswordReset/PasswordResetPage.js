import React, {useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import PasswordResetForm from '../../components/login/PasswordResetForm';

const PasswordResetPage = () => {
  const {id} = useParams()
  return(
    <>
    <PasswordResetForm id={id}></PasswordResetForm>
    </>
  )
}

export default PasswordResetPage