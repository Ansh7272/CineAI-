import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = ()=>{
   
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);
const dispatch = useDispatch()
  const getNowPlayingMovies = async()=>{
       const data =await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS) 
  
  const json =   await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(()=>{

        // to avoid unnecessary calling of api although store have data (using memoization) so this checks if data is already present or not in store is yes than do not call the function (using memoization)

          
      !nowPlayingMovies && getNowPlayingMovies();
    
  },[])

}

export default useNowPlayingMovies;
  