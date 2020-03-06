import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MovieContext from "../../context/movie/movieContext";
import "./MovieTrailer.css";
import convertToUrlString from "../../utils/ConvertToUrlString";

const MovieTrailer = ({ movie }) => {
  const movieContext = useContext(MovieContext);
  const { toggleIsPlayVideo, getTrailer, genres } = movieContext;
  let genreString;
  if (movie.genre_ids) {
    genreString = movie.genre_ids.map(genreID =>
      genres.find(genre => genre.id === genreID)
    );
  } else {
    genreString = movie.genres.map(genre => genre);
  }

  const playVideo = () => {
    toggleIsPlayVideo();
    getTrailer(movie.id);
  };

  return (
    <div className="movie-trailer">
      <img
        src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt=""
      />
      <div className="play-video-btn" onClick={playVideo}>
        <i className="fas fa-play"></i>
      </div>
      <div className="video-detail">
        <Link
          to={`/movie/${movie.id}/${convertToUrlString(movie.title)}`}
          className="movie-title"
        >
          {movie.title}
        </Link>
        <div className="movie-genres">
          {genreString.map(genre => (
            <a
              href={`/genre/${genre.id}/${convertToUrlString(genre.name)}/1`}
              className="movie-genre text-small"
              key={genre.id}
            >
              {genre.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
