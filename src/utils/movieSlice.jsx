import { createSlice } from "@reduxjs/toolkit";


const moviesSlice =createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        // popularMovies:null,
    },

    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.popularMovies =action.payload;
        },
        addTrendingMovies :(state,action)=>{
            state.TrendingMovies =action.payload;
        },
        addUpComingMovies :(state,action)=>{
            state.UpcomingMovies =action.payload;
        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo =action.payload;
        }

    }

})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpComingMovies } = moviesSlice.actions
export default moviesSlice.reducer;

