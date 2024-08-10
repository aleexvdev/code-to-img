import { createSlice } from "@reduxjs/toolkit";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

interface EditorState {
  language: LanguageName;
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
  headerWindowControls: string;
  showAccent: boolean;
  backgroundWindow: boolean;
  titleDocument: string;
}

const initialState: EditorState = {
  language: 'typescript',
  codecolor: 'Monokai',
  background: 'linear-gradient(354deg,#ff75b5,#ffb86c)',
  padding: "16",
  radius: "8",
  theme: "Monokai",
  linenumber: true,
  linestart: 1,
  scale: "1x",
  opacity: 100,
  width: 800,
  height: 600,
  border: false,
  headerWindow: true,
  headerWindowControls: "macOS - Color",
  watermark: false,
  showAccent: false,
  backgroundWindow: true,
  titleDocument: "Untitled"
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
    setHeaderWindowControls: (state, action) => {
      state.headerWindowControls = action.payload;
    },
    setShowAccent: (state, action) => {
      state.showAccent = action.payload;
    },
    setBackgroundWindow: (state, action) => {
      state.backgroundWindow = action.payload;
    },
    setTitleDocument: (state, action) => {
      state.titleDocument = action.payload;
    }
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
  setHeaderWindowControls,
  setShowAccent,
  setBackgroundWindow,
  setTitleDocument
} = editorSlice.actions;

export default editorSlice.reducer;