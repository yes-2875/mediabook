import styles from '@/styles/SmallMovieCard.module.css';
import Link from 'next/link';

export default function SmallMovieCard({ movie, isFavourite, setFavourite}) {
    return (
        <div className={styles.SmallMovieCard}>
            <img className={styles.SmallMoviePoster} src={movie.Poster}></img>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            
            <button className={styles.FavouritesButton} onClick={setFavourite}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
            <Link href={`/movie/${movie["imdbID"]}`} className={styles.ViewDetails}>View Details</Link>
        </div>
    );
}