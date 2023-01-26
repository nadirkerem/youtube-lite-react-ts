import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

import { Navbar, Sidebar, Spinner, SearchCard } from "../components";

import { useAppDispatch, useAppSelector } from "../features/hooks";
import { HomePageVideos } from "../types";
import { clearVideos } from "../features";
import { getSearchPageVideos } from "../features/reducers";

export default function Search() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtube.searchTerm);
  const videos = useAppSelector((state) => state.youtube.videos);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm) {
      dispatch(getSearchPageVideos(false));
    } else {
      navigate("/");
    }
  }, [dispatch, searchTerm, navigate]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <div className="flex w-full flex-col gap-5 py-8 pl-8">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId}></SearchCard>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
