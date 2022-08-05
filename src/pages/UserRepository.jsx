import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import "../css/main.css";

const UserRepository = () => {
  const {
    userInformation: { infos, repos },
  } = useContext(GithubContext);

  return (
    <div>
      {infos && repos.length && (
        <div className="user-container">
          <div className="user-infos-container">
            <img className="user-img" src={infos.avatar_url} alt="" />

            <div className="user-name-container">
              <span className="user-name">{infos.name}</span>
              <span className="user-login">{infos.login}</span>
            </div>

            <button>Follow</button>

            <div className="user-details-container">
              <span>{infos.twitter_username}</span>

              <div className="user-followers-container">
                <span>{infos.followers} followers</span>
                <span>{infos.following} following</span>
                <span>{}</span>
              </div>

              <span>{infos.email}</span>
            </div>
          </div>

          <div className="repository-container">
            <span className="repository-length">
              Repositories {infos.public_repos}
            </span>

            <div className="repositories">
              {repos.map((repo, index) => (
                <div key={index} className="repository-infos">
                  <span className="repository-name">{repo.name}</span>

                  <div className="repository-details">
                    <span className="repository-language">{repo.language}</span>

                    <span>Updated on {repo.created_at}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRepository;
