import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress size={100} />
    </div>
  );
}

export default Loader;
