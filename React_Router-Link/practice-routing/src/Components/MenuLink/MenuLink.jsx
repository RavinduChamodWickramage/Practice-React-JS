import React from "react";
import { Link } from "react-router-dom";

function MenuLink(props) {
  return (
    <>
      <Link to={props.url}>{props.linkname}</Link>
    </>
  );
}

export default MenuLink;
