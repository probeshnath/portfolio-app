import React from "react";
import "./Nav.scss";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="container">
        <div className="wrapper_nav">
          <div className="left">
            {menuOpen && (
              <a href="#intro" className="logo">
                PROBESH DN
              </a>
            )}
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
