import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchUser from "../pages/SearchUser";
import UserRepository from "../pages/UserRepository";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SearchUser />} />
    <Route path="/repository" element={<UserRepository />} />
  </Routes>
);

export default AppRoutes;
