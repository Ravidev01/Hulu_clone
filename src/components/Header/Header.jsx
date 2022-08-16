import React from "react";
// import  from "@material";
import {
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
  FlashOn,
} from "@mui/icons-material";
import "../Header/Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon header_icon--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header_icon">
          <FlashOn/>
          <p>Trending</p>
        </div>
        <div className="header_icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          < VideoLibrary/>
          <p>Collection</p>
        </div>
        <div className="header_icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header_icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
        <img src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" alt="img"/>
    </div>
  );
}

export default Header;
