import { createSlice } from "@reduxjs/toolkit";

interface EditorState {
  language: string;
  codecolor: string;
  theme: string;
  padding: string;
  radius: string;
}

const initialState: EditorState = {
  language: 'Javascript',
  codecolor: 'Monokai',
  theme: 'linear-gradient(354deg,#ff75b5,#ffb86c)',
  padding: "16",
  radius: "8",
};

const editorSlice = createSlice({
  name: 'editor',
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCodeColor: (state, action) => {
      state.codecolor = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setRadius: (state, action) => {
      state.radius = action.payload;
    },
  }
});

export const {
  setLanguage,
  setCodeColor,
  setTheme,
  setPadding,
  setRadius,
} = editorSlice.actions;

export default editorSlice.reducer;