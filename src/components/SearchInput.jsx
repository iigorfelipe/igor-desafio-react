import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";

const SearchInput = () => {
  const { searchInputValue, setSearchInputValue } = useContext(GithubContext);

  return (
    <label>
      Buscar Repositório no github
      <input
        type="text"
        value={searchInputValue}
        placeholder="digite o nome do usuário"
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
    </label>
  );
};

export default SearchInput;
