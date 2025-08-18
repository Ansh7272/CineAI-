import { useEffect } from "react"
import { API_OPTIONS} from "../utils/constants"
import { useDispatch, useSelector} from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = () => {

    const nowTrailerVideo = useSelector(store=>store.movies.trailerVideo);
    const dispatch = useDispatch();
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', API_OPTIONS)
            const json = await data.json();
 
    // const filterData = json.results.filter((video)=>video.type === "Trailer");
    // const trailer =filterData.length ? filterData[0]:json.results[0];
    dispatch(addTrailerVideo(json.results))
    }
    useEffect(()=>{
       !nowTrailerVideo && getMovieVideos()    
    },[])
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer