import { createSlice } from '@reduxjs/toolkit'


const gptSlice = createSlice({
  name: 'gpt',
  initialState : {
    showGptSearch:false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer