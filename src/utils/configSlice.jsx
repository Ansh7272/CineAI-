import { createSlice } from '@reduxjs/toolkit'


const configSlice = createSlice({
  name: 'config',
  initialState : {
    lang:"en",
  },
  reducers: {
    changeLanguage: (state,action) => {
      
        state.lang =action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer