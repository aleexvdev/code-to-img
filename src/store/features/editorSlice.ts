import { createSlice } from "@reduxjs/toolkit";

interface EditorState {
  language: string;
  codecolor: string;
  background: string;
  padding: string;
  radius: string;
  theme: string;
  linenumber: boolean;
  linestart: number;
}

const initialState: EditorState = {
  language: 'Javascript',
  codecolor: 'Monokai',
  background: 'linear-gradient(354deg,#ff75b5,#ffb86c)',
  padding: "16",
  radius: "8",
  theme: "Monokai",
  linenumber: false,
  linestart: 0,
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
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setRadius: (state, action) => {
      state.radius = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLineNumber: (state, action) => {
      state.linenumber = action.payload;
    },
    setLineStart: (state, action) => {
      state.linestart = action.payload;
    },
  }
});

export const {
  setLanguage,
  setCodeColor,
  setBackground,
  setPadding,
  setRadius,
  setTheme,
  setLineNumber,
  setLineStart,
} = editorSlice.actions;

export default editorSlice.reducer;