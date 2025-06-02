import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    async function getNowPlayingMovies() {
      // add try catch block..
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        options
      );
      const data = await response.json();
      // if user is null then dont dispatch add later -- Add Code
      dispatch(addNowPlayingMovies(data.results))
    }
    useEffect(() => {
      getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useNowPlayingMovies;