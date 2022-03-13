import React from "react";
import { FaHtml5, FaReact, FaUnity } from "react-icons/fa";
import {
  SiAngular,
  SiBlender,
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReactivex,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills">
        <div className="header">Game</div>
        <div className="skills-list">
          <span>
            <FaUnity data-tip="Unity"></FaUnity>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              className="tooltip"
              delayShow={500}
            />
          </span>
          <span>
            <SiCsharp data-tip="C#"></SiCsharp>
          </span>
          <span>
            <SiBlender data-tip="Blender"></SiBlender>
          </span>
        </div>
      </div>
      <div className="skills">
        <div className="header">Web</div>
        <div className="skills-list">
          <span>
            <SiNodedotjs data-tip="NodeJS"></SiNodedotjs>
          </span>
          <span>
            <FaReact data-tip="React"></FaReact>
          </span>
          <span>
            <SiAngular data-tip="Angular"></SiAngular>
          </span>
          <span>
            <SiReactivex data-tip="RxJS"></SiReactivex>
          </span>
        </div>
      </div>
      <div className="skills">
        <div className="header">General</div>
        <div className="skills-list">
          <span>
            <SiCplusplus data-tip="C++"></SiCplusplus>
          </span>
          <span>
            <SiPython data-tip="Python"></SiPython>
          </span>
        </div>
      </div>
    </div>
  );
}
