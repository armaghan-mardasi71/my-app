import "./Repositories.css";
import React from "react";
import { useState, useContext } from "react";
import LangColors from "../LangColors/LangColors";
import moment from "moment";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { reposContext } from "../../contexts/Contexts";

export default function Repositories() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRepos, setFilteredRepos] = useState([]);
  const { allRepos, setAllRepos } = useContext(reposContext);

  const searchReposHandler = (event) => {
    setFilteredRepos(allRepos);
    setSearchInput(event.target.value);
    const filteredSearchResult = allRepos.filter((repo) => {
      return repo.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredRepos(filteredSearchResult);
  };

  return (
    <div className="all-repos-container">
      <div className="repos-search-box">
        <form>
          <input
            value={searchInput}
            type="text"
            placeholder={"Find a repository..."}
            onChange={searchReposHandler}
          />
          <div className="repos-search-buttons">
            {" "}
            <select id="type">
              <option value="">Type</option>
            </select>
            <select id="language">
              <option value="">Language</option>
            </select>
            <select id="sort">
              <option value="">Sort</option>
            </select>
          </div>
        </form>
      </div>

      <div className="all-repos">
        {searchInput.length
          ? filteredRepos.map((repo) => (
              <div className="repository-container">
                <div className="repository-info-wrapper">
                  <Link
                    to={`/${repo.full_name}`}
                    className="repository-title-link"
                  >
                    {repo.name}
                  </Link>
                  <span className="repo-badge">{repo.visibility}</span>
                </div>
                <p className="repo-desc">{repo.description}</p>
                <p className="repo-lang-update">
                  {repo.language ? (
                    <>
                      <span className="repo-lang">
                        <LangColors lang={repo.language} /> {repo.language}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  {repo.stargazers_count ? (
                    <>
                      <FaRegStar style={{ color: "grey", marginLeft: 10 }} />
                      {repo.stargazers_count}
                    </>
                  ) : (
                    ""
                  )}
                  {repo.forks_count ? (
                    <>
                      <FaCodeFork style={{ color: "grey", marginLeft: 10 }} />
                      {repo.forks_count}
                    </>
                  ) : (
                    ""
                  )}
                  <span className="last-update">
                    {"Updated on " +
                      moment(repo.updated_at).format("MMMM DD YYYY")}
                  </span>
                </p>
              </div>
            ))
          : allRepos.map((repo) => (
              <div className="repository-container">
                <div className="repository-info-wrapper">
                  <Link
                    to={`/${repo.full_name}`}
                    className="repository-title-link"
                  >
                    {repo.name}
                  </Link>
                  <span className="repo-badge">{repo.visibility}</span>
                </div>
                <p className="repo-desc">{repo.description}</p>
                <p className="repo-lang-update">
                  {repo.language ? (
                    <>
                      <span className="repo-lang">
                        <LangColors lang={repo.language} /> {repo.language}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                  {repo.stargazers_count ? (
                    <>
                      <FaRegStar style={{ color: "grey", marginLeft: 10 }} />
                      {repo.stargazers_count}
                    </>
                  ) : (
                    ""
                  )}
                  {repo.forks_count ? (
                    <>
                      <FaCodeFork style={{ color: "grey", marginLeft: 10 }} />
                      {repo.forks_count}
                    </>
                  ) : (
                    ""
                  )}
                  <span className="last-update">
                    {"Updated on " +
                      moment(repo.updated_at).format("MMMM DD YYYY")}
                  </span>
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
