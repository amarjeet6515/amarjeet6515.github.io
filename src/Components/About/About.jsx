import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {

  const downloadResume = () => {
    const previewUrl = "https://www.dropbox.com/s/ev7ca80o3k8wlzi/Amarjeet_Ray_Resum%C3%A9.pdf?dl=0";
    const downloadUrl =
      "https://www.dropbox.com/s/ev7ca80o3k8wlzi/Amarjeet_Ray_Resum%C3%A9.pdf?dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;


  };
  return (
    <>
      <div className="about center section"  id="about"  >
        <h1 data-aos="fade-right" style={{marginTop:"70px"}}>
          Hi, I am <span className="about__name">Amarjeet Ray</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right" id="user-detail-intro">
          Software development professional, adept at engineering robust and
          user-centric solutions. Collaborative, team player who is proficient
          in working with interdisciplinary teams and executing goal oriented
          projects. React, HTML, CSS, JavaScript proficiency. Strongly interested in obtaining a Software Developer
          position to work on enhancing the product experience. 
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/amarjeet6515"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:amarjeetray6515@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919835153072"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/amarjeet-ray-3800501b4/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://drive.google.com/file/d/1n8rr2zgXUDQ8j68bLWhJeZyNSvJxZtLv/view"
            aria-label="github"
            download
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="resume-link-2"
          > */}
          <button 
          className="nav-link resume" 
           id="resume-button-2"
            onClick={downloadResume}
            // className="link link--icon"
            target="_blank"
            rel="noreferrer"
            >
          <DescriptionIcon />

          </button>
          {/* </a> */}
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
