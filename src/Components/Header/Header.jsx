import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div style={{position:"fixed", marginTop:"-55px", marginBottom:"100px", opacity:"1", width:"100%", zIndex:"+1"}}>
      <header className={"header center " + themename}  id="home" >
        <h3>
          <a href="#home" className="link" >
            im@amarjeet6515
          </a>
        </h3>
        <Navbar />
      </header>
    </div>
  );
};
