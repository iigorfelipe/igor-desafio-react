import React, { useState } from "react";
import GithubContext from "./GithubContext";
import PropTypes from "prop-types";

const GithubProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <GithubContext.Provider
      value={{
        inputValue,
        setInputValue,
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
