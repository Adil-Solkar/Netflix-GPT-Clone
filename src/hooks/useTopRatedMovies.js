import { useEffect } from "react"
import { options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    async function getTopRatedMovies(){
        try{
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            dispatch(addTopRatedMovies(data.results))
        }
        catch(error){
             console.log("Error fetching data: ", error.message)
        }
    }
    useEffect(() => {
        getTopRatedMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useTopRatedMovies