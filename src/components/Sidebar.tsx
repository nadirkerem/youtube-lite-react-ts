import { getCategoryVideos } from "../features/reducers";
import { useAppDispatch } from "../features/hooks";
import { changeCategory, clearVideos } from "../features";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineVideoLibrary,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
  MdSettings,
  MdSubscriptions,
  MdThumbUpOffAlt,
  MdMusicVideo,
} from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const primaryLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
      link: "#",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
      link: "https://www.youtube.com/feed/subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
      link: "https://www.youtube.com/feed/library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
      link: "https://www.youtube.com/feed/history",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
      link: "https://www.youtube.com/feed/library",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
      link: "https://www.youtube.com/playlist?list=WL",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
      link: "https://www.youtube.com/playlist?list=LL",
    },
  ];

  const categoryLinks = [
    {
      icon: <MdMusicVideo className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
      link: "https://www.youtube.com/account_privacy",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
      link: "https://support.google.com/youtube/?hl=en#topic=9253773",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
      link: "https://support.google.com/youtube/?hl=en#topic=9253773",
    },
  ];

  const handleCategory = (name: string) => {
    dispatch(clearVideos());
    dispatch(changeCategory(name));
    dispatch(getCategoryVideos(false));
  };

  return (
    <div className="sidebar w-1/6 overflow-auto bg-darkPrimary pr-3 pb-8">
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {primaryLinks.map(({ icon, name, link }) => {
          return (
            <li
              key={name}
              className={`py-3 pl-6 hover:bg-darkSecondary ${
                name === "Home" ? "bg-darkTertiary" : ""
              }`}
            >
              <a href={link} className="flex items-center gap-5">
                {icon}
                <span className="hidden text-sm tracking-wider md:block">
                  {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {secondaryLinks.map(({ icon, name, link }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <a href={link} className="flex items-center gap-5">
                {icon}
                <span className="hidden text-sm tracking-wider md:block">
                  {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {categoryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <button
                className="flex items-center gap-5"
                onClick={() => handleCategory(name)}
              >
                {icon}
                <span className="hidden text-sm tracking-wider md:block">
                  {name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {helpLinks.map(({ icon, name, link }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <a href={link} className="flex items-center gap-5">
                {icon}
                <span className="hidden text-sm tracking-wider md:block">
                  {name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <span className="mt-3 hidden px-4 text-xs text-grayPrimary lg:block">
        &copy; {new Date().getFullYear()} Google
        <br />
        <p className="pt-3 text-xs text-grayPrimary">
          For development purposes only.
        </p>
      </span>
    </div>
  );
}
