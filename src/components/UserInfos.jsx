import React, { useContext } from "react";
import GithubContext from "../providers/GithubContext";
import { BsPeople, BsStar } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscDebugStackframeDot } from "react-icons/vsc";
import "../css/userInfos.css";

const UserInfos = () => {
  const { userInformation: { infos, stars } } = useContext(GithubContext);

  return (
    infos && (
      <div className="user-infos-container">

        <img className="user-img" src={ infos.avatar_url } alt="" />

        <div className="user-name-container">

          <span className="user-name">{ infos.name }</span>
          <span className="user-login">{ infos.login }</span>

        </div>

        <button>Follow</button>

        <div className="user-details-container">

          {
            infos.twitter_username && (
              <span>
                @{ infos.twitter_username }
              </span>
            )
          }

          <div className="user-followers-container">

            <BsPeople />

            <span className="user-followers">{ infos.followers }</span> followers

            <span className="user-dot-left"><VscDebugStackframeDot /></span>

            <span className="user-following">{ infos.following }</span> following

            <VscDebugStackframeDot />

            <BsStar />

            <span className="user-stars">{ stars.length }</span>

          </div>

          {
            infos.email && (
              <span>

                <AiOutlineMail />
                { infos.email }

              </span>
            )
          }

        </div>
      </div>
    )
  );
};

export default UserInfos;
