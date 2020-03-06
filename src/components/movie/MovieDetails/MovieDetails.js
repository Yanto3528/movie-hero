import React from "react";

import Title from "../../layout/Title";
import Details from "../../layout/Details";

import convertToUrlString from "../../utils/ConvertToUrlString";

import "./MovieDetails.css";

const MovieDetails = ({ movie, credits }) => {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <section className="movie-details">
      <Title title={movie.title} />
      <div className="details">
        <div className="left-side">
          <img
            src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt=""
          />
          <div className="left-group-detail">
            <Details
              isRating
              header="Rating"
              content={`${movie.vote_average}/10`}
            />
            <Details
              header="Vote Count"
              content={movie.vote_count.toLocaleString()}
            />
            <Details
              header="Languages"
              content={movie.spoken_languages.map(
                language => `${language.name} `
              )}
            />
            <Details
              header="Budget"
              content={`$ ${movie.budget.toLocaleString()}`}
            />
            <Details
              header="Revenue"
              content={`$ ${movie.revenue.toLocaleString()}`}
            />
          </div>
        </div>
        <div className="right-side">
          <h2>Movie Details</h2>
          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>
          <div className="detail-group">
            <h3>Release Date</h3>
            <p>{movie.release_date}</p>
          </div>
          <div className="detail-group">
            <h3>Run Time</h3>
            <p>{`${hours}h ${minutes}m`}</p>
          </div>
          <div className="detail-group">
            <h3>Country</h3>
            {movie.production_countries.map(country => (
              <span key={country.iso_3166_1} className="name">
                {country.name}
              </span>
            ))}
          </div>
          <div className="detail-group">
            <h3>Genre</h3>
            {movie.genres.map(genre => (
              <a
                href={`/genre/${genre.id}/${convertToUrlString(genre.name)}/1`}
                className="movie-genre text-normal"
                key={genre.id}
              >
                {genre.name}
              </a>
            ))}
          </div>
          <div className="detail-group">
            <h3>Actors</h3>
            {credits.cast.map(cast => (
              <span key={cast.id} className="name">
                {cast.name}
              </span>
            ))}
          </div>
          <div className="detail-group">
            <h3>Director</h3>
            {credits.crew
              .filter(crew => crew.job === "Director")
              .map(crew => (
                <span key={crew.id} className="name">
                  {crew.name}
                </span>
              ))}
          </div>
          <div className="detail-group">
            <h3>Producer</h3>
            {credits.crew
              .filter(crew => crew.job === "Producer")
              .map(crew => (
                <span key={crew.id} className="name">
                  {crew.name}
                </span>
              ))}
          </div>
          <div className="detail-group">
            <h3>Production</h3>
            {movie.production_companies.map(company => (
              <span key={company.id} className="name">
                {company.name}
              </span>
            ))}
          </div>
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Offical Website
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
