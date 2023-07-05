import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <header className={"header center " + themename}  id="home">
        <h3>
          <a href="#home" className="link" >
            im@amarjeet6515
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
