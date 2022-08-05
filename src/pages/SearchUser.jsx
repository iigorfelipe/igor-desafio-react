import React from "react";
import SearchButton from "../components/SearchButton";
import SearchInput from "../components/SearchInput";
import "../css/main.css";

const SearchUser = () => {
  return (
    <div className="search-container">
      <div>
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchUser;
