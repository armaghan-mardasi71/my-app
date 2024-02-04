import "./ActivityHistory.css";
import React, { useContext, useEffect } from "react";
import ActivityMonth from "../ActivityMonth/ActivityMonth";
import { Octokit } from "octokit";
import { useState } from "react";
import myToken from "../../myToken";
import { useParams } from "react-router-dom";
import { reposContext } from "../../contexts/Contexts";

export default function ActivityHistory() {
  const { allRepos, setAllRepos } = useContext(reposContext);
console.log(allRepos)
  return (
    <div className="activity-history-wrapper">
      <h3 className="activity-history-title">Contribution activity</h3>
      <div className="activities-container">
        {allRepos.map((repo) => {
          return <ActivityMonth key={repo.id} {...repo} />;
        })}
      </div>
    </div>
  );
}
