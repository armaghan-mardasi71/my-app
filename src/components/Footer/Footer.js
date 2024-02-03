import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a href="#" className="footer-logo">
        <img src="../images/github-logo-light.png" alt="logo" />
      </a>
      <span className="copy-right">© 2024 GitHub, Inc.</span>
      <ul className="footer-menu">
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Terms
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Privacy
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Security
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Status
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Docs
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Contact
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Manage cookies
          </a>
        </li>
        <li className="footer-menu-item">
          <a href="#" className="footer-menu-link">
            Do not share my personal information
          </a>
        </li>
      </ul>
    </div>
  );
}
