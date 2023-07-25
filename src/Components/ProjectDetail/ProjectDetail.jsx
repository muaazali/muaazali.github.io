import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  let { projectId } = useParams();

  const [projectData, setProjectData] = useState({
    id: "",
    technologies: "",
    title: "Loading...",
    logoUrl: "",
    bannerUrl: "",
    description: "Loading...",
    paragraphs: [],
  });

  useEffect(() => {
    fetch(`/data/projects/${projectId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
      });
  }, [projectId]);

  return (
    <div className="tw-w-100 tw-flex tw-flex-col tw-items-center">
      <div className="tw-bg-gray-800 tw-rounded tw-mx-10 tw-mt-20 tw-p-5 lg:tw-w-3/4">
        <div className={`tw-flex tw-justify-center`}>
          <img src={projectData.bannerUrl} width="500"></img>
        </div>
        <div className={`tw-col-span-1 tw-text-center`}>
          <h1 className="tw-text-4xl tw-font-bold">{projectData.title}</h1>
          <span className="tw-text-sm tw-text-gray-400">
            {projectData.technologies}
          </span>
          <p className="tw-text-jusify tw-mt-2 tw-text-sm">
            {projectData.description}
          </p>
          <div className="tw-mt-10">
            {projectData.paragraphs.map((paragraph, index) => (
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-2 tw-my-10">
                <div
                  className={`tw-p-5 ${
                    index % 2 == 0 ? "md:tw-order-first" : "md:tw-order-last"
                  }`}
                >
                  <img src={paragraph.imageUrl} className="tw-rounded"></img>
                </div>
                <div>
                  <h3
                    className={`tw-text-3xl tw-font-semibold ${
                      index % 2 == 0 ? "tw-text-left" : "tw-text-right"
                    }`}
                  >
                    {paragraph.heading}
                  </h3>
                  <div className="tw-text-justify">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Maxime ab temporibus odio rerum numquam cumque nulla, quis
                      veniam asperiores tempore velit, consequuntur tenetur id!
                      Error reiciendis recusandae nemo dicta tempora. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Sunt
                      facere nesciunt distinctio delectus consectetur maxime
                      eligendi, vero tenetur expedita sint optio, est deserunt
                      suscipit cupiditate officiis reiciendis laudantium
                      perferendis illo.
                    </p>
                    {index == 0 && (
                      <div className="tw-flex tw-items-center tw-justify-start tw-flex-wrap">
                        {projectData.playStoreUrl && (
                          <Link className="tw-block tw-max-w-fit">
                            <img
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                              width="200px"
                            ></img>
                          </Link>
                        )}

                        {projectData.appStoreUrl && (
                          <Link className="tw-block tw-max-w-fit">
                            <img
                              src="https://i.imgur.com/WIpgMmK.png"
                              width="177px"
                            ></img>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={`/projects/`}>
            <button
              className="main-button tw-font-semibold tw-mt-2"
              style={{ padding: "5px 15px" }}
            >
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
