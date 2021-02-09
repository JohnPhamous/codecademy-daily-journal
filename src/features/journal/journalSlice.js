import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    entries: []
  },
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action);
    },
    remoteEntry: (state, action) => {
      state.entries = state.entries.filter((entry) => entry.id !== action.id);
    }
  }
});

export const { addEntry, remoteEntry } = journalSlice.actions;

export default journalSlice.reducer;
