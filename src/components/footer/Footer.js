import { Container} from '@material-ui/core';
import React from 'react';
import { makeStyles} from '@material-ui/core';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

const useStyles = makeStyles(theme => ({
  container: {
    background:'#dedede',
    minHeight: '15vh',
    paddingTop:'30px',
    paddingBottom:'20px',
    marginTop:'10vh'
  },
  flex: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between'
  }
}))

const Footer = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
    <Container maxWidth="md" className={classes.flex}  >
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </Container>
    </div>
  )
}

export default Footer