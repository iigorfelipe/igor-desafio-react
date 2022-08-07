import React, { useState } from "react";
import GithubContext from "./GithubContext";
import PropTypes from "prop-types";

const GithubProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInformation, setUserInformation] = useState({
    infos: "",
    repos: [],
    stars: [],
  });

  return (
    <GithubContext.Provider
      value={
        {
          searchInputValue,
          setSearchInputValue,
          userInformation,
          setUserInformation,
        }
      }
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
