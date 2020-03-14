import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core";

// Custom Components
import apiCall from "../api";
import CategoryDropdown from "../components/CategoryDropdown";

// Styles
const style = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});
export class TvShowsTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShowCategories: [
        { value: "airing_today", label: "Airing Today" },
        { value: "on_the_air", label: "On The Air" },
        { value: "popular", label: "Popular" },
        { value: "top_rated", label: "Top Rated" }
      ],
      tvShowCategory: "airing_today",
      tvShows: []
    };
  }

  async componentDidMount() {
    this.getAndSetTvShows(this.state.tvShowCategory);
  }

  // Handle TV Show Category Change
  handleTvCategoryChange = e => {
    this.setState({ tvShowCategory: e.target.value });
    this.getAndSetTvShows(e.target.value);
  };

  // Get and Set TV Shows
  getAndSetTvShows = async tvShowCategory => {
    const tvShows = await apiCall(`/tv/${tvShowCategory}`);
    this.setState({ tvShows: tvShows.results });
  };

  render() {
    const { classes } = this.props;
    const { tvShowCategory, tvShowCategories, tvShows } = this.state;
    return (
      <>
        <CategoryDropdown
          defaultValue={tvShowCategory}
          styles={classes}
          menuItems={tvShowCategories}
          onDropdownValueChange={this.handleTvCategoryChange}
        />

        {/* Display Movies based on Category! */}
        {tvShows && tvShows.map(tvShow => <h3>{tvShow.original_name}</h3>)}
      </>
    );
  }
}

export default withStyles(style)(TvShowsTab);
