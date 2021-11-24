import React from "react";
import avatar from "../../../assets/images/pngwing.com.png";
import youtubeLogo from "../../../assets/images/youtube-logo.png";

import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={onToggleSidebar} />
      <img src={youtubeLogo} alt="Youtube logo" className="header__logo" />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
