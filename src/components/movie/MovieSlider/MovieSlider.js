import React, { useState, createRef } from "react";

import MovieCard from "../MovieCard/MovieCard";
import Title from "../../layout/Title";

import "./MovieSlider.css";

const MovieSlider = ({ movies, title, path }) => {
  const [movieIndex, setMovieIndex] = useState(0);
  const [curPos, setCurPos] = useState(0);
  const cardRef = createRef(null);
  let width;
  let margin;

  const nextMovie = () => {
    width = cardRef.current.offsetWidth / 10;
    margin =
      parseInt(
        window.getComputedStyle(cardRef.current).marginRight.split("px")[0]
      ) / 10;
    if (movieIndex <= movies.length - 5) {
      setMovieIndex(curState => curState + 1);
      setCurPos(curState => curState + width + margin);
    }
    console.log(cardRef);
  };

  const prevMovie = () => {
    width = cardRef.current.offsetWidth / 10;
    margin =
      parseInt(
        window.getComputedStyle(cardRef.current).marginRight.split("px")[0]
      ) / 10;
    if (movieIndex > 0) {
      setMovieIndex(curState => curState - 1);
      setCurPos(curState => curState - width - margin);
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
              <MovieCard ref={cardRef} key={movie.id} movie={movie} />
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
