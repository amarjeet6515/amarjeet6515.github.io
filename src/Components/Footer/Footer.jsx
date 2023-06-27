import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/amarjeet6515"
          rel="noreferrer"
          target="_blank"
        >
          <p className="a">Copyright © 2023. All rights reserved</p>
          <h3 className="footer">Made with ❤ by Amarjeet Ray</h3>
        </a>
      </div>
    </>
  );
};
