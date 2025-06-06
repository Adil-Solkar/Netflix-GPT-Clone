import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMOvies = () => {
    const dispatch = useDispatch()
  async function getPopularMovies() {
    try{
       const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    dispatch(addPopularMovies(data.results))
    }
    catch(error){
        console.log("Error fetching data: ", error.message)
    }
  }
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMOvies;
