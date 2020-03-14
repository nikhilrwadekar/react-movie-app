import React, { Component } from "react";

// Material UI
import Container from "@material-ui/core/Container";

// Custom Components
import AppHeader from "./components/AppHeader";
import TabNavigator from "./components/TabNavigator";
import SearchBar from "./components/SearchBar";
import apiCall from "./api";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      searchType: "movie",
      searchResults: []
    };
  }

  // Handle Search Value Change
  handleSearchValueChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  // Handle Search Type Change
  handleSearchTypeChange = e => {
    this.setState({ searchType: e.target.value });
  };

  // Handle Search Initiation
  handleSearchInitiate = async () => {
    const searchResults = await apiCall(
      `/search/${this.state.searchType}/`,
      `query=${this.state.searchValue}`
    );

    this.setState({ searchResults: searchResults.results });
  };

  render() {
    const { searchValue, searchType, searchResults } = this.state;
    return (
      <Container>
        {/* App Header */}
        <AppHeader />

        {/* Search Bar */}
        <SearchBar
          searchValue={searchValue}
          searchType={searchType}
          onSearchValueChange={this.handleSearchValueChange}
          onSearchTypeChange={this.handleSearchTypeChange}
          onSearchInitiate={this.handleSearchInitiate}
        />

        {/* The Main Tab - Movies, Search Results, TV Shows! */}
        <TabNavigator
          searchValue={searchValue}
          searchType={searchType}
          searchResults={searchResults}
        />
      </Container>
    );
  }
}

export default App;
