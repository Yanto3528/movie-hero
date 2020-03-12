import React, { useReducer } from "react";

import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";

import genresList from "../../utils/genresList";

import {
  SET_PLAY_VIDEO,
  GET_SEARCH_MOVIES,
  GET_GENRES_BASED_MOVIES,
  GET_MOVIES_BY_YEAR,
  GET_TRAILER,
  GET_MOVIE,
  GET_CREDITS,
  SET_LOADING
} from "../types";

import axios from "axios";

const MovieState = props => {
  const initialState = {
    nowPlayingMovies: [],
    genres: genresList,
    genreMovies: {},
    upcomingMovies: [],
    popularMovies: [],
    searchMovieList: [],
    moviesByYear: [],
    isPlayVideo: false,
    loading: true,
    trailerVideo: {},
    movie: null,
    credits: {},
    totalPages: null
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovieList = async (query, page, type) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${query}?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784",
          language: "en-US",
          page: page.toString(),
          region: "us"
        }
      }
    );
    dispatch({
      type,
      payload: { res: res.data.results, pages: res.data.total_pages }
    });
  };

  const searchMovies = async query => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?`, {
      params: {
        api_key: "1f12e4975af13dde70c38f15fab38784",
        language: "en-US",
        page: "1",
        query
      }
    });
    dispatch({
      type: GET_SEARCH_MOVIES,
      payload: res.data.results
    });
  };

  const getGenreBasedMovies = async (genreId, pageNumber) => {
    setLoading(true);
    const genreMovieRes = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784",
          language: "en-US",
          page: pageNumber.toString(),
          sort_by: "popularity.desc",
          with_genres: genreId
        }
      }
    );
    const pages = genreMovieRes.data.total_pages;
    dispatch({
      type: GET_GENRES_BASED_MOVIES,
      payload: { results: genreMovieRes.data.results, pages }
    });
  };

  const getMoviesByYear = async (year, pageNumber) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784",
          language: "en-US",
          page: pageNumber.toString(),
          sort_by: "popularity.desc",
          primary_release_year: year
        }
      }
    );
    const pages = res.data.total_pages;
    dispatch({
      type: GET_MOVIES_BY_YEAR,
      payload: { results: res.data.results, pages }
    });
  };

  const toggleIsPlayVideo = () => {
    dispatch({
      type: SET_PLAY_VIDEO,
      payload: !state.isPlayVideo
    });
  };

  const getTrailer = async id => {
    const videoRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784",
          language: "en-US"
        }
      }
    );
    const trailer = videoRes.data.results.find((video, index) => index === 0);
    dispatch({
      type: GET_TRAILER,
      payload: trailer
    });
  };

  const getMovie = async id => {
    setLoading(true);
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784",
          language: "en-US"
        }
      }
    );
    dispatch({
      type: GET_MOVIE,
      payload: movieRes.data
    });
  };

  const getCredits = async id => {
    const creditRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?`,
      {
        params: {
          api_key: "1f12e4975af13dde70c38f15fab38784"
        }
      }
    );
    dispatch({
      type: GET_CREDITS,
      payload: creditRes.data
    });
  };

  const setLoading = loading => {
    dispatch({
      type: SET_LOADING,
      payload: loading
    });
  };

  return (
    <MovieContext.Provider
      value={{
        nowPlayingMovies: state.nowPlayingMovies,
        genres: state.genres,
        upcomingMovies: state.upcomingMovies,
        popularMovies: state.popularMovies,
        genreMovies: state.genreMovies,
        searchMovieList: state.searchMovieList,
        moviesByYear: state.moviesByYear,
        isPlayVideo: state.isPlayVideo,
        trailerVideo: state.trailerVideo,
        movie: state.movie,
        loading: state.loading,
        credits: state.credits,
        recommendedMovies: state.recommendedMovies,
        totalPages: state.totalPages,
        toggleIsPlayVideo,
        getMovieList,
        searchMovies,
        getGenreBasedMovies,
        getTrailer,
        getMovie,
        getCredits,
        setLoading,
        getMoviesByYear
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
