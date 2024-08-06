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
  border: boolean;
  headerWindow: boolean;
  watermark: boolean;
  headerWindowStyle: number;
  showAccent: boolean;
}

const initialState: EditorState = {
  language: 'JavaScript',
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
  border: false,
  headerWindow: true,
  watermark: false,
  headerWindowStyle: 1,
  showAccent: false,
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
    setBorder: (state, action) => {
      state.border = action.payload;
    },
    setHeaderWindow: (state, action) => {
      state.headerWindow = action.payload;
    },
    setWatermark: (state, action) => {
      state.watermark = action.payload;
    },
    setHeaderWindowStyle: (state, action) => {
      state.headerWindowStyle = action.payload;
    },
    setShowAccent: (state, action) => {
      state.showAccent = action.payload;
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
  setBorder,
  setHeaderWindow,
  setWatermark,
  setHeaderWindowStyle,
  setShowAccent,
} = editorSlice.actions;

export default editorSlice.reducer;