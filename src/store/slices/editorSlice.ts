import { createSlice } from "@reduxjs/toolkit";

interface EditorState {
  language: string;
  code: string;
  theme: string;
  padding: number;
}

const initialState: EditorState = {
  language: 'javascript',
  code: '',
  theme: 'light',
  padding: 16,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
  }
});

export const {
  setLanguage,
  setCode,
  setTheme,
  setPadding,
} = editorSlice.actions;

export default editorSlice.reducer;