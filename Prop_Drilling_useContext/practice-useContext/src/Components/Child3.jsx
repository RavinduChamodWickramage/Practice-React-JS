import React, { useContext } from "react";
import { UserApp } from "./Parent";

function Child3() {
  const user = useContext(UserApp);

  return (
    <>
      <h2>Child 3</h2>
      <p>Welcome {user === "" ? "Guest" : user}</p>
    </>
  );
}

export default Child3;
