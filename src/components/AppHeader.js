import React from "react";

// Material UI
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 50,
      padding: 20,
      border: 1,
      borderColor: "black",
      borderWidth: 5,
      borderStyle: "solid",
      fontWeight: "bold"
    }
  })
);

export default function AppHeader() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant="h3" align="center">
      React Movies App
    </Typography>
  );
}
