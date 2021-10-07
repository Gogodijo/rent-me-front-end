import React from 'react'
import {
  InputBase, makeStyles, fade
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid white`,
    backgroundColor: fade("#d4d3cf", 0.15),
    '&:hover': {
      backgroundColor: fade("#d4d3cf", 0.25),
    },
    '&:focus-within': {
      border: `1px solid ${fade("#000000", 0.5)}`,

    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const SearchBar = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Haku..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default SearchBar