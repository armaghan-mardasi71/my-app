import "./Overview.css";
import React, { useContext } from "react";
import Repo from "../Repo/Repo";
import Calendar from "../Activitygraph/Calendar";
import ActivityHistory from "../ActivityHistory/ActivityHistory";
import { reposContext } from "../../contexts/Contexts";

export default function Overview() {
  const { allRepos, setAllRepos } = useContext(reposContext);

  return (
    <div className="overview-container">
      <div className="repos-section">
        <h3 className="repo-title">Popular Repositories</h3>
        <div className="overview-repos">
          {allRepos.map((repo) => (
            <Repo key={repo.id} {...repo} />
          ))}
        </div>
      </div>
      <h3 class="contribution-title">
        <span className="contributions-count">0</span>contributions in the last
        year
      </h3>
      <Calendar />
      <ActivityHistory />
    </div>
  );
}
