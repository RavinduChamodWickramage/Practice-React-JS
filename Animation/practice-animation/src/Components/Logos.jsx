import React from "react";
import "./Logos.css";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import netflix from "../assets/netflix.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import spotify from "../assets/spotify.png";
import redbull from "../assets/redbull.png";
import whatsapp from "../assets/whatsapp.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

const Logos = () => {
  const logos = [
    { id: 1, name: "Logo 1", image: facebook },
    { id: 2, name: "Logo 2", image: instagram },
    { id: 3, name: "Logo 3", image: netflix },
    { id: 4, name: "Logo 4", image: twitter },
    { id: 5, name: "Logo 5", image: youtube },
    { id: 6, name: "Logo 6", image: spotify },
    { id: 7, name: "Logo 7", image: redbull },
    { id: 8, name: "Logo 8", image: whatsapp },
    { id: 9, name: "Logo 9", image: HTML },
    { id: 10, name: "Logo 10", image: CSS },
    { id: 11, name: "Logo 11", image: JS },
    { id: 12, name: "Logo 12", image: avatar },
    { id: 13, name: "Logo 13", image: avatar1 },
    { id: 14, name: "Logo 14", image: avatar2 },
    { id: 15, name: "Logo 15", image: avatar3 },
    { id: 16, name: "Logo 16", image: avatar4 },
    { id: 17, name: "Logo 17", image: avatar5 },
  ];

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logos-container">
      <div className="logos-slide">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={logo.name}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
