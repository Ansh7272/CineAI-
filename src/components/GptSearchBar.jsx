import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/GptSlice';

// Get your API key from Google AI Studio and store it in an environment variable.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch()
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + encodeURIComponent(movie) +  "&include_adult=false&language=en-US&page=1",API_OPTIONS )
      const json = await data.json()
        return json.results
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        // For Gemini, the model is specified when you get the model instance.
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        
        const getQuery = "Act as a Movie Recommendation System and Suggest Some Movies For The Query : " + searchText.current.value + ". only give me names of 5 movies,comma seperated like the example result given ahead. Example Result : Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

        const result = await model.generateContent(getQuery);
        const response = await result.response;
        const text = response.text().split(',').map(m => m.trim());;

        // You can then process the 'text' result here to update your application state.

        const promiseArray = text.map(movie=>searchMovieTMDB(movie));

        const tmdbResult = await Promise.all(promiseArray)
        dispatch(addGptMovieResult({movieNames:text,Tmdbresults:tmdbResult}));
        
      };

    return (
        <div className=' pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} className='p-3 m-4 col-span-9 text-white border-2' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='px-4 py-2 col-span-3 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;