import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import getDayAndMouth from "../helpers/getDatAndMouth";
import { BiCircle } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import "../css/userRepositories.css";

const UserRepositories = () => {
  const { userInformation: { infos, repos } } = useContext(GithubContext);

  return (
    repos.length && (
      <div className="repository-container">

        <span className="repository-length">

          <AiOutlineBook /> Repositories
    
          <span className="repository-quantity">{ infos.public_repos }</span>

        </span>

        <div className="repositories">

          {
            repos.map((repo, index) => (
              <div key={ index } className="repository-infos">

                <a className="repository-name" href={ repo.html_url }>{ repo.name }</a>

                <span>{ repo.description }</span>

                <div className="repository-details">
                  {
                    repo.language && (
                      <span>

                        <BiCircle />
                        <span className="repository-language">{ repo.language }</span>

                      </span>
                    )
                  }
                  <span>Updated on { getDayAndMouth(repo.created_at) }</span>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    )
  );
};

export default UserRepositories;
