import styles from '@/styles/SmallMovieCard.module.css';
import Link from 'next/link';

export default function LargeMovieCard({ movie, isFavourite, setFavourite}) {
    return (
        <div className={styles.LargeMovieCard}>
            <img className={styles.LargeMoviePoster} src={movie.Poster}></img>
            <h3>{movie.Title}</h3>
            <h2>{movie.Year}</h2>
            <p>{movie.Plot}</p>
            
            <button onClick={setFavourite}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
        </div>
    );
}