import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { getHomePageVideos } from "../features/reducers/getHomePageVideos";
import { HomePageVideos } from "../types";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid grid-cols-4 gap-y-14 gap-x-8 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId}></Card>;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
