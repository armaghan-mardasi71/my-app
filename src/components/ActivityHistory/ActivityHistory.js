import "./ActivityHistory.css";
import React, { useEffect } from "react";
import ActivityMonth from "../ActivityMonth/ActivityMonth";
import { Octokit } from "octokit";
import { useState } from "react";

export default function ActivityHistory() {
  const [allRepos, setAllRepos] = useState([]);
  useEffect(() => {
    const getRepos = async () => {
      const octokit = new Octokit({
        auth: `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`
      });

      const repoResult = await octokit.request(
        "GET /repos/:owner/:repo/stats/contributors",
        {
          owner: "mojtabast",
          repo: "cf8-ton",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );
      return repoResult.data;
    };
    getRepos().then((res) =>setAllRepos(res))
  }, []);

  console.log(allRepos);
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
