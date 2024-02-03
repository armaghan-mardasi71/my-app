import "./Code.css";
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import MyPopover from "../Popover/Popover";
import { GoEye } from "react-icons/go";
import { FaCodeFork } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { LuFileSearch2 } from "react-icons/lu";
import { IoCode } from "react-icons/io5";
import RepoTable from "../../components/RepoTable/RepoTable";
import ReadMe from "../ReadMe/ReadMe";
import { IoBookOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { TbActivity } from "react-icons/tb";
import LanguagesBar from "../../components/LanguagesBar/LanguagesBar";
import { reposContext } from "../../contexts/Contexts";

export default function Code() {
  const params = useParams();
  const { allRepos, setAllRepos } = useContext(reposContext);

  return (
    <>
      <div className="repo-page-container">
        {allRepos.map((repo) => {
          if (repo.name === params.repoName) {
            return (
              <>
                <div className="repo-page-header">
                  <div className="repo-page-header-left">
                    <img src={repo.owner.avatar_url} alt="profile-img" />
                    <a href="#">{repo.name}</a>
                    <span className="repo-badge">{repo.visibility}</span>
                  </div>
                  <div className="repo-page-header-right">
                    <MyPopover
                      icon={<GoEye style={{ strokeWidth: 1, fontSize: 16 }} />}
                      title="Watch"
                      bgColor="rgba(167, 165, 165, 0.1)"
                      color="#5F7161"
                      badge={
                        <span
                          style={{
                            backgroundColor: "rgba(128, 128, 128, 0.149)",
                            width: 20,
                            height: 20,
                            borderRadius: "50%"
                          }}
                        >
                          {repo.watchers_count}
                        </span>
                      }
                    />
                    <MyPopover
                      icon={<FaCodeFork />}
                      title="Fork"
                      bgColor="rgba(167, 165, 165, 0.1)"
                      color="#5F7161"
                      badge={
                        <span
                          style={{
                            backgroundColor: "rgba(128, 128, 128, 0.149)",
                            width: 20,
                            height: 20,
                            borderRadius: "50%"
                          }}
                        >
                          {repo.forks_count}
                        </span>
                      }
                    />
                    <MyPopover
                      icon={
                        <FaRegStar style={{ strokeWidth: 1, fontSize: 16 }} />
                      }
                      title="Star"
                      bgColor="rgba(167, 165, 165, 0.1)"
                      color="#5F7161"
                      badge={
                        <span
                          style={{
                            backgroundColor: "rgba(128, 128, 128, 0.149)",
                            width: 20,
                            height: 20,
                            borderRadius: "50%"
                          }}
                        >
                          {repo.stargazers_count}
                        </span>
                      }
                    />
                  </div>
                </div>

                <div className="repo-page-main">
                  <div className="repo-page-main-left">
                    <div className="repo-page-table-header">
                      <div className="repo-page-table-header-left">
                        <MyPopover
                          icon={<FaCodeBranch />}
                          title="main"
                          bgColor="rgba(167, 165, 165, 0.1)"
                          color="#5F7161"
                        />
                        <span className="repo-page-branch">
                          <FaCodeBranch />1 Branch
                        </span>
                        <span className="repo-page-tags">
                          <FiTag />2 Tags
                        </span>
                      </div>
                      <div className="repo-page-table-header-right">
                        <div class="base-Input-root">
                          <Paper
                            component="form"
                            sx={{
                              p: "2px",
                              display: "flex",
                              alignItems: "center",
                              width: 250,
                              height: 24,
                              border: "1px solid rgba(128, 128, 128, 0.245)",
                              boxShadow: "none"
                            }}
                          >
                            <IconButton
                              type="button"
                              sx={{ p: "10px" }}
                              aria-label="search"
                            >
                              <SearchIcon />
                            </IconButton>
                            <InputBase
                              sx={{ ml: 1, flex: 1, fontSize: 13 }}
                              placeholder="Go to file"
                            />

                            <IconButton
                              color="muted"
                              sx={{ p: "10px" }}
                              aria-label="file search"
                            >
                              <LuFileSearch2
                                style={{ trokeWidth: 1, fontSize: 16 }}
                              />
                            </IconButton>
                          </Paper>
                        </div>
                        <MyPopover
                          title="Add file"
                          bgColor="rgba(167, 165, 165, 0.1)"
                          color="#5F7161"
                        />
                        <MyPopover
                          bgColor="green"
                          color="#fff"
                          icon={
                            <IoCode style={{ strokeWidth: 1, fontSize: 16 }} />
                          }
                          title="Code"
                        />
                      </div>
                    </div>
                    <RepoTable />
                    <div className="repo-page-read-me">
                      <ReadMe />
                    </div>
                  </div>
                  <div className="repo-page-main-right">
                    <div className="about-repo">
                      <h3>About</h3>
                      <p>{repo.description}</p>
                      {repo.homepage && (
                        <Link to="#" className="about-homepage">
                          <FaLink
                            style={{
                              strokeWidth: 1,
                              fontSize: 14,
                              marginRight: "5px",
                              color: "#5F7161"
                            }}
                          />
                          {repo.homepage}
                        </Link>
                      )}

                      <a href="#">
                        <IoBookOutline
                          style={{
                            strokeWidth: 2,
                            fontSize: 18,
                            marginRight: "5px"
                          }}
                        />{" "}
                        Readme
                      </a>
                      <a href="#">
                        <GoLaw
                          style={{
                            strokeWidth: 1,
                            fontSize: 16,
                            marginRight: "5px"
                          }}
                        />
                        MIT license
                      </a>
                      <a href="#">
                        <GoLaw
                          style={{
                            strokeWidth: 1,
                            fontSize: 16,
                            marginRight: "5px"
                          }}
                        />
                        Security policy
                      </a>
                      <a href="#">
                        <TbActivity
                          style={{
                            strokeWidth: 2,
                            fontSize: 20,
                            marginRight: "5px"
                          }}
                        />
                        Activity
                      </a>
                      <a href="#">
                        <FaRegStar
                          style={{
                            strokeWidth: 1,
                            fontSize: 16,
                            marginRight: "5px"
                          }}
                        />
                        stars
                      </a>
                      <a href="#">
                        <GoEye
                          style={{
                            strokeWidth: 1,
                            fontSize: 16,
                            marginRight: "5px"
                          }}
                        />
                        watching
                      </a>
                      <a href="#">
                        <FaCodeFork
                          style={{
                            strokeWidth: 1,
                            fontSize: 16,
                            marginRight: "5px"
                          }}
                        />
                        forks
                      </a>
                      <a href="#">Report repository</a>
                    </div>

                    <div className="releases">
                      <h3>Releases</h3>
                      <p>No releases published</p>
                    </div>
                    <div className="packages">
                      <h3>Packages</h3>
                      <p>No packages published</p>
                    </div>

                    <div className="languages">
                      <h3>Languages</h3>
                      <LanguagesBar />
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
