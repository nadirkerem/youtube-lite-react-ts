import {
  MdHistory,
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdOutlinedFlag,
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
import { FaRegCompass } from "react-icons/fa";

export default function Sidebar() {
  const primaryLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
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
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    ["About", "Press", "Copyright", "Contact us"],
    ["Terms", "Privacy", "Policy & Safety"],
  ];

  return (
    <div className="sidebar w-1/6 overflow-auto bg-darkPrimary pr-3 pb-8">
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {primaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`py-3 pl-6 hover:bg-darkSecondary ${
                name === "Home" ? "bg-darkTertiary" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {categoryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex cursor-pointer flex-col border-b border-darkSecondary">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`py-3 pl-6 hover:bg-darkSecondary`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap gap-2 p-4 text-xs font-bold  text-grayPrimary">
        {textLinks[0].map((name) => {
          return (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap gap-2 p-4 text-xs font-bold text-grayPrimary">
        {textLinks[1].map((name) => {
          return (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ul>
      <span className="px-4 text-xs text-grayPrimary">
        &copy; {new Date().getFullYear()} Google
        <br />
        <p className="px-4 pt-3 text-xs text-grayPrimary">
          For development purposes only.
        </p>
      </span>
    </div>
  );
}
