import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export class TabNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
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
      </Paper>
    );
  }
}

export default TabNavigator;
