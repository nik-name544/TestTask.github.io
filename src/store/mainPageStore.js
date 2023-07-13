import { makeAutoObservable } from "mobx"

export default class MainPageStore {
    value = [];
    inputValue = "";
    members = [];
    suggestions = [];
    searchValue = "";
  
    constructor() {
      makeAutoObservable(this);
    }
  
    handleChange = (event) => {
      const inputValue = event.target.value.trim().toUpperCase();
      this.searchValue = inputValue;
  
      if (inputValue === "") {
        this.suggestions = [];
        return;
      }
  
      const filteredSuggestions = this.members.filter((itemData) => {
        const firstName =
          itemData.firstName.toUpperCase() +
          " " +
          itemData.lastName.toUpperCase();
  
        return firstName.includes(inputValue) && firstName !== inputValue;
      });
  
      this.suggestions = filteredSuggestions;
    };
  
    handleClick = (email) => {
      if (!!email) {
        const updatedMembers = this.members.filter((item) => item.label !== email);
        this.members = updatedMembers;
      } else {
        const newMembers = Array.from(new Set([...this.members, ...this.value]));
        this.members = newMembers;
        this.value = [];
      }
    };
  }