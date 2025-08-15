import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'


const Browser = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpComingMovies();

  return (
    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser