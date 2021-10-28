import React from "react";
import { Typography, makeStyles} from "@material-ui/core";
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => {
  return {
    link: {
      '&:hover': {
        cursor: 'pointer',
      }
    }
  }
})

const ColumnLink = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Typography variant="body2" className={classes.link} onClick={e => history.push(`/${props.linkDestination}`)}>{props.linkDisplay}</Typography>
  )
}

export default ColumnLink