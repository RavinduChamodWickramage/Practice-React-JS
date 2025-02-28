import React from "react";

function MenuLink(props) {
  return (
    <>
      <a href={props.url} className="link">
        {props.linkname}
      </a>
    </>
  );
}

export default MenuLink;
