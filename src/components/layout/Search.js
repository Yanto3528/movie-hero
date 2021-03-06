import React, { useState, useContext, useEffect } from "react";
import MovieContext from "../context/movie/movieContext";

import AutoComplete from "./AutoComplete";

import "./Search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [timer, setTimer] = useState();
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const movieContext = useContext(MovieContext);
  const { searchMovies, searchMovieList } = movieContext;
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (searchText !== "") {
      setTimer(
        setTimeout(() => {
          searchMovies(searchText);
        }, 500)
      );
    }
    //eslint-disable-next-line
  }, [searchText]);

  const onChange = event => {
    setSearchText(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    searchMovies(searchText);
  };

  const onClick = event => {
    if (
      event.target.name === "searchText" ||
      event.target.className === "auto-complete"
    ) {
      setShowAutoComplete(true);
    } else {
      setShowAutoComplete(false);
    }
  };

  return (
    <div className="searchbar">
      <div className="input" onClick={onClick}>
        <form className="form-input" onSubmit={onSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            name="searchText"
            value={searchText}
            onChange={onChange}
          />
          <span className="search-icon-container">
            <i className="fas fa-search search-icon"></i>
          </span>
        </form>
        {searchMovieList.length > 0 &&
          searchText !== "" &&
          showAutoComplete && <AutoComplete movies={searchMovieList} />}
      </div>
    </div>
  );
};

export default Search;
