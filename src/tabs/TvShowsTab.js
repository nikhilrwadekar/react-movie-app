import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core";

// Custom Components
import apiCall from "../api";
import CategoryDropdown from "../components/CategoryDropdown";
import MediaCard from "../components/MediaCard";

// Styles
const style = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
      <div className={classes.root}>
        <CategoryDropdown
          defaultValue={tvShowCategory}
          styles={classes}
          menuItems={tvShowCategories}
          onDropdownValueChange={this.handleTvCategoryChange}
        />

        {/* Display TV Shows based on Category! */}
        {tvShows &&
          tvShows.map(tvShow => {
            const {
              poster_path,
              popularity,
              original_name,
              overview,
              release_date
            } = tvShow;
            return (
              <MediaCard
                popularity={popularity}
                title={original_name}
                posterPath={poster_path}
                overview={overview}
                releaseDate={release_date}
              />
            );
          })}
      </div>
    );
  }
}

export default withStyles(style)(TvShowsTab);
