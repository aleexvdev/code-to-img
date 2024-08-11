import { createSlice } from "@reduxjs/toolkit";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

interface EditorState {
  language: LanguageName;
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
  background: 'linear-gradient(135deg, #E233FF 0%, #FF6B00 100%)',
  padding: "32",
  radius: "16",
  theme: "vsCode",
  linenumber: true,
  linestart: 1,
  scale: "1x",
  opacity: 100,
  width: 550,
  height: 600,
  border: false,
  headerWindow: true,
  headerWindowControls: "macOS - Color",
  watermark: false,
  showAccent: false,
  backgroundWindow: false,
  titleDocument: "Untitled"
};

const editorSlice = createSlice({
  name: 'editor',
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
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