import React, { createContext, useReducer } from "react";
import { userActivityReducer } from "../Reducers/userActivityReducer";

export const userActivity = createContext({});

const initialState = {
  image: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

function UserActivity({ children }) {
  const [state, dispatch] = useReducer(userActivityReducer, initialState);

  return (
    <userActivity.Provider value={{ state, dispatch }}>
      {children}
    </userActivity.Provider>
  );
}

export default UserActivity;
