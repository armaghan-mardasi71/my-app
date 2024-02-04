import "./HeaderNav.css";
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoTable } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { NavLink, useLocation ,useParams} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Octokit } from "octokit";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoIssueOpened } from "react-icons/go";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { BsInbox } from "react-icons/bs";
import SearchModal from "../SearchModal/SearchModal";
import { reposContext } from "../../contexts/Contexts";
import { userInfoContext } from "../../contexts/Contexts";
import myToken from "../../myToken";

export default function HeaderNav() {
  const { allRepos, setAllRepos } = useContext(reposContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);

  const [allStarRepos, setAllStarRepos] = useState([]);
  const params = useParams();
  // console.log(loc);

  useEffect(() => {
    const getRepos = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /users/{username}/starred",
        {
          username: `${params.username}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      return repoResult.data;
    };
    getRepos().then((res) => setAllStarRepos(res));
  }, []);

  return (
    <nav className="header-nav">
      <div className="logo-burger-search">
        <div className="logo-burger">
          {" "}
          <div>
            <span></span>
          </div>
          <a href="#">
            <img src="../images/github-logo-light.png" alt="github logo" />
          </a>
        </div>
        <div className="header-nav-right-wrapper">
          <SearchModal />
          <span className="header-nav-divider-line"></span>
          <div className="header-nav-buttons">
            <span className="create-new">
              <FaPlus />
              <IoMdArrowDropdown />
            </span>
            <span className="issues">
              <GoIssueOpened />
            </span>
            <span className="pull-req">
              <IoGitPullRequestOutline />
            </span>
            <span className="notifs">
              <BsInbox />
            </span>
            <a href="#">
              <img
                src={userInfo.avatar_url}
                className="profile-pic-header-nav"
              />
            </a>
          </div>
        </div>
      </div>

      <ul className="second-nav">
        <li className="second-nav-item">
          <NavLink to="overview" className="second-nav-link">
            <IoBookOutline className="second-nav-icon" />
            Overview
          </NavLink>
        </li>
        <li className="second-nav-item">
          <NavLink to="repositories" className="second-nav-link">
            <RiGitRepositoryLine className="second-nav-icon" />
            Repositories
            <span className="second-nav-badge">{allRepos.length}</span>
          </NavLink>
        </li>
        <li className="second-nav-item">
          <NavLink to="projects" className="second-nav-link">
            <GoTable className="second-nav-icon" />
            Projects
          </NavLink>
        </li>
        <li className="second-nav-item">
          <NavLink to="packages" className="second-nav-link">
            <IoCubeOutline className="second-nav-icon" />
            Packages
          </NavLink>
        </li>
        <li className="second-nav-item">
          <NavLink to="stars" className="second-nav-link">
            <FaRegStar className="second-nav-icon" />
            Stars
            <span className="second-nav-badge">{allStarRepos.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
