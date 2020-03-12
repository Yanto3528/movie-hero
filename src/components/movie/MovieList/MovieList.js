import React, { Fragment, useContext } from "react";

import MovieContext from "../../context/movie/movieContext";

import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Pagination from "../../layout/Pagination";

const MovieList = ({ movies, currentPage, name, path, availablePages }) => {
  const movieContext = useContext(MovieContext);

  const { totalPages } = movieContext;
  const title = name.replace("-", " ");

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
