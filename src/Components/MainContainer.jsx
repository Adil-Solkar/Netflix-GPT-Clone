import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return // early return
    const bannerMovie = movies[0] // write logic for a random movie at every reload --> 

    const {original_title,overview,id} = bannerMovie 
 
  return (
    <>
        <VideoTitle title={original_title} summary={overview}/>
        <VideoContainer movieId={id}/>
    </>
  )
}

export default MainContainer