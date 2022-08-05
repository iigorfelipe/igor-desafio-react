import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import getDayAndMouth from "../helpers/getDatAndMouth";
import { BiCircle } from "react-icons/bi";
import { BsPeople, BsStar } from "react-icons/bs";
import { AiOutlineMail, AiOutlineBook } from "react-icons/ai";
import { VscDebugStackframeDot } from "react-icons/vsc";
import "../css/main.css";

const UserRepository = () => {
  const {
    userInformation: { infos, repos, stars },
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
                <span>
                  <BsPeople />
                  {infos.followers} followers <VscDebugStackframeDot />
                  {infos.following} following <VscDebugStackframeDot />
                  <BsStar />
                  {stars.length}
                </span>
              </div>

              {infos.email && (
                <span>
                  <AiOutlineMail />
                  {infos.email}
                </span>
              )}
            </div>
          </div>

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
        </div>
      )}
    </div>
  );
};

export default UserRepository;
