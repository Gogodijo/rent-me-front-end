import React from 'react';
import {
  AppBar, Toolbar,  makeStyles, Container
} from '@material-ui/core';
import SearchBar from './SearchBar';
import ProfileSelector from './ProfileSelector';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: 'inherit',
  },
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div style={{ background: 'white' }} >
      <AppBar position="static" variant="elevation" className={classes.appBar} color="inherit">
        <Container maxWidth="md">
          <Toolbar variant="regular" disableGutters={true} className={classes.grow} >
            <Logo />
            <SearchBar />
            <ProfileSelector />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;