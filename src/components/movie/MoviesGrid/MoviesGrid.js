import React, { useContext } from "react";

import Title from "../../layout/Title";
import MovieCardDetails from "../MovieCardDetails/MovieCardDetails";

import MovieContext from "../../context/movie/movieContext";
import "./MoviesGrid.css";

const MoviesGrid = ({ title, more, movies, itemCount, path }) => {
  const movieContext = useContext(MovieContext);
  const { genres } = movieContext;

  return (
    <div className="movies-grid">
      <Title title={title} more={more} path={path} />
      <div className="movies-grid-container">
        {movies.length > 0 &&
          genres.length > 0 &&
          movies
            .filter((movie, index) => index < itemCount)
            .map(movie => (
              <MovieCardDetails key={movie.id} movie={movie} genres={genres} />
            ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
