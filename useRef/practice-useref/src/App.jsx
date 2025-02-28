import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const countRef = useRef(0);
  const inputRef = useRef("");

  useEffect(() => {
    countRef.current += 1;
    inputRef.current.style.backgroundColor = "yellow";
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>You have input: {input || "<Input Text goes here>"}</p>
      <p>Rendered {countRef.current} times</p>
      <input type="text" ref={inputRef} />
      <br />
    </>
  );
}

export default App;
