import { configureStore } from "@reduxjs/toolkit";
import editorReducer from './features/editorSlice';
import themeAppReducer from './features/themeSlice';

export const store = configureStore({
  reducer: {
    editorReducer,
    themeAppReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;