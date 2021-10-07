import React from 'react'
import {
  makeStyles, Typography
} from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
  logo: {
    fontFamily: "'Leckerli One', cursive;",
    '&:hover': {
      cursor: 'pointer',
    }
  }
}))

const Logo = (props) => {
  const history = useHistory()
  const classes = useStyles()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <Typography onClick={handleClick} variant="h4" className={classes.logo} noWrap>RentMe</Typography>
    </div>
  )
}

export default Logo