import React from "react";
import { Link } from "react-router-dom";

import "./Title.css";

const Title = props => {
  return (
    <div className="title">
      <h1 className="title-heading">{props.title}</h1>
      {props.more && (
        <a href={props.path} className="title-more">
          {props.more} <i className="fas fa-chevron-right"></i>
        </a>
      )}
    </div>
  );
};

export default Title;
