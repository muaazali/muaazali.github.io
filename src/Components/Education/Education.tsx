import React, { useEffect, useState } from "react";
import getEducation, { EducationData } from "../../Services/EducationProvider";
import "./Education.scss";

export default function Education() {
  const [education, setEducation] = useState<EducationData[]>([]);

  useEffect(() => {
    setEducation(getEducation());
  }, []);

  return (
    <div className="education-wrapper">
      {education.map((e) => (
        <div className="education-item">
          <img
            src={e["institute-picture-url"]}
            className="institute-picture"
          ></img>
          <div className="institute-name">
            {e["institute-name"]}
            <span className="institute-location">
              , {e["institute-location"]}
            </span>
          </div>
          <div className="degree-name">{e["degree-name"]}</div>
          <div className="grade">{e.grade}</div>
        </div>
      ))}
    </div>
  );
}
