import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../../store";
import { RecommendedVideos } from "../../types";
import { parseRecommendedData } from "../../utils";
import { API_KEY, YOUTUBE_API_URL } from "../../utils/constants";

const getRecommendedVideos = createAsyncThunk(
  "youtube/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
      youtube: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState() as RootState;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    );

    return { parsedData };
  }
);

export default getRecommendedVideos;
