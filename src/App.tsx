import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Profile from "./Components/Profile/Profile";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="card-container">
          <Profile></Profile>
          <hr style={{ width: "85%" }}></hr>
          <div className="heading">Tech Stack</div>
          <Skills></Skills>
          <hr style={{ width: "85%" }}></hr>
          <div className="heading">Work Experience</div>
          <WorkExperience></WorkExperience>
          <hr style={{ width: "85%" }}></hr>
          <div className="heading">Education</div>
          <Education></Education>
        </div>
      </div>
    </div>
  );
}

export default App;
