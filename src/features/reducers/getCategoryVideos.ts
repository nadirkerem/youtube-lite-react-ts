import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../../store";
import { HomePageVideos } from "../../types";
import { parseData } from "../../utils";
import { API_KEY, YOUTUBE_API_URL } from "../../utils/constants";

const getCategoryVideos = createAsyncThunk(
  "youtube/categoryVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtube: {
        nextPageToken: nextPageTokenFromState,
        videos,
        selectedCategory,
      },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?&q=${selectedCategory}&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);

export default getCategoryVideos;
