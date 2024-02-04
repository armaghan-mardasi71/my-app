import "./ActivityMonth.css";
import React from "react";
import { GoRepo } from "react-icons/go";
import LangColors from "../LangColors/LangColors";
import moment from "moment";

export default function ActivityMonth(props) {
  return (
    <div className="activity-month">
      <h6 className="activity-month-year">
        {moment(props.created_at).format("MMMM  YYYY")}
      </h6>
      <div className="activity-month-content">
        <div className="activity-item-title">
          {" "}
          <span className="activity-icon-wrapper">
            {" "}
            <GoRepo className="activity-icon" />
          </span>{" "}
          <h3 className="activity-title">
            <a href="#">created 1 repository</a>
          </h3>
        </div>
        <ul className="activity-list">
          <div className="activity-left">
            {" "}
            <li>
              <a href="#" className="edited-repo-link">
                {props.full_name}
              </a>
            </li>
            <li>
              <a href="#" className="activity-commit-count">
                10 commits
              </a>
            </li>
          </div>
          <div className="activity-right">
            {" "}
            <li className="activity-lang">
              {props.language && <LangColors lang={props.language} />}
              {props.language}
            </li>
            <li className="activity-date">
              {moment(props.created_at).format("MMMM DD YYYY")}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
