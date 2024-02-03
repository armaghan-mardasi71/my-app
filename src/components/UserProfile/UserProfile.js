import "./UserProfile.css";
import React, { useEffect, useState, useContext } from "react";
import { RiGroupLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { Octokit } from "octokit";
import { userInfoContext } from "../../contexts/Contexts";

export default function UserProfile() {
  const { userInfo, setUserInfo } = useContext(userInfoContext);

  return (
    <div className="user-profile-container">
      <img src={userInfo.avatar_url} className="profile-img" alt="user image" />
      <h1 className="user-profile-title">{userInfo.name}</h1>
      <p className="user-id">{userInfo.login}</p>
      <a className="follow-btn" href="#">
        Follow
      </a>
      <p className="user-desc">{userInfo.bio}</p>
      <div className="follower-following">
        <RiGroupLine
          style={{ fontWeight: "bolder", fontSize: 16, marginRight: "5px" }}
        />
        <a href="#">
          {" "}
          <span className="follower-number">{userInfo.followers}</span>
          followers
        </a>
        <a href="#">
          <span className="following-number">{userInfo.following}</span>
          following
        </a>
      </div>
      <div className="website-link">
        <IoIosLink />
        <a href="#">{userInfo.blog}</a>
      </div>
      <div className="profile-achievements">
        <h3>Achievements</h3>
        <a href="#" className="achievement-logo">
          <img src="../images/yolo.png" alt="yolo" />
        </a>
        <a href="#" className="achievement-logo">
          <img src="../images/arctic.png" alt="arctic" />
        </a>
        <a href="#" className="achievement-logo">
          <img src="../images/pull-shark.png" alt="pull shark" />
        </a>
      </div>
      <div className="beta-feedback">
        <span className="beta">Beta</span>
        <a href="#" className="feedback-link">
          Send feedback
        </a>
      </div>

      <a href="#" className="block-report-link">
        Block or Report
      </a>
    </div>
  );
}
