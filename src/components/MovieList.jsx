import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
  return (
    <div className='px-6 ml-5'>
        <h1 className='text-lg md:text-3xl py-2 md:py-4 text-white'>{title}</h1> 
        <div className='flex overflow-x-scroll  no-scrollbar overflow-y-hidden'>
            
            <div className='flex'>
{  movies?.map((movie)=>(<MovieCard key={movie.id} poster_path={movie.poster_path}/>))}
            </div>
        </div>
    </div>
  )
}

export default MovieList