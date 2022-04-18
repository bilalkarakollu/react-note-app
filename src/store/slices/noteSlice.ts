import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../index";
import { NotesState, Note } from "../../types/note";
import { v4 as uuidv4 } from "uuid";

const initialState: NotesState = {
  notes: [],
  total: 0,
  status: "idle",
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const newData: Note = { ...action.payload, id: uuidv4() };
      state.notes.push(newData);
      state.total = state.total + 1;
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(item => item.id !== action.payload);
    },
  },
});

export const {addNote, removeNote} = noteSlice.actions;

export default noteSlice.reducer;
