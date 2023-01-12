import { useState } from "react";
import { emailData } from "../data/data";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import UserItem from "../components/userItem/UserItem";
import { ComponentWrapper } from "../components/ComponentWrapper/componentWrapperStyle";
import { Title } from "../components/Title/titleStyle";
import { Button } from "../components/Button/buttonStyle";
import { InviteWrapper } from "../components/InviteWrapper/inviteWrapperStyle";
import { InputLabel } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  SearchInputWrapper,
  SearchInput,
} from "../components/SearchInput/searchInput";
import SearchIcon from "@mui/icons-material/Search";

function MainPage() {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [members, setMembers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    if (event.target.value !== "") {
      const filteredSuggestions = members.filter((itemData) => { 
        const value = event.target.value.toUpperCase();
        const firstName =
          itemData.firstName.toUpperCase() +
          " " +
          itemData.lastName.toUpperCase();

        return value && firstName.includes(value) && firstName !== value;
      });
      setSearchValue(event.target.value);
      setSuggestions(filteredSuggestions);
    } else {
      setSearchValue("");
      setSuggestions([]);
    }
  };

  const handleClick = (email) => {
    if (!!email) {
      let tempMembers = [...members].filter((item) => item.label !== email);
      setMembers(tempMembers);
    } else {
      let tempMembers = Array.from(new Set([...members, ...value]));
      setMembers(tempMembers);
      setValue([]);
    }
  };

  return (
    <div>
      <ComponentWrapper>
        <Title>Members</Title>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title isBold isBig>
          Invite members
        </Title>
        <InviteWrapper>
          <div>
            <InputLabel shrink htmlFor="multiple-limit-tags">
              Invite members
            </InputLabel>
            <Autocomplete
              multiple
              limitTags={2}
              size="small"
              id="multiple-limit-tags"
              aria-label=""
              options={emailData}
              value={value}
              onChange={(event, newInputValue) => setValue(newInputValue)}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) =>
                setInputValue(newInputValue)
              }
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="" placeholder="" />
              )}
              ChipProps={{ deleteIcon: <CloseIcon /> }}
              sx={{ width: "444px", height: "40px" }}
            />
          </div>
          <Button onClick={() => handleClick()}>Send invite</Button>
        </InviteWrapper>
      </ComponentWrapper>
      <ComponentWrapper withoutBorder>
        <Title isBold isBig>
          Manage team members
        </Title>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput
            type="text"
            value={searchValue}
            onInput={handleChange}
            placeholder="Search"
          />
        </SearchInputWrapper>
        <UserItem
          userData={suggestions.length !== 0 ? suggestions : members}
          handleClick={handleClick}
        />
      </ComponentWrapper>
    </div>
  );
}

export default MainPage;
