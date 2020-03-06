import React, { useContext } from "react";

import MovieTrailer from "../movie/MovieTrailer/MovieTrailer";

import Video from "../video/Video";

import MovieContext from "../context/movie/movieContext";
import "./WatchTrailer.css";

const WatchTrailer = () => {
  const movieContext = useContext(MovieContext);
  const { movie, isPlayVideo, trailerVideo } = movieContext;
  return (
    <div className="trailer">
      <div className="trailer-container">
        <div className="trailer-heading">
          <h2>Watch Trailer</h2>
        </div>
        <MovieTrailer movie={movie} />
      </div>
      {isPlayVideo && <Video trailerVideo={trailerVideo} />}
    </div>
  );
};

export default WatchTrailer;
