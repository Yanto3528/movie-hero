import React, { useEffect, useContext, useState, Fragment } from "react";

import MovieContext from "../context/movie/movieContext";

import MovieList from "./MovieList";
import Loading from "../layout/Loading";

const Genre = ({
  match: {
    params: { id, page, name }
  }
}) => {
  const movieContext = useContext(MovieContext);
  const [availablePages, setAvailablePages] = useState([]);
  const {
    getGenreBasedMovies,
    genreMovies,
    totalPages,
    loading
  } = movieContext;

  const path = `/genre/${id}/${name}`;
  const currentPage = parseInt(page);

  useEffect(() => {
    getGenreBasedMovies(id, currentPage);
    for (let i = currentPage; i < currentPage + 4; i++) {
      if (i > totalPages) {
        break;
      }
      setAvailablePages(curState => [...curState, i]);
    }
    //eslint-disable-next-line
  }, [totalPages]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      {totalPages && (
        <MovieList
          availablePages={availablePages}
          currentPage={currentPage}
          name={name}
          movies={genreMovies}
          path={path}
        />
      )}
    </Fragment>
  );
};

export default Genre;
