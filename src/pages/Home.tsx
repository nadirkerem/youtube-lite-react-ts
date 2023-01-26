import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, Sidebar, Spinner, Card } from "../components";

import { getHomePageVideos } from "../features/reducers";
import { HomePageVideos } from "../types";
import { clearVideos } from "../features";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh", width: "%100" }}>
        <Sidebar />
        {videos.length ? (
          <div className="w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={650}
            >
              <div className="grid grid-cols-4 gap-y-14 gap-x-8 p-8">
                {videos.map((item: HomePageVideos, key) => (
                  <Card data={item} key={key} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
