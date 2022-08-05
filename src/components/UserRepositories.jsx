import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import getDayAndMouth from "../helpers/getDatAndMouth";
import { BiCircle } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import "../css/userRepositories.css";

const UserRepositories = () => {
  const {
    userInformation: { infos, repos },
  } = useContext(GithubContext);

  return (
    repos.length && (
      <div className="repository-container">
        <span className="repository-length">
          <AiOutlineBook /> Repositories {infos.public_repos}
        </span>

        <div className="repositories">
          {repos.map((repo, index) => (
            <div key={index} className="repository-infos">
              <span className="repository-name">{repo.name}</span>

              <span>{repo.description}</span>
              <div className="repository-details">
                {repo.language && (
                  <span className="repository-language">
                    <BiCircle />
                    {repo.language}
                  </span>
                )}

                <span>Updated on {getDayAndMouth(repo.created_at)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default UserRepositories;
