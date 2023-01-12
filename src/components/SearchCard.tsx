import { HomePageVideos } from "../types";
import { Link } from "react-router-dom";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {data?.videoDuration}
        </span>
        <Link to={`/watch/${data?.videoId}`}>
          <img
            src={data?.videoThumbnail}
            className="h-52 w-96"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2">
            {decodeURIComponent(data?.videoTitle)}
          </a>
        </h3>
        <div className="text-xs text-gray-400">
          <div>
            <div>
              <span className="after:mx-1 after:content-['•']">
                {data?.videoViews} views
              </span>
              <span>{data?.videoAge}</span>
            </div>
          </div>
        </div>

        <div className="my-2 min-w-fit">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <img
              src={data?.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
            <span>{data?.channelInfo.name}</span>
          </a>
        </div>
        <div className="max-w-2xl text-sm text-gray-400 line-clamp-2">
          <p>{data?.videoDescription}</p>
        </div>
      </div>
    </div>
  );
}
