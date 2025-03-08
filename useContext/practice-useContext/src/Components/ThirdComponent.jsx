import React, { useContext } from "react";
import { userAuth } from "../App";

function ThirdComponent() {
  const { setUsername } = useContext(userAuth);

  return (
    <>
      <h2>Third Component</h2>
      <input
        type="text"
        placeholder="Enter the username"
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}

export default ThirdComponent;
