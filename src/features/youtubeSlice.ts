import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  youtubeSlice.actions;

export default youtubeSlice.reducer;
