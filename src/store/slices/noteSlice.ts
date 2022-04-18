import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesState, Note } from "../../types/note";


const initialState: NotesState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes") || "[]") : [],
  total: 0,
  status: "idle",
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      localStorage.setItem("notes", JSON.stringify([...state.notes, action.payload]));
      state.notes.push(action.payload);
      state.total = state.total + 1;
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(item => item.id !== action.payload);
    },
  },
});

export const {addNote, removeNote} = noteSlice.actions;

export default noteSlice.reducer;
