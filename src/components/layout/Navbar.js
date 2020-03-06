import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-content">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <div className="navbar-menu">
            <div
              className={`hamburger ${menuOpen ? "menu-open" : ""}`}
              onClick={onToggleMenu}
            >
              <div></div>
            </div>
            <div className="navbar-list">
              <a href="/" className="navbar-list-item">
                Home
              </a>
              <a href="/movie/list/now-playing/1" className="navbar-list-item">
                Now Playing
              </a>
              <a href="/movie/list/upcoming/1" className="navbar-list-item">
                Upcoming
              </a>
              <a href="/movie/list/popular/1" className="navbar-list-item">
                Popular
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
