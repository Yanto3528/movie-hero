import React, { Fragment, useContext, useEffect } from "react";

import MovieContext from "../context/movie/movieContext";

import MovieDetails from "../movie/MovieDetails/MovieDetails";
import WatchTrailer from "../layout/WatchTrailer";
import Loading from "../layout/Loading";

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const {
    getMovie,
    getCredits,
    trailerVideo,
    movie,
    credits,
    loading,
    setLoading,
    getTrailer
  } = movieContext;

  useEffect(() => {
    async function fetchMovieDetail() {
      setLoading(true);
      await Promise.all([
        getMovie(match.params.id),
        getCredits(match.params.id),
        getTrailer(match.params.id)
      ]);
      setLoading(false);
    }
    fetchMovieDetail();
    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        {movie && (
          <div className="container">
            <MovieDetails movie={movie} credits={credits} />
            {trailerVideo && <WatchTrailer />}
          </div>
        )}
      </Fragment>
    );
  }
};

export default Movie;
