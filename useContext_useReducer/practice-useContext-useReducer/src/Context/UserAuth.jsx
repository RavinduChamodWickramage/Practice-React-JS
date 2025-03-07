import React, { createContext, useState } from "react";

export const userData = createContext({});

function UserAuth({ children }) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
    userId: "",
  });

  return (
    <userData.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </userData.Provider>
  );
}

export default UserAuth;
