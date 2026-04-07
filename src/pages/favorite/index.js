'use client';
import { useFavorites } from "@/context/FavoritesContext";
import SmallMovieCard from "@/components/SmallMovieCard";
import styles from "@/styles/Home.module.css";

export default function FavoritePage() {
  const { favorites, removefavorite } = useFavorites();

  return (
    <div className={styles.main}>
      <h1>My Favorites</h1>

      {favorites.length === 0 && (
        <p>No favorites yet. Please add some from the home page.</p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        width: "100%",
        maxWidth: "900px"
      }}>
        {favorites.map(movie => (
        <SmallMovieCard
        key={movie.imdbID}
        movie={movie}
        isFavourite={true}
        setFavourite={() => removefavorite(movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}
