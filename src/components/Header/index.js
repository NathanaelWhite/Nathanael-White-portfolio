import React from "react";
import "./style.css";
import video from "./video.mp4";

function Header() {
  return (
    <div>
      <video autoPlay loop muted id="bg-video">
        <source src={video} type="video/mp4" />
      <h1 className="header-title">Nathanael White</h1>
      </video>
    </div>
  );
}

export default Header;
