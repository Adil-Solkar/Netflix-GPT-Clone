import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies)

  return (
   <div className=" -mt-50 relative z-10">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;

/**
 *         MovieList - Now Playing
          MovieCards * n
        MovieList - Popular
        MovieList - Trending

 * 
 * 
 */
