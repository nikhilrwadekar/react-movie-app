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
      movies: []
    };
  }

  async componentDidMount() {
    this.getAndSetMovies(this.state.movieCategory);
  }

  // Handle Movie Category Change
  handleMovieCategoryChange = e => {
    this.setState({ movieCategory: e.target.value });
    this.getAndSetMovies(e.target.value);
  };

  // Get and Set Movies
  getAndSetMovies = async movieCategory => {
    const movies = await apiCall(`/movie/${movieCategory}`, "&region=CA");
    this.setState({ movies: movies.results });
  };

  render() {
    const { classes } = this.props;
    const { movieCategories, movieCategory, movies } = this.state;
    return (
      <div className={classes.root}>
        <CategoryDropdown
          defaultValue={movieCategory}
          menuItems={movieCategories}
          styles={classes}
          onDropdownValueChange={this.handleMovieCategoryChange}
        />

        {/* Display Movies based on Category! */}

        {movies &&
          movies.map(movie => {
            const {
              poster_path,
              popularity,
              original_title,
              overview,
              release_date
            } = movie;
            return (
              <MediaCard
                popularity={popularity}
                title={original_title}
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

export default withStyles(style)(MoviesTab);
