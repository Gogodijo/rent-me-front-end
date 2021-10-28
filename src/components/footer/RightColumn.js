import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      margin: theme.spacing(0, 0, 1, 0)
    }
  }
})

const RightColumn = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5" className={classes.header}>Yhteystiedot</Typography>
      <Typography variant="body2">Rent Me oy</Typography>
      <Typography variant="body2">Y-tunnus 1234567-1</Typography>
      <Typography variant="body2">Esimerkkiosoite 1, 20500 Turku</Typography>
      <Typography variant="body2">asiakaspalvelu@nnn.com</Typography>
      <Typography variant="body2">+358123465432</Typography>
    </div>
  )
}

export default RightColumn