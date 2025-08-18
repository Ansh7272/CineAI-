import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const gpt = useSelector(store=>store.gpt)
  const {  movieNames,Tmdbresults} = gpt
  if(!movieNames)return null;
  return (
    <div className='p-4 m-4 bg-black opacity-90'>
       <div>
        {
          movieNames.map((movie,index) =><MovieList key={movie} title={movie} movies={Tmdbresults[index]}/>)
        }
       </div>
    </div>
  )
}

export default GptMovieSuggestion