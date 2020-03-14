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
  onDropdownValueChange,
  categoryName
}) {
  // Ref Based Label Width
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={styles.formControl}>
      <InputLabel ref={inputLabel}>{categoryName || "Category"}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={defaultValue}
        onChange={onDropdownValueChange}
        labelWidth={labelWidth}
      >
        {menuItems &&
          menuItems.map(menuItem => (
            <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
