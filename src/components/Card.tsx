import { Link } from "react-router-dom";

import { HomePageVideos } from "../types";

export default function Card({ data }: { data: HomePageVideos }) {
  return (
    <div className="flex h-60 w-64 flex-col gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="thumbnail"
            className="h-44 w-72"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href={`https://www.youtube.com/c/${data.channelInfo.name}`}>
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <Link
              to={`/watch/${data.videoId}`}
              className="align-start line-clamp-2"
            >
              {data.videoTitle}
            </Link>
          </h3>
          <div className="text-xs text-gray-400">
            <div>
              <a
                href={`https://www.youtube.com/c/${data.channelInfo.name}`}
                className="hover:text-white"
              >
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:mx-1 after:content-['|']">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
