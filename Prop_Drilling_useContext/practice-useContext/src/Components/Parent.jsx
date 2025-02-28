import React, { createContext, useState } from "react";
import Child1 from "./Child1";

export const UserApp = createContext();

function Parent() {
  const [username, setUsername] = useState("Guest");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <UserApp.Provider value={username}>
        <h2>Parent</h2>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={handleUsername}
        />
        <p>Welcome {username === "" ? "Guest" : username}</p>
        <Child1 />
      </UserApp.Provider>
    </>
  );
}

export default Parent;
