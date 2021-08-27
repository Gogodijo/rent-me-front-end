import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles, Container, fade } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
  }))

const Header = () => {
  const classes = useStyles()


  return (
    <div style={{ background: 'white' }} >
      <AppBar position="static" variant="elevation" style={{ boxShadow: 'none' }} color="inherit">
        <Container maxWidth="md">
          <Toolbar variant="regular" disableGutters="true" >
            <Typography variant="h6" noWrap>RentMe</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;