import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiReact,
  SiJavascript
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import bewakoof from "../../Assets/Requird-image/bewakoof.png";
import healthkart from "../../Assets/Requird-image/healthkart.png";
import ecotourism from "../../Assets/Requird-image/ecotourism.png";

export const Projects = () => {
  return (
    <>
      <div className="section" id="projects"  >
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* Ecotourism clone */}
        <div className="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={ecotourism} alt="Ecotourism.com" />
              </div>
            </div>
            <div data-aos="fade-right" className="project_information">
              <h2 className="project-title">Ecotourism</h2>
              <p className="project-description">
              Ecotourism is a platform where user can book packages for different ecotourism locations all over India. It also offer varieties of activities at the booked location. This is collaborative project and we were 2 collaborators.
              </p>
              <div className="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <SiReact/>
                <SiRedux/>
                <SiNodedotjs/>
              </div>
              <div>
                <a
                  href=" https://eco-tourism-opal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/code735/Eco-tourism"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Healthkart clone */}
        <div className="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={healthkart} alt="healthkart-clone" />
              </div>
            </div>
            <div  className="project_information" data-aos="fade-right">
              <h2 className="project-title">HealthKart Clone</h2>
              <p className="project-description">
              This project is a clone of the HealthKart website. It is an online portal for Dietary supplements and health devices in the Health care industry. During our construct week in Masai School, we as a group of 4 members collaborated and cloned the website within 6 days time.
              </p>
              <div className="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://graceful-speculoos-4458b2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dev-42/HealthKart-Clone"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                  
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* bewakoof clone */}
        <div className="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={bewakoof} alt="bewakoof clone" />
              </div>
            </div>
            <div  data-aos="fade-right"  className="project_information">
              <h2 className="project-title">Bewakoof Clone</h2>
              <p className="project-description">
              Bewakoof is a one-of-a-kind online fashion and lifestyle E-commerce firm. It provides a fashionable range of clothing centred on sparkling and joyful patterns that appeal to millennials..During our construct week in Masai School, we as a group of 5 members collaborated and cloned the website within 6 days time.
              </p>
              <div className="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript/>
              </div>
              <div>
                <a
                  href="https://bewakoof-clone-pw11.vercel.app/homepage.html"
                  target="_blank"
                  rel="noreferrer"
                  className="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/amarjeet6515/Bewakoof_clone_pw11"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Ecotourism clone */}
        <div className="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={ecotourism} alt="Ecotourism.com" />
              </div>
            </div>
            <div data-aos="fade-right"  className="project_information" >
              <h2 className="project-title">Ecotourism</h2>
              <p className="project-description">
              Ecotourism is a platform where user can book packages for different ecotourism locations all over India. It also offer varieties of activities at the booked location. This is collaborative project and we were 2 collaborators.
              </p>
              <div className="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <SiReact/>
                <SiRedux/>
                <SiNodedotjs/>
              </div>
              <div>
                <a
                  href=" https://eco-tourism-opal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/code735/Eco-tourism"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
