import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return movies.nowPlayingMovies &&(
    <div className="bg-black">
      <div className="-mt-45 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Trending"} movies={movies.TrendingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer