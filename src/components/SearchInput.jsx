import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import "../css/search.css";

const SearchInput = () => {
  const { searchInputValue, setSearchInputValue } = useContext(GithubContext);

  return (
    <label>
  
      <span className="search-label">Buscar Repositório no github</span>
  
      <input
        type="text"
        className="search-input"
        value={searchInputValue}
        placeholder="digite o nome do usuário"
        onChange={(e) => setSearchInputValue(e.target.value)}
      />

    </label>
  );
};

export default SearchInput;
