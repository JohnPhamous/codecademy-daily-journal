import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    imageUrl: null
  },
  reducers: {}
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
