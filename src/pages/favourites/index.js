'use client';
import Head from "next/head";
import { useFavorites } from "@/context/FavoritesContext";
import SmallMovieCard from "@/components/SmallMovieCard";
import styles from "@/styles/Home.module.css";

export default function FavouritesPage() {
  const { favorites, removefavorite } = useFavorites();

  return (
    <>
      <Head>
        <title>Favourites · Mediabook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <h1>My Favourites</h1>

        {favorites.length === 0 && (
          <p>No favourites yet. Add some from the home page.</p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {favorites.map((movie) => (
            <SmallMovieCard
              key={movie.id}
              movie={movie}
              isFavourite={true}
              setFavourite={() => removefavorite(movie.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
