import React, { useEffect, useState } from 'react'
import { makeStyles, fade, Avatar } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Menu from '@material-ui/core/Menu';
import Login from '../login/Login';
import { useSelector } from 'react-redux'
import LoggedInMenu from './LoggedInMenu';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid transparent`,
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    '&fosuc-within': {
      backgroundColor: fade("#d4d3cf", 0.25)
    },
  },
  menuContainer: {
    padding: theme.spacing(1, 2, 1, 2),
    maxWidth: '30ch',
  },
  flip: {
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create()
  },
  transition: {
    transition: theme.transitions.create()
  },
  arrow: {
    width: '15px',
    height: '15px',
    transform: ' rotate(-135deg)',
    backgroundColor: 'inherit',
    position: 'absolute',
    right: '34px',
    top: '-7px',
    zIndex: '-5',
    boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 2px 2px 3px 0px rgb(0 0 0 / 10%);'
  },
  clip: {
    transform: 'translateY(10px)',
    '& > div ': {
      overflow: 'visible'
    }
  },
  small: {
    width: '31px',
    height: '31px',
    margin: '0 2px 0 2px',
    fontSize: '12px',
    backgroundColor: 'lightblue',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    color:'black'
  },
}))

const ProfileSelector = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles()
  const user = useSelector(state => state.authentication)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if(event?.key === "Tab"){
      return
    }
    setAnchorEl(null);
  };

  return (
    <div >
      <div className={classes.container} onClick={handleMenu}>
       { (user?.loggedIn && user.user) ? <Avatar className={classes.small}> {user?.user?.user?.firstName[0] + user?.user?.user?.lastName[0] }</Avatar> : <AccountCircleIcon  style={{fontSize:'36px'}} />} 
        {!!anchorEl ? <ExpandLessIcon className={classes.transition} /> : <ExpandLessIcon className={classes.flip} />}
      </div>

      <Menu
        className={classes.clip}
        id="user-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <div className={classes.arrow}></div>
        <div className={classes.menuContainer} >

          {(user?.loggedIn && user.user) ? <LoggedInMenu closePopUp={handleClose} /> : <Login autofocus closePopUp={handleClose} />}

        </div>

      </Menu>
    </div>
  )
}

export default ProfileSelector