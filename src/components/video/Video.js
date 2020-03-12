import React, { useContext } from "react";
import YouTube from "react-youtube";

import MovieContext from "../context/movie/movieContext";

import "./Video.css";

const Video = ({ trailerVideo }) => {
  const movieContext = useContext(MovieContext);
  const { toggleIsPlayVideo } = movieContext;
  const opts = {
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="video-container" onClick={toggleIsPlayVideo}>
      <YouTube className="video" videoId={trailerVideo.key} opts={opts} />
      <i className="fas fa-times" onClick={toggleIsPlayVideo}></i>
    </div>
  );
};

export default Video;
