import React from "react";

import "./Details.css";

const Details = props => {
  return (
    <div className="detail">
      <h3>{props.header}</h3>
      <p>
        {props.isRating && <i className="fas fa-star"></i>}
        <span>{props.content}</span>
      </p>
    </div>
  );
};

export default Details;
