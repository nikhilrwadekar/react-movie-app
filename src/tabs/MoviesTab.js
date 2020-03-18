import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

// Custom Components
import apiCall from "../api";
import CategoryDropdown from "../components/CategoryDropdown";
import MediaCard from "../components/MediaCard";
import Loader from "../components/Loader";

// Styles
const style = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
      movieCategory: "now_playing",
      movies: [],
      pageNumber: 1,
      isLoading: false
    };
  }

  async componentDidMount() {
    this.getAndSetMovies(this.state.movieCategory);
  }

  // Handle Movie Category Change
  handleMovieCategoryChange = e => {
    this.setState({ movieCategory: e.target.value, pageNumber: 1 });
    this.getAndSetMovies(e.target.value);
  };

  // Get and Set Movies
  getAndSetMovies = async (movieCategory, pageNumber) => {
    this.setState({ isLoading: true });
    const movies = await apiCall(
      `/movie/${movieCategory}`,
      `&page=${pageNumber || 1}`
    );
    this.setState({ movies: movies.results, isLoading: false });
  };

  render() {
    const { classes } = this.props;
    const { movieCategories, movieCategory, movies, isLoading } = this.state;

    return (
      <div className={classes.root}>
        <CategoryDropdown
          defaultValue={movieCategory}
          menuItems={movieCategories}
          styles={classes}
          onDropdownValueChange={this.handleMovieCategoryChange}
        />

        {/* Display Movies based on Category! */}

        <Pagination
          count={15}
          color="primary"
          page={this.state.pageNumber}
          onChange={(event, pageNumber) => {
            this.getAndSetMovies(this.state.movieCategory, pageNumber);
            this.setState({ pageNumber });
          }}
        />

        {isLoading ? (
          <Loader />
        ) : (
          movies.map((movie, key) => {
            const {
              poster_path,
              popularity,
              original_title,
              overview,
              release_date
            } = movie;
            return (
              <MediaCard
                key={key}
                popularity={popularity}
                title={original_title}
                posterPath={poster_path}
                overview={overview}
                releaseDate={release_date}
              />
            );
          })
        )}

        <Pagination
          count={15}
          color="primary"
          page={this.state.pageNumber}
          onChange={(event, pageNumber) => {
            this.getAndSetMovies(this.state.movieCategory, pageNumber);
            this.setState({ pageNumber });
          }}
        />
      </div>
    );
  }
}

export default withStyles(style)(MoviesTab);
