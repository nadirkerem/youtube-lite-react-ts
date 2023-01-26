import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState } from "../types";
import {
  getCategoryVideos,
  getHomePageVideos,
  getRecommendedVideos,
  getSearchPageVideos,
  getVideoDetails,
} from "./reducers";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  selectedCategory: "",
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
    changeCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  },
});

export const {
  clearVideos,
  changeCategory,
  changeSearchTerm,
  clearSearchTerm,
} = youtubeSlice.actions;

export default youtubeSlice.reducer;
