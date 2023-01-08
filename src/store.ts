import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./features/youtubeSlice";

export const store = configureStore({
  reducer: {
    youtube: youtubeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
