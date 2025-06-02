import React, { useEffect} from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoContainer = ({ movieId }) => {
  // fetch trailer video from movie Video api

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const dispatch = useDispatch();

  async function getMovieVideos() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );
    const data = await response.json();

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
