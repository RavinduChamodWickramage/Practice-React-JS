export const initialState = {
  items: [],
  total: 0.0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};
