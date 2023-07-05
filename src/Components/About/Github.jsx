import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="amarjeet6515"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
          class="react-activity-calendar"
        />
        <div>
          <img src="https://github-readme-streak-stats.herokuapp.com?user=amarjeet6515&theme=tokyonight&hide_border=true" id="github-streak-stats" alt="" />
          &nbsp;&nbsp;
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=amarjeet6515&theme=tokyonight&hide_border=true" id="github-top-langs" alt="" />
          <img src="https://github-readme-stats.vercel.app/api?username=amarjeet6515&theme=tokyonight&hide_border=true" id="github-stats-card" alt="" />
        </div>
      </div>
    </>
  );
};
