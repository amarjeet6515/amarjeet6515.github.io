import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import Amarjeet from "../../Assets/Requird-image/Amarjeet.JPG";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about" class="about section" >
        <div className="section" data-aos="fade-right" >
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={Amarjeet} className="home-img" alt="myimage" />
            </div>
            <div className="introduction_datacontainer" >
              <h4  >
                Hi Everyone, I am{" "}
                <span className="different" id="user-detail-name">Amarjeet Ray </span> from{" "}
                <span className="different"> Hajipur, Bihar</span>. I am pleased to share that I have 
                successfully obtained my Bachelor's degree in Civil Engineering from 
                Techno India College of Technology, Kolkata. Additionally, I have recently completed
                 a comprehensive Full Stack Web Development course at Masai School, where I honed my skills .
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
