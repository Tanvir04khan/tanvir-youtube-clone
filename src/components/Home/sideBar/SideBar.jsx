import React from "react";
import "./_sideBar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

const Sidebar = ({ isSidebarVisible, handleToggleSidebar }) => {
  return (
    <div className={!isSidebarVisible ? "sidebar" : "sidebar open"}>
      <li onClick={handleToggleSidebar}>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li onClick={handleToggleSidebar}>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li onClick={handleToggleSidebar}>
        <MdThumbUp size={23} />
        <span>Like Video</span>
      </li>
      <li onClick={handleToggleSidebar}>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li onClick={handleToggleSidebar}>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li onClick={handleToggleSidebar}>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </div>
  );
};

export default Sidebar;
