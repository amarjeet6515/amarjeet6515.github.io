import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Amarjeet Ray</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Software development professional, adept at engineering robust and
          user-centric solutions. Collaborative, team player who is proficient
          in working with interdisciplinary teams and executing goal oriented
          projects. Strongly interested in obtaining a Software Developer
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
          <a
            href="https://drive.google.com/file/d/1QP-27vYUWjfK3NCkJOvcUdbFiO7TEStE/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        {/* <Techstacks /> */}
      </section>
    </>
  );
};
