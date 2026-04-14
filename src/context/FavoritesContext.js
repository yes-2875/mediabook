'use client';
import { createContext, useContext, useState, useEffect, useRef } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "favorites_tmdb";

function normalizeStored(list) {
  if (!Array.isArray(list)) return [];
  return list.filter((item) => item && typeof item.id === "number");
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const storageReady = useRef(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      let next = [];
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) next = normalizeStored(JSON.parse(raw));
      } catch {
        /* ignore */
      }
      storageReady.current = true;
      setFavorites(next);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!storageReady.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      /* ignore */
    }
  }, [favorites]);

  const addfavorite = (movie) => {
    if (!movie || typeof movie.id !== "number") return;
    if (!favorites.some((f) => f.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removefavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
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
