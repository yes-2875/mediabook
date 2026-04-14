'use client';
import Head from "next/head";
import { useFavorites } from "@/context/FavoritesContext";
import SmallMovieCard from "@/components/SmallMovieCard";
import styles from "@/styles/Home.module.css";
import MovieList from "@/components/MovieList";

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

        <MovieList movies={favorites}/>
      </div>
    </>
  );
}
