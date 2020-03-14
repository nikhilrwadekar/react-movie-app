import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import CategoryDropdown from "../components/CategoryDropdown";
const style = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});
export class MoviesTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieCategories: [
        { value: "now_playing", label: "Now Playing" },
        { value: "popular", label: "Popular" },
        { value: "top_rated", label: "Top Rated" },
        { value: "upcoming", label: "Upcoming" }
      ],
      movieCategory: "now_playing"
    };
  }

  render() {
    const { classes } = this.props;
    const { movieCategories, movieCategory } = this.state;
    return (
      <>
        <CategoryDropdown
          defaultValue={movieCategory}
          menuItems={movieCategories}
          styles={classes}
        />
      </>
    );
  }
}

export default withStyles(style)(MoviesTab);
