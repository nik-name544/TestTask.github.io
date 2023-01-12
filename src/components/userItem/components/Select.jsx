import React, { useState } from "react";
import FormControl from "@mui/material/FormControl"; 
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox"; 
import OutlinedInput from "@mui/material/OutlinedInput";
import { 
  CustomInputLabel,
  CustomMenuItem,
  InboxesMenuItem,
  RoleMenuItem,
} from "../userItemStyle";
import DoneIcon from "@mui/icons-material/Done";

const CustomSelect = ({ selectItems, placeholderText, isRole }) => {
  const [inboxValue, setInboxValue] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInboxValue(typeof value === "string" ? value.split(",") : value);
    setShowPlaceholder(false);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={inboxValue}
        onChange={(e) => handleChange(e)}
        input={<OutlinedInput />}
        renderValue={(selected) => selected.join(", ")}
        size="small"
        onFocus={() => setShowPlaceholder(false)}
        sx={{ width: 192 }}
      >
        {isRole
          ? selectItems.map((name) => (
              <RoleMenuItem
                key={name}
                value={name}
                sx={{ width: 192 }}
                checked={inboxValue.indexOf(name) > -1}
              >
                <CustomMenuItem primary={name} />
                {inboxValue.indexOf(name) > -1 && <DoneIcon />} 
              </RoleMenuItem>
            ))
          : selectItems.map((name) => (
              <InboxesMenuItem
                key={name}
                value={name}
                sx={{ width: 192 }}
                checked={inboxValue.indexOf(name) > -1}
              >
                <Checkbox
                  checked={inboxValue.indexOf(name) > -1}
                  color="secondary"
                />
                <CustomMenuItem primary={name} />
              </InboxesMenuItem>
            ))}
      </Select>
      {showPlaceholder && (
        <CustomInputLabel id="demo-multiple-checkbox-label">
          {placeholderText}
        </CustomInputLabel>
      )}
    </FormControl>
  );
};

export default CustomSelect;
