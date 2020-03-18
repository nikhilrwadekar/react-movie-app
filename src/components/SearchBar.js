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
  },
  search: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
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
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={onSearchValueChange}
        />

        <CategoryDropdown
          className={classes.textField}
          menuItems={searchTypes}
          onDropdownValueChange={onSearchTypeChange}
          defaultValue={searchType}
          styles
          categoryName="Search Type"
        />
        <Button
          className={classes.textField}
          variant="contained"
          size="large"
          color="primary"
          onClick={onSearchInitiate}
          disabled={!searchValue}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default withStyles(style)(SearchBar);
