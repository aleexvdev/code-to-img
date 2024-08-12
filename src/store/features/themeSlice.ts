import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  themeApp: string;
}

const initialState: ThemeState = {
  themeApp: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeApp: (state, action) => {
      state.themeApp = action.payload;
    }
  },
});

export const { setThemeApp } = themeSlice.actions;

export default themeSlice.reducer;