import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import "../css/main.css";

const UserRepository = () => {
  const {
    userInformation: { infos, repos },
  } = useContext(GithubContext);

  console.log("INFOS>>>>", infos);
  console.log("");
  console.log("REPOS>>>>", repos);

  return (
    <div>
      {infos && repos.length && (
        <div>
          <div>
            <img src={infos.avatar_url} alt="" />

            <div>
              <span>{infos.name}</span>
              <span>{"user"}</span>
            </div>

            <button>follow</button>

            <div>
              <span>{"@user"}</span>

              <div>
                <span>icon {infos.followers} followers</span>
                <span>{infos.following} following</span>
                <span>icon {}</span>
              </div>

              <span>icon {infos.email}</span>
            </div>
          </div>

          <div>
            <span>icon Repositories {repos.length}</span>
            {repos.map((item, index) => (
              <div key={index}>
                <span>{item.name}</span>
                <span>{item.language}</span>
                <span>{item.created_at}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRepository;
