import React, { useEffect, useState } from "react";
import { Experience } from "../../Services/ExperienceProvider";
import getExperience from "../../Services/ExperienceProvider";
import ExperienceItem from "./ExperienceItem.tsx/ExperienceItem";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(getExperience());
  }, []);

  return (
    <div className="wrapper">
      {experiences.map((experience, index) => (
        <ExperienceItem data={experience} key={index}></ExperienceItem>
      ))}
    </div>
  );
}
