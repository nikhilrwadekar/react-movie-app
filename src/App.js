import React, { Component } from "react";

// Custom Components
import AppHeader from "./components/AppHeader";
import TabNavigator from "./components/TabNavigator";
import SearchBar from "./components/SearchBar";
export class App extends Component {
  render() {
    return (
      <>
        {/* App Header */}
        <AppHeader />

        {/* Search Bar */}
        <SearchBar />
        {/* The Main Tab - Movies, Search Results, TV Shows! */}
        <TabNavigator />
      </>
    );
  }
}

export default App;
