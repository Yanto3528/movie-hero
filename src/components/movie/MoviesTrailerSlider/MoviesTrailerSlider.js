import React, { useContext, useState } from "react";

import MovieTrailer from "../MovieTrailer/MovieTrailer";
import Video from "../../video/Video";

import MovieContext from "../../context/movie/movieContext";

import "./MoviesTrailerSlider.css";

const MoviesTrailerSlider = () => {
  const movieContext = useContext(MovieContext);
  const [movieIndex, setMovieIndex] = useState(0);
  const [curPos, setCurPos] = useState(0);

  const { upcomingMovies, isPlayVideo, trailerVideo } = movieContext;

  const nextTrailer = () => {
    if (movieIndex < upcomingMovies.length - 1) {
      setMovieIndex(curState => curState + 1);
      setCurPos(curState => curState + 100);
    }
  };

  const prevTrailer = () => {
    if (movieIndex > 0) {
      setMovieIndex(curState => curState - 1);
      setCurPos(curState => curState - 100);
    }
  };

  return (
    <section className="movies-trailer-slider">
      <div className="movies-trailer-slider-container">
        <div className="movies-trailer-slider-heading">
          <h2 className="movies-trailer-slider-header">
            Upcoming Movies Trailer
          </h2>
        </div>
        <div className="movie-trailer-container">
          <div
            className="movie-trailer-wrapper"
            style={{ transform: `translateX(-${curPos}%)` }}
          >
            {upcomingMovies.map(movie => (
              <MovieTrailer movie={movie} key={movie.id} />
            ))}
          </div>
          <div
            className="prev-trailer"
            onClick={prevTrailer}
            disabled={movieIndex === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            className="next-trailer"
            onClick={nextTrailer}
            disabled={movieIndex > upcomingMovies.length - 1}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      {isPlayVideo && <Video trailerVideo={trailerVideo} />}
    </section>
  );
};

export default MoviesTrailerSlider;
