import "./Repo.css";
import React from "react";
import LangColors from "../LangColors/LangColors";
import { Link } from "react-router-dom";
export default function Repo(props) {
  return (
    <div className="repo-container">
      <div className="repo-info-wrapper">
        <Link to="/repo" className="repo-title-link">
          {props.name}
        </Link>
        <span className="repo-badge">{props.visibility}</span>
      </div>
      <p className="repo-desc">{props.description}</p>

      <span className="repo-lang">
        {props.language && <LangColors lang={props.language} />}

        {props.language}
      </span>
    </div>
  );
}
