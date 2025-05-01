/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cartItem", []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
