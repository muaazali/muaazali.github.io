import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProject(props) {
  const [projectData, setProjectData] = useState({
    id: "",
    technologies: "",
    title: "Loading...",
    logoUrl: "",
    shortDescription: "Loading...",
  });

  useEffect(() => {
    fetch(`/data/projects/${props.projectId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-gray-800 tw-p-5 tw-rounded tw-h-full">
      <img
        src={`${
          projectData.logoUrl ? projectData.logoUrl : projectData.bannerUrl
        }`}
        className="tw-rounded-full tw-object-cover tw-h-48 tw-w-48"
      ></img>
      <h3 className="tw-text-2xl tw-font-semibold">{projectData.title}</h3>
      <span className="tw-text-sm tw-text-gray-400">
        {projectData.technologies}
      </span>
      <p className="tw-text-jusify tw-mt-2">{projectData.shortDescription}</p>
      <Link to={`/projects/${projectData.id}`}>
        <button
          className="main-button tw-font-semibold tw-mt-2"
          style={{ padding: "5px 15px" }}
        >
          Show Details
        </button>
      </Link>
    </div>
  );
}
