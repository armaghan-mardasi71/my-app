import "./RepoPage.css";
import React from "react";
import { GoTable } from "react-icons/go";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoIssueOpened } from "react-icons/go";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { BsInbox } from "react-icons/bs";
import { IoCode } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { LuShieldAlert } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import SearchModal from "../../components/SearchModal/SearchModal";
import Footer from "../../components/Footer/Footer";
import { userInfoContext, reposContext } from "../../contexts/Contexts";

export default function RepoPage() {
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const { allRepos, setAllRepos } = useContext(reposContext);
  const loc = useLocation();
  console.log(loc);
  return (
    <>
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
            <NavLink to="code" className="second-nav-link">
              <IoCode className="second-nav-icon" />
              Code
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="issues" className="second-nav-link">
              <GoIssueOpened className="second-nav-icon" />
              Issues
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="pull-requests" className="second-nav-link">
              <IoGitPullRequestOutline className="second-nav-icon" />
              Pull requests
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="actions" className="second-nav-link">
              <IoPlayCircleOutline className="second-nav-icon" />
              Actions
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="nav-projects" className="second-nav-link">
              <GoTable className="second-nav-icon" />
              Projects
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="security" className="second-nav-link">
              <LuShieldAlert className="second-nav-icon" />
              Security
            </NavLink>
          </li>
          <li className="second-nav-item">
            <NavLink to="insights" className="second-nav-link">
              <AiOutlineLineChart className="second-nav-icon" />
              Insights
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
}
