import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../features/hooks";
import { getHomePageVideos } from "../features/reducers/getHomePageVideos";

export default function Home() {
  const dispatch = useDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);

  // useEffect

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
      </div>
    </div>
  );
}
