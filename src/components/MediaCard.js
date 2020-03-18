import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // Make the Image and Content side by side
    flexDirection: "row",
    marginTop: 20,
    maxWidth: 900
  },
  poster: {
    // Max width for posters as the link gets an image with width 300!
    maxWidth: 300
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default function MediaCard({
  posterPath,
  title,
  overview,
  popularity,
  releaseDate
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.poster}
        component="img"
        alt={title}
        image={`${process.env.REACT_APP_IMAGE_API_URL}${posterPath}`}
        title={title}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography gutterBottom variant="body2" component="h3">
          Release Date: {releaseDate} | Popularity: {popularity}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
