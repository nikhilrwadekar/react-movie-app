import React, { Component } from "react";

// Material UI
import { Typography, Grid } from "@material-ui/core";

// Custom Components
import MediaCard from "../components/MediaCard";

export class SearchResultsTab extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      searchValue,
      searchType,
      searchResults,
      searchInitiated,
      searchCompleted
    } = this.props;
    return (
      <>
        <Grid align="center">
          {/* When the user starts typing in search */}
          {searchValue && searchResults.length === 0 && (
            <Typography variant="h5">
              Click 'Search' to search for '{searchValue}' in '{searchType}'
            </Typography>
          )}

          {/* When the user is yet to type into Search */}
          {searchResults.length === 0 &&
            !searchInitiated &&
            !searchValue &&
            !searchCompleted && (
              <Typography variant="h5">
                Please start typing into 'Search'...
              </Typography>
            )}

          {/* When search is completed without any Results */}
          {searchCompleted && searchResults.length === 0 && !searchValue && (
            <Typography variant="h5">
              Sorry, nothing matched your search.
            </Typography>
          )}

          {searchResults.length > 0 ? (
            searchResults.map((searchResult, key) => {
              const {
                poster_path,
                popularity,
                original_title,
                original_name,
                overview,
                release_date
              } = searchResult;
              return (
                <MediaCard
                  key={key}
                  popularity={popularity}
                  title={original_title ? original_title : original_name}
                  posterPath={poster_path}
                  overview={overview}
                  releaseDate={release_date}
                />
              );
            })
          ) : (
            <></>
          )}
        </Grid>
      </>
    );
  }
}

export default SearchResultsTab;
