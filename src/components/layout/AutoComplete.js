import React from "react";
import "./AutoComplete.css";

import convertToUrlString from "../utils/ConvertToUrlString";

const AutoComplete = ({ movies }) => {
  return (
    <div className="auto-complete">
      {movies.map(movie => (
        <div key={movie.id} className="list-movie">
          <a href={`/movie/${movie.id}/${convertToUrlString(movie.title)}`}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </a>
        </div>
      ))}
    </div>
  );
};

export default AutoComplete;
