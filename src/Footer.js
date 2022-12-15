import React from "react";
import facebook from "./images/facebook.png";
import instagramm from "./images/instagram.png";
import youtube from "./images/youtube.png";
import twitter from "./images/twitter.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-title">Follow us!</h2>
      <div className="footer-media-container">
        <a href="https://facebook.com">
          <img src={facebook} alt="media-icon" />
        </a>
        <a href="https://instagramm.com">
          <img src={instagramm} alt="media-icon" />
        </a>
        <a href="https://youtube.com">
          <img src={youtube} alt="media-icon" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="media-icon" />
        </a>
      </div>
    </div>
  );
}
