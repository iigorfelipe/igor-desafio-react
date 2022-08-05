import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchUser from "../pages/SearchUser";
import Main from "../pages/Main";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SearchUser />} />
    <Route path="/repository" element={<Main />} />
  </Routes>
);

export default AppRoutes;
