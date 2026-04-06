import styles from '@/styles/SmallMovieCard.module.css';
import Link from 'next/link';

export default function SmallMovieCard({ movie, isFavourite, setFavourite}) {
    return (
        <div className={styles.SmallMovieCard}>
            <img className={styles.SmallMoviePoster} src={movie.Poster}></img>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            
            <button onClick={setFavourite}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
            <Link href={`/movie/${movie["imdbID"]}`}>View Details</Link>
        </div>
    );
}