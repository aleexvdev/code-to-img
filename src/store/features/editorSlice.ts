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
  scale: string;
  opacity: number;
  width: number;
  height: number;
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
  scale: "1x",
  opacity: 100,
  width: 800,
  height: 600,
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
    setScale: (state, action) => {
      state.scale = action.payload;
    },
    setOpacity: (state, action) => {
      state.opacity = action.payload;
    },
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
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
  setScale,
  setOpacity,
  setWidth,
  setHeight,
} = editorSlice.actions;

export default editorSlice.reducer;