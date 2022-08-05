import React, { useContext } from "react";
import getUser from "../apis/github/request/getUser";
import GithubContext from "../providers/GithubContext";
import getRepository from "../apis/github/request/getRepository";
import { useNavigate } from "react-router-dom";
import "../css/search.css";

const SearchButton = () => {
  const { searchInputValue, setUserInformation } = useContext(GithubContext);
  const navigate = useNavigate();

  const saveUsersInformation = async (username) => {
    const dataUser = await getUser(username);
    const dataRepo = await getRepository(username);

    setUserInformation({
      infos: dataUser,
      repos: dataRepo,
    });

    navigate("/repository");
  };

  return (
    <button
      type="button"
      className="search-button"
      onClick={() => saveUsersInformation(searchInputValue)}
    >
      Buscar
    </button>
  );
};

export default SearchButton;
