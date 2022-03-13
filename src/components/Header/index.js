import React from "react";
import "./style.css";
import video from "./video.mp4";

function Header() {
  return (
    <div id="home">
      <video autoPlay loop muted id="bg-video" className="m-0">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Header;
