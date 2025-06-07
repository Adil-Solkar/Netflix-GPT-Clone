import Header from "./Header";
import GptSearchPage from "./GptSearchPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMOvies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchPage = useSelector((store) => store?.gpt?.showGptSearchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <>
      <div>
        <Header />
        {showGptSearchPage ? (
          <GptSearchPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
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
