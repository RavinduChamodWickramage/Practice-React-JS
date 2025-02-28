import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <>
      <div className="bodyContainer">
        <h1>Body Content</h1>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Body;