const defaultState = {
  number: 0,
};

const reducer = (state = defaultState, action) => {
  if (action.type === "INCREMENT") {
    return {
      number: state.number + action.payload,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      number: state.number - action.payload,
    };
  }

  return state;
};

export default reducer;
