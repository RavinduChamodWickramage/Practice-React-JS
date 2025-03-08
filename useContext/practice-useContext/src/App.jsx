import React, { createContext, useState } from "react";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";

export const userAuth = createContext({});

function App() {
  const [username, setUsername] = useState("");

  return (
    <userAuth.Provider value={{ username, setUsername }}>
      <h1>App {username}</h1>
      <FirstComponent />
    </userAuth.Provider>
  );
}

export default App;
