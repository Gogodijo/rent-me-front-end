import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  div:{
    display:'flex'
  }
}))

const Acc = () => {

  const classes = useStyles()

  return (
    <div className={classes.div}>

    </div>
  )
}

export default Acc