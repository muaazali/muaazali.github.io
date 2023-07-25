import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectTile(props) {
  const [projectData, setProjectData] = useState({
    id: "",
    technologies: "",
    title: "Loading...",
    logoUrl: "",
    bannerUrl: "",
    description: "Loading...",
  });

  useEffect(() => {
    fetch(`/data/projects/${props.projectId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  return (
    <div className="tw-bg-gray-800 tw-rounded tw-p-5 tw-grid tw-gap-1 md:tw-grid-cols-2 tw-grid-rev">
      <div
        className={`tw-col-span-1 tw-px-3 ${
          props.contentAlign === "LEFT"
            ? "md:tw-order-first"
            : "md:tw-order-last"
        } `}
      >
        <img src={projectData.bannerUrl} className="tw-rounded"></img>
      </div>
      <div
        className={`tw-col-span-1 tw-text-center ${
          props.contentAlign === "RIGHT"
            ? "md:tw-text-right"
            : "md:tw-text-left"
        }`}
      >
        <h3 className="tw-text-2xl tw-font-semibold">{projectData.title}</h3>
        <span className="tw-text-sm tw-text-gray-400">
          {projectData.technologies}
        </span>
        <p className="tw-text-jusify tw-mt-2">{projectData.description}</p>
        <Link to={`/projects/${projectData.id}`}>
          <button
            className="main-button tw-font-semibold tw-mt-2"
            style={{ padding: "5px 15px" }}
          >
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
}
