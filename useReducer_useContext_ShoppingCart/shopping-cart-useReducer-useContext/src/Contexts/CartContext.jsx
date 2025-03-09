import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../Reducers/cartReducer";

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <CartContext.Provider
      value={{ items: state.items, total: state.total, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
