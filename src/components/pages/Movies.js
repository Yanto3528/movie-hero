import React, { useEffect, useContext, useState, Fragment } from "react";

import Loading from "../layout/Loading";

import MovieContext from "../context/movie/movieContext";
import {
  GET_NOWPLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES
} from "../context/types";

import MovieList from "./MovieList";

const Movies = ({
  match: {
    params: { page, name }
  }
}) => {
  const movieContext = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const [availablePages, setAvailablePages] = useState([]);
  const {
    getMovieList,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
    totalPages,
    setLoading,
    loading
  } = movieContext;

  let type;
  let movies;
  if (name.replace("-", "_") === "now_playing") {
    type = GET_NOWPLAYING_MOVIES;
    movies = nowPlayingMovies;
  } else if (name === "upcoming") {
    type = GET_UPCOMING_MOVIES;
    movies = upcomingMovies;
  } else {
    type = GET_POPULAR_MOVIES;
    movies = popularMovies;
  }
  const path = `/movie/list/${name}`;

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
    getMovieList(name.replace("-", "_"), currentPage, type);
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
          name={name}
          movies={movies}
          path={path}
        />
      )}
    </Fragment>
  );
};

export default Movies;
