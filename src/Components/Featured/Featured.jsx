import React, { useState, useEffect } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";
import { Link } from "react-router-dom";
import FeaturedProject from "./FeaturedProject";

export default function Featured() {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    fetch("/data/featured.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeaturedData(data);
      });
  }, []);

  return (
    <div className="">
      <div className="tw-text-center tw-text-2xl tw-font-bold">
        Featured Projects
      </div>
      <div className="tw-my-5 tw-flex tw-justify-center tw-gap-1 md:tw-gap-4 lg:tw-gap-10 tw-flex-wrap">
        {featuredData &&
          featuredData.projects.map((project, index) => {
            return (
              <div className="tw-w-80 tw-h-96">
                <FeaturedProject projectId={project}></FeaturedProject>
              </div>
            );
          })}
      </div>
      <div className="tw-text-center">
        <Link to={"/projects"}>
          <button className="main-button tw-font-semibold">
            Show All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
