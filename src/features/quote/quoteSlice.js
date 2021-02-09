import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: null,
  },
  reducers: {},
});

export const {} = quoteSlice.actions;

export default quoteSlice.reducer;
