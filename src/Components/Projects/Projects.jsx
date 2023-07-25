import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectTile from "../ProjectTile/ProjectTile";

export default function Projects() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectsData(data);
      });
  }, []);

  return (
    <div className="tw-mx-10 tw-mt-20 tw-flex tw-justify-center">
      <div className="lg:tw-w-2/3">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <div className="tw-text-center tw-text-2xl tw-font-bold">
            Projects
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-my-5">
            {projectsData &&
              projectsData.gameProjects.map((project, index) => {
                return (
                  <div>
                    <ProjectTile
                      contentAlign={index % 2 == 0 ? "LEFT" : "RIGHT"}
                      projectId={project}
                    ></ProjectTile>
                  </div>
                );
              })}
          </div>
          <p className="tw-text-center">More to be added soon.</p>
        </div>
      </div>
    </div>
  );
}
