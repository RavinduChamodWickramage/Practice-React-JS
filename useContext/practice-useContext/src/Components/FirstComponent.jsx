import React, { useContext } from "react";
import SecondComponent from "./SecondComponent";
import { userAuth } from "../App";

function FirstComponent() {

  const {username} = useContext(userAuth);

  return (
    <>
      <h2>First Component</h2>
      <p>Logged as {username}</p>
      <SecondComponent />
    </>
  );
}

export default FirstComponent;
