'use client';
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addfavorite = (movie) => {
    if (!favorites.some(f => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removefavorite = (id) => {
    setFavorites(favorites.filter(f => f.imdbID !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addfavorite, removefavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

