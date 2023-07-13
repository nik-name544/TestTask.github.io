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
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchInputWrapper,
  SearchInput,
} from "../components/SearchInput/searchInput";
import { observer } from "mobx-react-lite";
import MainPageStore from "../store/mainPageStore";



const mainPageStore = new MainPageStore();

const MainPage = observer(() => {
  const { value, inputValue, members, suggestions, searchValue } = mainPageStore;

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
              onChange={(event, newInputValue) => {
                mainPageStore.value = newInputValue;
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                mainPageStore.inputValue = newInputValue;
              }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="" placeholder="" />
              )}
              ChipProps={{ deleteIcon: <CloseIcon /> }}
              sx={{ width: "444px", height: "40px" }}
            />
          </div>
          <Button onClick={() => mainPageStore.handleClick()}>Send invite</Button>
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
            onInput={mainPageStore.handleChange}
            placeholder="Search"
          />
        </SearchInputWrapper>
        <UserItem
          userData={suggestions.length !== 0 ? suggestions : members}
          handleClick={mainPageStore.handleClick}
        />
      </ComponentWrapper>
    </div>
  );
});

export default MainPage;
