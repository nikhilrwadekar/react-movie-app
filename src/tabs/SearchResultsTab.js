import React, { Component } from "react";

// Material UI
import { Typography } from "@material-ui/core";

// Custom Components
import MediaCard from "../components/MediaCard";

export class SearchResultsTab extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { searchValue, searchType, searchResults } = this.props;
    return (
      <>
        {/* Render if we have Search Results! */}
        {searchValue && searchResults.length === 0 ? (
          <Typography variant="h5">
            Click 'Search' to search for '{searchValue}' in '{searchType}'
          </Typography>
        ) : (
          searchResults.length === 0 && (
            <Typography variant="h5">
              Please start typing in 'Search'
            </Typography>
          )
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
      </>
    );
  }
}

export default SearchResultsTab;
