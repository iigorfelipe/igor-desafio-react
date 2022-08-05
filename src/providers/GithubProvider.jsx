import React, { useState } from "react";
import GithubContext from "./GithubContext";
import PropTypes from "prop-types";

const GithubProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInformation, setUserInformation] = useState({
    infos: "",
    repos: "",
  });

  return (
    <GithubContext.Provider
      value={{
        setSearchInputValue,
        searchInputValue,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
