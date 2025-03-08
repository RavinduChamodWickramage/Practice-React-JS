import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setAge":
      return {
        ...state,
        age: action.payload,
      };
    case "setAddress":
      return {
        ...state,
        address: action.payload,
      };
    case "setContact":
      return {
        ...state,
        contact: action.payload,
      };
    case "setArray":
      return {
        ...state,
        dataArray: [...state.dataArray, action.payload],
      };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    name: "",
    age: "",
    address: "",
    contact: "",
    dataArray: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "setName",
              payload: e.target.value,
            })
          }
          placeholder="Enter the name"
        />
        <br />
        <input
          type="text"
          value={state.age}
          onChange={(e) =>
            dispatch({
              type: "setAge",
              payload: e.target.value,
            })
          }
          placeholder="Enter the age"
        />
        <br />
        <input
          type="text"
          value={state.address}
          onChange={(e) =>
            dispatch({
              type: "setAddress",
              payload: e.target.value,
            })
          }
          placeholder="Enter the address"
        />
        <br />
        <input
          type="text"
          value={state.contact}
          onChange={(e) =>
            dispatch({
              type: "setContact",
              payload: e.target.value,
            })
          }
          placeholder="Enter the contact"
        />
        <br />
        <button
          onClick={() =>
            dispatch({
              type: "setArray",
              payload: {
                name: state.name,
                age: state.age,
                address: state.address,
                contact: state.contact,
              },
            })
          }
        >
          Set Data
        </button>

        <div>
          <h2>State</h2>
          <p>name: {state.name}</p>
          <p>age: {state.age}</p>
          <p>address: {state.address}</p>
          <p>contact: {state.contact}</p>
        </div>
      </div>
    </>
  );
}

export default App;
