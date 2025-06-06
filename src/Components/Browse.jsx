import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMOvies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  
  return (
    <>
      <div className="bg-black">
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/**
         * MainContainer(p)
         *   -VideoTitle(c)
         *   -VideoBackground(c)
         * SecondaryContainer(p)
         *    -MovieList * n
         *      -cards * n
         */}
      </div>
    </>
  );
};

export default Browse;
