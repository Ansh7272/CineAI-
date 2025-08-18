import { createSlice } from '@reduxjs/toolkit'


const gptSlice = createSlice({
  name: 'gpt',
  initialState : {
    showGptSearch:false,
    movieNames:null,
    Tmdbresults:null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
    },
    
    addGptMovieResult: (state,action)=>{
      const {movieNames,Tmdbresults} = action.payload
        state.movieNames =movieNames;
        state.Tmdbresults =Tmdbresults;

    }, 
  },
});

// Action creators are generated for each case reducer function
export const {  toggleGptSearchView,addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer