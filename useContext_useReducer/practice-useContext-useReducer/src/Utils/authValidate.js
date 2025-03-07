export const submitHandle = (username, password, setFunc) => {
  setFunc((pre) => ({
    ...pre,
    userId: username.current.value,
    password: password.current.value,
    name: username.current.value,
  }));
};

export const submitUserActivity = (
  imageRef,
  nameRef,
  emailRef,
  phoneRef,
  addressRef,
  dispatch
) => {
  dispatch({
    type: "SET_DATA",
    data: {
      image: imageRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    },
  });
};
