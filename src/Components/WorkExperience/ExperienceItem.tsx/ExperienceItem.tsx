import React from "react";
import { Experience } from "../../../Services/ExperienceProvider";
import "./ExperienceItem.scss";

export default function ExperienceItem(props: { data: Experience }) {
  return (
    <div className="container">
      <div className="left">
        <img
          src={props.data["company-picture-url"]}
          className="company-picture"
        ></img>
        <div className="company-name">{props.data["company-name"]}</div>
        <div className="company-url">
          <a
            href={`https://${props.data["company-url"]}`}
            target="_blank"
            rel="noreferrer"
          >
            {props.data["company-url"]}
          </a>
        </div>
      </div>
      <div className="right">
        <div className="title">{props.data.position}</div>
        <div className="tenure">{props.data.tenure}</div>
      </div>
    </div>
  );
}
