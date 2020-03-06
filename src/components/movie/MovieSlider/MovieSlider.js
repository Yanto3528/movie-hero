import React, { useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import Title from "../../layout/Title";

import "./MovieSlider.css";

const MovieSlider = ({ movies, title, path }) => {
  const [movieIndex, setMovieIndex] = useState(0);
  const [curPos, setCurPos] = useState(0);

  const nextMovie = () => {
    if (movieIndex <= movies.length - 5) {
      setMovieIndex(curState => curState + 1);
      setCurPos(curState => curState + 43);
    }
  };

  const prevMovie = () => {
    if (movieIndex > 0) {
      setMovieIndex(curState => curState - 1);
      setCurPos(curState => curState - 43);
    }
  };
  return (
    <section>
      <Title title={title} more="View all " path={path} />
      <div className="movie-slider-container">
        <div className="movie-card-wrapper">
          <div
            className="movie-card-container"
            style={{ transform: `translate(-${curPos}rem)` }}
          >
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <div className="prev-movie" onClick={prevMovie}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="next-movie" onClick={nextMovie}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default MovieSlider;
