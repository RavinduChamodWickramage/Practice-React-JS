import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();

  return (
    <>
      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "DECREMENT",
              payload: 1,
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "INCREMENT",
              payload: 1,
            });
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
