import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const favoritesFromLocalStorage =
  JSON.parse(localStorage.getItem("favorites")) || [];

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addItem = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeItem = (itemId) => {
    setFavorites(favorites.filter((post) => post.id !== itemId));
  };
  const isInFavorites = (itemid) => {
    return favorites.some((post) => post.id === itemid);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addItem,
        removeItem,
        isInFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
