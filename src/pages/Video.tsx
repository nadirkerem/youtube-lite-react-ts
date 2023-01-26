import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import { Navbar, VideoCard } from "../components";

import { useAppDispatch, useAppSelector } from "../features/hooks";
import { getRecommendedVideos, getVideoDetails } from "../features/reducers";

export default function Video() {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtube.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtube.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMore(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [id, currentPlaying, dispatch]);

  return (
    <>
      {currentPlaying && currentPlaying.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div style={{ height: "7.5vh" }}>
            <Navbar />
          </div>
          <div className="flex w-full" style={{ height: "92.5vh" }}>
            <div className="mx-20 flex w-full gap-y-10 gap-x-5 overflow-auto p-7">
              <div className="max-w-[800px]">
                <div>
                  <iframe
                    width="800"
                    height="502"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-5">
                    <p className="text-xl">{currentPlaying.videoTitle}</p>
                    <div className="mt-1 flex justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="after:mx-1 after:content-['•']">
                          {currentPlaying.videoViews} views
                        </span>
                        <span> {currentPlaying.videoAge} ago</span>
                      </div>
                      <div className="flex items-center gap-4 uppercase">
                        <div className="flex cursor-pointer items-center gap-1">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="my-5 flex flex-col gap-4 border-2 border-solid border-gray-400 border-l-transparent border-r-transparent pb-3">
                      <div className="mr-5 mt-4 flex items-center gap-5">
                        <div>
                          <img
                            src={currentPlaying.channelInfo.image}
                            alt=""
                            className="h-12 w-12 rounded-full"
                          />
                        </div>
                        <div className="w-5/6">
                          <h5 className="text-sm">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-xs text-gray-400">
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </h6>
                        </div>
                        <div>
                          <button className="rounded-sm bg-red-600 p-2 text-sm uppercase tracking-wider">
                            subscribe
                          </button>
                        </div>
                      </div>
                      <div
                        className={`${
                          !showMore ? "max-h-16 overflow-hidden" : ""
                        } w-11/12 text-sm`}
                      >
                        <pre
                          style={{
                            fontFamily: `"Roboto", sans-serif`,
                          }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>
                      <div>
                        <button
                          className="cursor-pointer text-sm uppercase"
                          onClick={() => setShowMore(!showMore)}
                        >
                          Show {showMore ? "less" : "more"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-24 flex flex-col gap-3">
                {getRecommendedVideos.length &&
                  recommendedVideos.map((item) => {
                    return <VideoCard data={item} key={item.videoId} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
