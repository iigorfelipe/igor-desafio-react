import React from "react";
import Main from "./pages/Main";
import GithubProvider from "./providers/GithubProvider";

const App = () => (
  <GithubProvider>
    <Main />
  </GithubProvider>
);

export default App;
