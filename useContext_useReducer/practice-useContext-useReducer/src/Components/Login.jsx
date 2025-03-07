import React, { useContext, useRef } from "react";
import { userData } from "../Context/UserAuth";
import { submitHandle } from "../Utils/authValidate";

function Login() {
  const { userDetails, setUserDetails } = useContext(userData);
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      {userDetails.userId ? (
        <p>Hello {userDetails.name}</p>
      ) : (
        <>
          <label>Username</label>
          <input ref={usernameRef} type="text" placeholder="Enter your email" />
          <br />
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <button
            onClick={() =>
              submitHandle(usernameRef, passwordRef, setUserDetails)
            }
          >
            Submit
          </button>
        </>
      )}
    </>
  );
}

export default Login;
