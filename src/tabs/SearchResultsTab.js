import React, { Component } from "react";
import { Typography } from "@material-ui/core";

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
        {!!searchResults ? (
          searchResults.map(searchResult => (
            <h3>{searchResult.original_title}</h3>
          ))
        ) : (
          <Typography>Not Found</Typography>
        )}

        {searchValue && !searchResults ? (
          <Typography variant="h5">
            Click 'Search' to search for '{searchValue}' in '{searchType}'
          </Typography>
        ) : (
          <Typography variant="h5">Please start typing in 'Search'</Typography>
        )}
      </>
    );
  }
}

export default SearchResultsTab;
