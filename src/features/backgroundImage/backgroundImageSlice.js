import { createSlice } from '@reduxjs/toolkit';

export const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    imageUrl: null,
  },
  reducers: {},
});

export const {} = backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;
