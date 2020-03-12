import React, { useEffect, useContext, useState, Fragment } from "react";

import Loading from "../layout/Loading";

import MovieContext from "../context/movie/movieContext";

import MovieList from "../movie/MovieList/MovieList";

const Movies = ({
  match: {
    params: { page, year }
  }
}) => {
  const movieContext = useContext(MovieContext);
  const [availablePages, setAvailablePages] = useState([]);
  const { getMoviesByYear, moviesByYear, totalPages, loading } = movieContext;

  const currentPage = parseInt(page);
  const path = `/movie/released-year/${year}`;

  useEffect(() => {
    for (let i = currentPage; i < currentPage + 4; i++) {
      if (i > totalPages) {
        break;
      }
      setAvailablePages(curState => [...curState, i]);
    }
    //eslint-disable-next-line
  }, [totalPages]);

  useEffect(() => {
    getMoviesByYear(parseInt(year), currentPage);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      {totalPages && (
        <MovieList
          availablePages={availablePages}
          currentPage={currentPage}
          name={`released-year: ${year}`}
          movies={moviesByYear}
          path={path}
        />
      )}
    </Fragment>
  );
};

export default Movies;
