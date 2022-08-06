import React, { useContext } from "react";
import getUser from "../apis/github/request/getUser";
import getStar from "../apis/github/request/getStars";
import GithubContext from "../providers/GithubContext";
import getRepository from "../apis/github/request/getRepository";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../css/search.css";

const SearchButton = () => {
  const { searchInputValue, setUserInformation } = useContext(GithubContext);
  const navigate = useNavigate();

  const saveUsersInformation = async (username) => {
    if (searchInputValue.length === 0) {
      alert("informe um nome de usuário válido do github");
    }

    try {
      const dataUser = await getUser(username);
      const dataRepo = await getRepository(username);
      const dataStar = await getStar(username);

      setUserInformation({
        infos: dataUser,
        repos: dataRepo,
        stars: dataStar,
      });

      navigate("/repository");
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        alert(
          "Usuário não encontrado no github. Verifique se você digitou o nome corretamente"
        );
      }
    }
  };

  return (
    <button
      type="button"
      className="search-button"
      onClick={() => saveUsersInformation(searchInputValue)}
    >
      <span className="icon-search-btn">
        <IoIosSearch />
      </span>
      Buscar
    </button>
  );
};

export default SearchButton;
