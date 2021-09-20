import React from "react";
import "./style.css";
import video from "./video.mp4";

function Header() {
  return (
    <video autoPlay loop muted id="bg-video">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Header;
