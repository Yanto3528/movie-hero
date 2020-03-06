import React, { useContext } from "react";

import { Link } from "react-router-dom";
import MovieContext from "../../context/movie/movieContext";

import "./MovieCard.css";
import convertToUrlString from "../../utils/ConvertToUrlString";

const MovieCard = ({ movie }) => {
  const movieContext = useContext(MovieContext);
  const { getTrailer, toggleIsPlayVideo, genres } = movieContext;
  let genresObj;
  if (movie.genre_ids) {
    genresObj = movie.genre_ids
      .filter((genreID, index) => index < 3)
      .map(genreID => genres.find(genre => genre.id === genreID));
  }

  const playVideo = () => {
    toggleIsPlayVideo();
    getTrailer(movie.id);
  };

  return (
    <div className="movie-card">
      <div className="image-overlay"></div>
      <img
        className="poster"
        src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt=""
      />
      <div className="movie-card-content">
        <i className="fas fa-star"></i> {movie.vote_average}/10
        <Link
          to={`/movie/${movie.id}/${convertToUrlString(movie.title)}`}
          className="movie-card-title"
        >
          {movie.title}
        </Link>
        {genresObj.map(genreObj => (
          <a
            href={`/genre/${genreObj.id}/${convertToUrlString(
              genreObj.name
            )}/1`}
            className="movie-genre genre-bottom"
            key={genreObj.id}
          >
            {genreObj.name}
          </a>
        ))}
      </div>
      <i className="far fa-play-circle play-video" onClick={playVideo}></i>
    </div>
  );
};

export default MovieCard;
