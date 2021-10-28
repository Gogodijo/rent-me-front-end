import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import ColumnLink from "./Columnlink";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      margin: theme.spacing(0, 0, 1, 0)
    },
    link: {
      '&:hover': {
        cursor: 'pointer',
      }
    }
  }
})

const links = [{
  display: 'Käyttöehdot',
  destination: 'tos'
},
{
  display: 'Saavutettavuus',
  destination: 'accessibility'
}
]

const CenterColumn = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h5" className={classes.header}>Linkit</Typography>
      {links.map((link) => <ColumnLink key={links.display} linkDisplay={link.display} linkDestination={link.destination} />)}
    </div>
  )
}

export default CenterColumn