import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import MovieState from "./components/context/movie/MovieState";

ReactDOM.render(
  <BrowserRouter>
    <MovieState>
      <App />
    </MovieState>
  </BrowserRouter>,
  document.getElementById("root")
);
