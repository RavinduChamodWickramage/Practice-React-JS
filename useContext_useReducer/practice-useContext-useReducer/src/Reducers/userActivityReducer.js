export const Action = {
  SET_DATA: "SET_DATA",
};

export const userActivityReducer = (state, { type, data }) => {
  switch (type) {
    case Action.SET_DATA:
      return {
        ...state,
        image: data.image,
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      };
    default:
      return state;
  }
};
