import React, { useContext, useRef } from "react";
import { userActivity } from "../Context/UserActivity";
import { userData } from "../Context/UserAuth";
import { submitUserActivity } from "../Utils/authValidate";

function UserInput() {
  const { state, dispatch } = useContext(userActivity);
  const { userDetails } = useContext(userData);

  const imageRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  return (
    <>
      {userDetails.userId ? (
        <div>
          <h2>User Input Form</h2>
          <form>
            <label>Image URL</label>
            <input type="text" ref={imageRef} defaultValue={state.image} />
            <br />
            <label>Name</label>
            <input type="text" ref={nameRef} defaultValue={state.name} />
            <br />
            <label>Email</label>
            <input type="email" ref={emailRef} defaultValue={state.email} />
            <br />
            <label>Phone</label>
            <input type="tel" ref={phoneRef} defaultValue={state.phone} />
            <br />
            <label>Address</label>
            <input type="text" ref={addressRef} defaultValue={state.address} />
            <br />
            <button
              type="button"
              onClick={() =>
                submitUserActivity(
                  imageRef,
                  nameRef,
                  emailRef,
                  phoneRef,
                  addressRef,
                  dispatch
                )
              }
            >
              Submit
            </button>
          </form>

          <h3>User Activity from Activity Context</h3>
          <p>Image: {state.image}</p>
          <p>Name: {state.name}</p>
          <p>Email: {state.email}</p>
          <p>Phone: {state.phone}</p>
          <p>Address: {state.address}</p>

          <h3>User Details from Auth Context</h3>
          <p>Name: {userDetails.name}</p>
          <p>Password: {userDetails.password}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default UserInput;
