import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Genre from "./components/pages/Genre";
import Movies from "./components/pages/Movies";
import YearMovies from "./components/pages/YearMovies";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id/:name" component={Movie} />
          <Route exact path="/genre/:id/:name/:page" component={Genre} />
          <Route exact path="/movie/list/:name/:page" component={Movies} />
          <Route
            exact
            path="/movie/released-year/:year/:page"
            component={YearMovies}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    </div>
  );
};

export default App;
