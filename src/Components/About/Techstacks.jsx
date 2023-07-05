import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiNetlify,
} from "react-icons/si";
// import { SiMaterialui } from "react-icons/si";

import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right" id="skills">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div class="skills-card">
            <SiJavascript className="skills-card-img" />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card">
            <SiHtml5 className="skills-card-img"/>
            <h5  className="skills-card-name" >HTML</h5>
          </div>
          <div class="skills-card">
            <DiCss3 className="skills-card-img" />
            <h5  className="skills-card-name" >CSS</h5>
          </div>
          <div class="skills-card">
            <FaNodeJs  className="skills-card-img"/>
            <h5  className="skills-card-name" >Nodejs</h5>
          </div>
          <div class="skills-card">
            <SiExpress className="skills-card-img" />
            <h5  className="skills-card-name" >Express</h5>
          </div>
          <div class="skills-card">
            <FaReact className="skills-card-img" />
            <h5  className="skills-card-name" >React</h5>
          </div>
          <div class="skills-card">
            <SiRedux className="skills-card-img" />
            <h5  className="skills-card-name" >Redux</h5>
          </div>
          {/* <div>
            <SiMaterialui />
            <h5>Chakra Ui</h5>
          </div> */}
          {/* <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div> */}
          <div class="skills-card">
            <SiNetlify className="skills-card-img" />
            <h5  className="skills-card-name" >Netlify</h5>
          </div>
          <div class="skills-card">
            <VscGithub className="skills-card-img" />
            <h5 className="skills-card-name" >Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
