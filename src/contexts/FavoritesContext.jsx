/* eslint-disable react-refresh/only-export-components */

import { createContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};