import { MenuItem } from '@material-ui/core';
import React from 'react';
import { useDispatch} from 'react-redux'
import { userActions } from '../../redux/actions/userActions'
import {useHistory} from 'react-router'

function LoggedInMenu({ closePopUp }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleprofileClick = () => {
    closePopUp()
    history.push('/profile')
  }
  const handleLogOut = () => {
    dispatch(userActions.logout())
  }
  return (
    <>
      <MenuItem onClick={handleprofileClick}>Profiili</MenuItem>
      <MenuItem onClick={handleLogOut}>Kirjaudu ulos</MenuItem>
      <MenuItem onClick={closePopUp}>Sulje valikko</MenuItem>

    </>
  );
}

export default LoggedInMenu;