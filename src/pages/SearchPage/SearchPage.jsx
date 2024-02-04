import "./SearchPage.css";
import React, { useState } from "react";
import { IoCubeOutline } from "react-icons/io5";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  GoIssueOpened,
  GoCommentDiscussion,
  GoTelescope
} from "react-icons/go";
import { IoGitPullRequestOutline, IoGitCommitSharp } from "react-icons/io5";
import { BsInbox } from "react-icons/bs";
import SearchModal from "../../components/SearchModal/SearchModal";
import { RiCodeLine, RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { LuBookOpen, LuMilestone, LuUsers } from "react-icons/lu";
import { userInfoContext } from "../../contexts/Contexts";

export default function SearchPage() {
  const { userInfo } = useContext(userInfoContext);

  // console.log(userInfo);
  const [selected, setSelected] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [showPaths, setShowPaths] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showTopics, setShowTopics] = useState(false);

  const activatorFun = (event) => {
    let str = event.target.textContent;
    let pat = /[a-zA-Z]/g;
    let letters = str.match(pat);
    console.log(letters.toString());
    if (letters.toString() == "c,o,d,e") {
      setShowLangs(true);
      setShowRepos(true);
      setShowPaths(true);
      setShowAdvanced(true);
    }
  };

  return (
    <>
      <nav className="header-nav-search">
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
            <SearchModal width="950px" />
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
      </nav>

      <div className="search-page-container">
        <div className="search-page-left-sidebar">
          <h3>Filter by</h3>
          <div className="filter-contents">
            <NavLink onClick={activatorFun}>
              <RiCodeLine
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Code <span>4512</span>
            </NavLink>
            <NavLink to="search-repos" onClick={activatorFun}>
              <RiGitRepositoryLine
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Repositories <span>8754</span>
            </NavLink>
            <NavLink to="search-issues" onClick={activatorFun}>
              <GoIssueOpened
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Issues <span>2444</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <IoGitPullRequestOutline
                style={{ fontSize: 16, strokeWidth: 3, marginRight: 10 }}
              />
              Pull requests <span>14523</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <GoCommentDiscussion
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Discussions <span>8789</span>
            </NavLink>
            <NavLink to="search-users" onClick={activatorFun}>
              <LuUsers
                style={{ fontSize: 16, strokeWidth: 3, marginRight: 10 }}
              />
              Users <span>2458</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <IoGitCommitSharp
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Commits <span>14758</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <IoCubeOutline
                style={{ fontSize: 18, strokeWidth: 3, marginRight: 10 }}
              />
              Packages <span>8575</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <LuBookOpen
                style={{ fontSize: 16, strokeWidth: 3, marginRight: 10 }}
              />
              Wikis <span>578555</span>
            </NavLink>
            <NavLink to="search-topics" onClick={activatorFun}>
              <LuMilestone
                style={{ fontSize: 16, strokeWidth: 3, marginRight: 10 }}
              />
              Topics <span>554754</span>
            </NavLink>
            <NavLink to="#" onClick={activatorFun}>
              <GoTelescope
                style={{ fontSize: 16, strokeWidth: 1, marginRight: 10 }}
              />
              Marketplace <span>44568</span>
            </NavLink>
          </div>

          <div className="filter-langs">
            <h3>Languages</h3>
          </div>

          <div className="filter-state">
            <h3>State</h3>
          </div>

          {/* <div className="filter-types"></div> */}

          <div className="filter-repos">
            <h3>Repositories</h3>
          </div>

          <div className="filter-paths">Paths</div>

          <div className="filter-advanced">
            <h3>Advanced</h3>
          </div>

          <div className="advanced-search-link">
            <a href="#"></a>
          </div>
        </div>

        <div className="search-content-outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}
