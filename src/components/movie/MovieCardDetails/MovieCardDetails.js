import React from "react";
import { Link } from "react-router-dom";

import "./MovieCardDetails.css";
import convertToUrlString from "../../utils/ConvertToUrlString";

const MovieCardDetails = ({ movie, genres }) => {
  const year = movie.release_date.split("-")[0];
  const genreString = movie.genre_ids.map(genreID =>
    genres.find(genre => genre.id === genreID)
  );
  return (
    <div className="movie-card-details">
      <Link to={`/movie/${convertToUrlString(movie.title)}`}>
        <img
          src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt=""
        />
      </Link>
      <div className="movie-card-detail">
        <div className="movie-card-details-upper">
          <Link
            to={`/movie/${movie.id}/${convertToUrlString(movie.title)}`}
            className="movie-card-details-title"
          >
            {movie.title}
          </Link>
          <p className="movie-card-details-overview">{movie.overview}</p>
        </div>
        <div className="movie-card-details-bottom">
          <div className="rating">
            <i className="fas fa-star"></i> {movie.vote_average}/10
          </div>
          <div className="divider"></div>
          <div className="movie-card-details-footer">
            <span>
              <i className="far fa-calendar-alt"></i> {year}
            </span>
            <span>
              <i className="fas fa-tags"></i>
              {"  "}
              {genreString.map(genre => (
                <a
                  href={`/genre/${genre.id}/${convertToUrlString(
                    genre.name
                  )}/1`}
                  className="movie-genre"
                  key={genre.id}
                >
                  {genre.name}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
