import React from "react";
import "./Header.css";
import MenuLink from "../MenuLink/MenuLink";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <MenuLink linkname="Home" url="#home" />
        <MenuLink linkname="About" url="#about" />
        <MenuLink linkname="Contact" url="#contact" />
        <MenuLink linkname="Services" url="#services" />
      </div>
    </>
  );
}

export default Header;
