import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useUpComingMovies = ()=>{
  const nowUpComingMovies = useSelector(store=>store.movies.UpcomingMovies);

const dispatch = useDispatch()
  const getUpComingMovies = async()=>{
       const data =await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1',API_OPTIONS) 
  
  const json =   await data.json();
    dispatch(addUpComingMovies(json.results))
  }
  useEffect(()=>{
     !nowUpComingMovies && getUpComingMovies();
  },[])

}

export default useUpComingMovies;