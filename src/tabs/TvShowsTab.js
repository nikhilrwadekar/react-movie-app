import React, { Component } from "react";
// Material UI
import { withStyles } from "@material-ui/core";

// Custom Components
import CategoryDropdown from "../components/CategoryDropdown";

// Styles
const style = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
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
      tvShowCategory: "airing_today"
    };
  }

  componentDidMount() {}

  // Handle TV Category Change
  handleTvCategoryChange = e => {
    this.setState({ tvShowCategory: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { tvShowCategory, tvShowCategories } = this.state;
    return (
      <>
        <CategoryDropdown
          defaultValue={tvShowCategory}
          styles={classes}
          menuItems={tvShowCategories}
          onDropdownValueChange={this.handleTvCategoryChange}
        />
      </>
    );
  }
}

export default withStyles(style)(TvShowsTab);
