import React, { Component } from "react";

// Material UI
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Custom Components
import MoviesTab from "../tabs/MoviesTab";
import SearchResultsTab from "../tabs/SearchResultsTab";
import TvShowsTab from "../tabs/TvShowsTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`movie-app-tabpanel-${index}`}
      aria-labelledby={`movie-app-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export class TabNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set View to Movies by Default
      value: 0
    };
  }

  handleChange = (event, value) => {
    // Update Tab Value
    this.setState({ value });
  };

  render() {
    const { searchValue, searchType, searchResults } = this.props;
    const { value } = this.state;
    return (
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="content navigator"
        >
          <Tab label="Movies" />
          <Tab label="Search Results" />
          <Tab label="TV Shows" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <MoviesTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchResultsTab
            searchValue={searchValue}
            searchType={searchType}
            searchResults={searchResults}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TvShowsTab />
        </TabPanel>
      </Paper>
    );
  }
}

export default TabNavigator;
