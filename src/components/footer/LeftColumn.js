import React from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      fontFamily: "'Leckerli One', cursive;",
      '&:hover': {
        cursor: 'pointer',
      }
    }
  }
})

function LeftColumn() {
  const classes = useStyles()
  const history = useHistory()
  
  const handleClick = () => {
    history.push('/')
  }
  return ( 
    <div>
    <Typography onClick={handleClick} variant="h5" className={classes.logo} noWrap>RentMe</Typography>
    </div>
   );
}

export default LeftColumn;