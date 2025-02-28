import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <>
      <div className="bodyContainer">
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Body;
