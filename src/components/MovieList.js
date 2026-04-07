import SmallMovieCard from "./SmallMovieCard";
import styles from '@/styles/MovieList.module.css';
import { useFavorites } from "@/context/FavoritesContext";

export default function MovieList({ movies }) {
    const { favorites, addfavorite, removefavorite } = useFavorites();

    const isFav = (movie) =>
        favorites.some(f => f.imdbID === movie.imdbID);

    return (
        <div className={styles.MovieList}>
        {movies.map(movie => (
        <SmallMovieCard
        key={movie.imdbID}
        movie={movie}
        isFavourite={isFav(movie)}
        setFavourite={() =>
        isFav(movie)
        ? removefavorite(movie.imdbID)
        : addfavorite(movie) } />
        ))}
        </div>
    );
}
