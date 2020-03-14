import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
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
      age: null,
      labelWidth: 200,
      searchType: "movie",
      searchInput: ""
    };
  }

  handleChange = e => {
    this.setState({ searchType: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { labelWidth, searchType, searchInput } = this.state;
    return (
      <>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchInput}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Search Type</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={searchType}
            onChange={this.handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="movie">Movies</MenuItem>
            <MenuItem value="multi">Multi</MenuItem>
            <MenuItem value="tv">TV Shows</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" size="large" color="primary">
          Search
        </Button>
      </>
    );
  }
}

export default withStyles(style)(SearchBar);
