import React, { useContext } from "react";
import ThirdComponent from "./ThirdComponent";
import { userAuth } from "../App";

function SecondComponent() {
  const { username } = useContext(userAuth);

  return (
    <>
      <h2>Second Component</h2>
      <p>Logged as {username}</p>
      <ThirdComponent />
    </>
  );
}

export default SecondComponent;
