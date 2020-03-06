import React, { Fragment, useContext, useEffect, useState } from "react";

import MovieContext from "../context/movie/movieContext";

import MoviesGrid from "../movie/MoviesGrid/MoviesGrid";
import Pagination from "../layout/Pagination";
import Loading from "../layout/Loading";

const MovieList = ({ movies, currentPage, name, path, availablePages }) => {
  const movieContext = useContext(MovieContext);

  const { loading, totalPages } = movieContext;
  const title = name.replace("-", " ");

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Fragment>
      {movies && totalPages && (
        <Fragment>
          <div className="container">
            <MoviesGrid
              title={title}
              movies={movies}
              itemCount={movies.length}
            />
            <Pagination
              availablePages={availablePages}
              currentPage={currentPage}
              path={path}
              totalPages={totalPages}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieList;