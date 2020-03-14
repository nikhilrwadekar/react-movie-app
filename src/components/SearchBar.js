import React, { Component } from "react";

// Material UI
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Components
import CategoryDropdown from "./CategoryDropdown";

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

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTypes: [
        { value: "movie", label: "Movies" },
        { value: "multi", label: "Multi" },
        { value: "tv", label: "TV Shows" }
      ],
      searchType: "movie"
    };
  }

  render() {
    const {
      classes,
      searchType,
      onSearchInitiate,
      onSearchValueChange,
      onSearchTypeChange,
      searchValue
    } = this.props;
    const { searchTypes } = this.state;
    return (
      <>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={onSearchValueChange}
        />

        <CategoryDropdown
          menuItems={searchTypes}
          onDropdownValueChange={onSearchTypeChange}
          defaultValue={searchType}
          styles
          categoryName="Search Type"
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={onSearchInitiate}
          disabled={!searchValue}
        >
          Search
        </Button>
      </>
    );
  }
}

export default withStyles(style)(SearchBar);
