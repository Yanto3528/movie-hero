import React from "react";

import movieDBLogo from "../../movie_db_logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <p>Copyright &copy; 2020, all rights reserved</p>
        <img src={movieDBLogo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
