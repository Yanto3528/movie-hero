import React, { Fragment, useContext, useEffect } from "react";

import MovieContext from "../context/movie/movieContext";

import MovieSlider from "../movie/MovieSlider/MovieSlider";
import MoviesTrailerSlider from "../movie/MoviesTrailerSlider/MoviesTrailerSlider";
import MoviesGrid from "../movie/MoviesGrid/MoviesGrid";
import Loading from "../layout/Loading";

import {
  GET_NOWPLAYING_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES
} from "../context/types";

const Home = () => {
  const movieContext = useContext(MovieContext);
  const {
    getMovieList,
    loading,
    setLoading,
    nowPlayingMovies,
    popularMovies
  } = movieContext;
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await Promise.all([
        getMovieList("now_playing", 1, GET_NOWPLAYING_MOVIES),
        getMovieList("upcoming", 1, GET_UPCOMING_MOVIES),
        getMovieList("popular", 1, GET_POPULAR_MOVIES)
      ]);
      setLoading(false);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <div className="container">
          <MovieSlider
            movies={nowPlayingMovies}
            title="Now Playing"
            path="/movie/list/now-playing/1"
          />
        </div>
        <MoviesTrailerSlider />
        <div className="container">
          <MoviesGrid
            title="Popular Movies"
            more="View all"
            path="/movie/list/popular/1"
            movies={popularMovies}
            itemCount={6}
          />
        </div>
      </Fragment>
    );
  }
};

export default Home;
