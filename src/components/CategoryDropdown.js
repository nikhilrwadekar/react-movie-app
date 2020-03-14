import React from "react";

// Material UI
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function CategoryDropdown({
  menuItems,
  defaultValue,
  styles,
  onDropdownValueChange
}) {
  return (
    <FormControl variant="outlined" className={styles.formControl}>
      <InputLabel>Category</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={defaultValue}
        onChange={onDropdownValueChange}
      >
        {menuItems &&
          menuItems.map(menuItem => (
            <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
