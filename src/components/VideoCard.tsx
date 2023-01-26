import { Link } from "react-router-dom";

import { RecommendedVideos } from "../types";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-24 w-40"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-grap-400 text-xs">
          <div>
            <a href="#" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
          <div>
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
