import React from "react";
import UserInfos from "../components/UserInfos";
import UserRepositories from "../components/UserRepositories";
import "../css/main.css";

const UserRepository = () => {
  return (
    <div className="main-container">

      <UserInfos />
      <UserRepositories />

    </div>
  );
};

export default UserRepository;
