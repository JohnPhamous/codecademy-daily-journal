import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    entries: ["Water plants", "Making spaget", "Climb a V10", "Make some beats"]
  },
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push(action.payload);
    },
    remoteEntry: (state, action) => {
      state.entries = state.entries.filter((entry) => entry.id !== action.id);
    }
  }
});

export const { addJournalEntry, remoteEntry } = journalSlice.actions;

export default journalSlice.reducer;
