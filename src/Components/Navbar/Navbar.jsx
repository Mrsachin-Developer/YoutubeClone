import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      {/* Left side of Nav-Bar */}
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Toggle Sidebar"
        />
        <Link to="/">
          <img className="logo" src={logo} alt="Website Logo" />
        </Link>
      </div>

      {/* Middle part of Nav-Bar */}
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" aria-label="Search" />
          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>

      {/* Right part of Nav-Bar */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More Options" />
        <img src={notification_icon} alt="Notifications" />
        <img src={profile_icon} className="user-icon" alt="User Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
