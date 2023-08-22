import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  const downloadResume = () => {
    const previewUrl = "https://www.dropbox.com/s/ev7ca80o3k8wlzi/Amarjeet_Ray_Resum%C3%A9.pdf?dl=0";
    const downloadUrl =
      "https://www.dropbox.com/s/ev7ca80o3k8wlzi/Amarjeet_Ray_Resum%C3%A9.pdf?dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;
  };
  return (
    <>
      <nav className="center nav" id="nav-menu" >
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              // className="link link--nav"
              className="nav-link home"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item ">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              // className="link link--nav"
              className="nav-link about"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              // className="link link--nav"
              className="nav-link skills"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              // className="link link--nav"
              className="nav-link projects"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              // className="link link--nav"
              className="nav-link contact"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item"  id="resume-button-2">
            {/* <a
              href="https://drive.google.com/file/d/1n8rr2zgXUDQ8j68bLWhJeZyNSvJxZtLv/view"
              onClick={toggleNavList}
              download
              target="_blank"
              rel="noreferrer"
              id="resume-link-1"
              className="nav-link resume"
            >
              Resume
            </a> */}
            <button className="nav-link resume"  id="resume-button-1" onClick={downloadResume}>
            Resume
            </button>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
