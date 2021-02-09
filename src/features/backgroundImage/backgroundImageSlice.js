import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import unsplashApi from '../../api/unsplash';

export const getBackgroundImage = createAsyncThunk('backgroundImage/getImage', unsplashApi.getImage);

export const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    imageUrl: null,
  },
  reducers: {},
  extraReducers: {
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const {} = backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;
