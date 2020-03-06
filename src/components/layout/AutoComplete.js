import React from "react";

import "./AutoComplete.css";

const AutoComplete = ({ movies }) => {
  return (
    <div className="auto-complete">
      {movies.map(movie => (
        <div key={movie.id} className="list-movie">
          <a href={`/movie/${movie.id}/${movie.title}`}>
            {movie.title} ({movie.release_date.split("-")[0]})
          </a>
        </div>
      ))}
    </div>
  );
};

export default AutoComplete;
