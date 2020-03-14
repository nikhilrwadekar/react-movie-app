import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

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
      tvShows: [],
      pageNumber: 1
    };
  }

  async componentDidMount() {
    this.getAndSetTvShows(this.state.tvShowCategory);
  }

  // Handle TV Show Category Change
  handleTvCategoryChange = e => {
    this.setState({ tvShowCategory: e.target.value, pageNumber: 1 });
    this.getAndSetTvShows(e.target.value);
  };

  // Get and Set TV Shows
  getAndSetTvShows = async (tvShowCategory, pageNumber) => {
    const tvShows = await apiCall(
      `/tv/${tvShowCategory}`,
      `&page=${pageNumber || 1}`
    );
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
        <Pagination
          count={15}
          color="primary"
          page={this.state.pageNumber}
          onChange={(event, pageNumber) => {
            this.getAndSetTvShows(this.state.tvShowCategory, pageNumber);
            this.setState({ pageNumber });
          }}
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
        <Pagination
          count={15}
          color="primary"
          page={this.state.pageNumber}
          onChange={(event, pageNumber) => {
            this.getAndSetTvShows(this.state.tvShowCategory, pageNumber);
            this.setState({ pageNumber });
          }}
        />
      </div>
    );
  }
}

export default withStyles(style)(TvShowsTab);
