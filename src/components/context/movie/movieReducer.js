import {
  GET_NOWPLAYING_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SEARCH_MOVIES,
  GET_GENRES_BASED_MOVIES,
  SET_PLAY_VIDEO,
  GET_TRAILER,
  GET_MOVIE,
  SET_LOADING,
  GET_CREDITS,
  GET_MOVIES_BY_YEAR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NOWPLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload.res,
        totalPages: action.payload.pages,
        loading: false
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload.res,
        totalPages: action.payload.pages,
        loading: false
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload.res,
        totalPages: action.payload.pages,
        loading: false
      };
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovieList: action.payload,
        loading: false
      };
    case GET_GENRES_BASED_MOVIES:
      return {
        ...state,
        genreMovies: action.payload.results,
        totalPages: action.payload.pages,
        loading: false
      };
    case GET_MOVIES_BY_YEAR:
      return {
        ...state,
        moviesByYear: action.payload.results,
        totalPages: action.payload.pages,
        loading: false
      };
    case SET_PLAY_VIDEO:
      return {
        ...state,
        isPlayVideo: action.payload
      };
    case GET_TRAILER:
      return {
        ...state,
        trailerVideo: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case GET_CREDITS:
      return {
        ...state,
        credits: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
