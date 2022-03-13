import React from "react";
import "./Profile.scss";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import ReactTooltip from "react-tooltip";

export default function Profile() {
  return (
    <div className="profile-container">
      <div>
        <img src="/Assets/Images/pfp.jpg" className="profile-picture"></img>
        <div className="name">Syed Muaaz Ali</div>
        <div className="title">Software Engineer</div>
      </div>
      <div className="icons-container">
        <a
          href="https://github.com/muaazali"
          target="_blank"
          rel="noreferrer"
          data-tip="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:muaazali512@gmail.com"
          target="_blank"
          rel="noreferrer"
          data-tip="Email"
        >
          <MdMail />
        </a>
        <a
          href="https://www.linkedin.com/in/muaaz-ali-5062751a6/"
          target="_blank"
          rel="noreferrer"
          data-tip="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://muaazali.github.io"
          target="_blank"
          rel="noreferrer"
          data-tip="Portfolio"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
}
