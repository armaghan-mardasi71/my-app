import "./Issues.css";
import React from "react";
import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { useParams } from "react-router-dom";
import MyPopover from "../Popover/Popover";
import { FiTag } from "react-icons/fi";
import { LuMilestone } from "react-icons/lu";
import { GoIssueOpened } from "react-icons/go";
import myToken from "../../myToken";

export default function Issues() {
  const [labels, setLabels] = useState([]);
  const [milestones, setMileStones] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getRepoIssues = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/labels",
        {
          owner: `${params.repoOwner}`,
          repo: `${params.repoName}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      return repoResult.data;
    };
    getRepoIssues().then((res) => {
      setLabels(res.length);
    });
  }, []);
  useEffect(() => {
    const getRepoIssues = async () => {
      const octokit = new Octokit({
        auth: myToken
      });

      const repoResult = await octokit.request(
        "GET /repos/{owner}/{repo}/milestones",
        {
          owner: `${params.repoOwner}`,
          repo: `${params.repoName}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      return repoResult.data;
    };
    getRepoIssues().then((res) => {
      setMileStones(res.length);
    });
  }, []);

  // console.log(repoIssues);
  return (
    <div className="repo-issues-container">
      <div className="issue-contribution-box">
        <h3>
          👋 Want to contribute to {params.repoOwner} / {params.repoName} ?
        </h3>
        <p>
          If you have a bug or an idea, browse the open issues before opening a
          new one. You can also take a look at the{" "}
          <a href="#">Open Source Guide.</a>
        </p>
      </div>

      <div className="new-issue-header">
        {" "}
        <form action="#" className="search-repo-issues">
          <MyPopover
            title="Filters"
            bgColor="rgba(167, 165, 165, 0.1)"
            color="#5F7161"
            divider={false}
            rightBorder="none"
            myHeight="33px"
          />
          <input type="text" placeholder="is:issue is:open " />
        </form>
        <div className="issues-label-milestone">
          <button className="labels">
            <FiTag style={{ strokeWidth: 2, fontSize: 25 }} />
            <a href="#">Labels</a>
            <span className="badge">{labels}</span>
          </button>
          <button className="milestones">
            <LuMilestone style={{ strokeWidth: 2, fontSize: 25 }} />{" "}
            <a href="#">Milestones</a>
            <span className="badge">{milestones}</span>
          </button>
        </div>
        <button className="new-issue">
          <a href="#">New issue</a>
        </button>
      </div>
      <div className="issue-empty-box">
        <GoIssueOpened style={{ fontSize: 25, marginBottom: 30 }} />
        <h3>Welcome to issues!</h3>
        <p>
          Issues are used to track todos, bugs, feature requests, and more. As
          issues are created, they’ll appear here in a searchable and filterable
          list. To get started, you should <a href="#"> create an issue.</a>
        </p>
      </div>
    </div>
  );
}
