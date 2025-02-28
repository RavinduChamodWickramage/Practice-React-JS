import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <p>{count}</p>
    </>
  );
}

export default App;
