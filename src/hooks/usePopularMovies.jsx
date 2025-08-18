import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = ()=>{
  const nowPopularMovies = useSelector(store=>store.movies.popularMovies);

const dispatch = useDispatch()
  const getPopularMovies = async()=>{
       const data =await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS) 
  
  const json =   await data.json();
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{

    // to avoid unnecessary calling of api although store have data (using memoization)
    // to avoid unnecessary calling of api although store have data (using memoization) so this checks if data is already present or not in store is yes than do not call the function (using memoization)

     !nowPopularMovies && getPopularMovies();
  },[])

}

export default usePopularMovies;
  