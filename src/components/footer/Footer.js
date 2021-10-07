import { Container} from '@material-ui/core';
import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    background:'darkgray',
    minHeight: '15vh',
    paddingTop:'30px',
    paddingBottom:'20px'
  }
}))

const Footer = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
    <Container maxWidth="md" >
      <Box />
    Footer testi setti
    </Container>
    </div>
  )
}

export default Footer