import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
   movies && <div className="-mt-90 relative z-10">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
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
