import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiOutlineSearch, AiOutlineClose, AiFillYoutube } from "react-icons/ai";
import { BsBell, BsCameraVideo, BsMic } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import {
  changeSearchTerm,
  clearSearchTerm,
  clearVideos,
} from "../features/youtubeSlice";
import { getSearchPageVideos } from "../features/reducers/getSearchPageVideos";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtube.searchTerm);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="sticky top-0 z-10 flex h-14 items-center justify-between bg-darkPrimary px-14 opacity-90">
      <div className="flex items-center gap-3 text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex items-center justify-center gap-1">
            <AiFillYoutube className="text-3xl text-redPrimary" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={handleSearch}>
          <div className="flex h-10 items-center bg-darkPrimary pr-0">
            <div className="flex items-center gap-4 rounded-full border border-darkSecondary">
              <input
                type="text"
                className="h-10 w-96 rounded-full bg-darkPrimary pl-3 focus:outline-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              <AiOutlineClose
                className={`cursor-pointer text-xl ${
                  searchTerm ? "visible" : "invisible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
              <button className="flex h-10 w-16 items-center justify-center rounded-full rounded-l border-l border-darkSecondary bg-darkSecondary">
                <AiOutlineSearch className="text-xl" />
              </button>
            </div>
          </div>
        </form>

        <div className="cursor-pointer rounded-full bg-darkSecondary p-3 text-xl">
          <BsMic />
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2 text-xl">
        <div className="cursor-pointer rounded-full p-3 text-xl hover:bg-darkSecondary">
          <BsCameraVideo />
        </div>
        <div className="relative cursor-pointer rounded-full p-3 text-xl hover:bg-darkSecondary">
          <BsBell />
          <span className="absolute bottom-6 left-5 rounded-full bg-redPrimary px-1 text-xs">
            1
          </span>
        </div>
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
}
