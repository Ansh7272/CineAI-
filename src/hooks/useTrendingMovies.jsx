import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies = ()=>{

  const nowTrendingMovies = useSelector(store=>store.movies.TrendingMovies);

const dispatch = useDispatch()
  const getTrendingMovies = async()=>{
       const data =await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS) 
  
  const json =   await data.json();
    dispatch(addTrendingMovies(json.results))
  }
  useEffect(()=>{
      // !nowTrendingMovies &&  getTrendingMovies();  it says if !nowTrendingMovies condition is true than call getTrendingMovies()
     !nowTrendingMovies && getTrendingMovies();
  },[])

}

export default useTrendingMovies;