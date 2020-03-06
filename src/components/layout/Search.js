import React, { useState, useContext, useEffect } from "react";
import MovieContext from "../context/movie/movieContext";

import AutoComplete from "./AutoComplete";

import "./Search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [timer, setTimer] = useState();
  const [blur, setBlur] = useState(false);
  const movieContext = useContext(MovieContext);
  const { searchMovies, searchMovieList } = movieContext;
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        searchMovies(searchText);
      }, 500)
    );
  }, [searchText]);

  const onChange = event => {
    setSearchText(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    searchMovies(searchText);
  };

  const onBlur = event => {
    setBlur(true);
  };

  const onFocus = () => {
    setBlur(false);
  };

  return (
    <div className="searchbar">
      <div className="input">
        <form className="form-input" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            name="searchText"
            value={searchText}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <span className="search-icon-container">
            <i className="fas fa-search search-icon"></i>
          </span>
        </form>
        {searchMovieList.length > 0 && searchText !== "" && !blur && (
          <AutoComplete movies={searchMovieList} />
        )}
      </div>
    </div>
  );
};

export default Search;
