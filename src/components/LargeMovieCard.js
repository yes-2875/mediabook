import styles from '@/styles/SmallMovieCard.module.css';
import Link from 'next/link';

export default function LargeMovieCard({ movie, isFavourite, setFavourite}) {
    return (
        <div className={styles.LargeMovieCard}>
            <img className={styles.LargeMoviePoster} src={movie.poster}></img>
            <h3>{movie.title}</h3>
            <h2>{movie.year}</h2>
            <p>{movie.description}</p>
            
            <button onClick={setFavourite}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
        </div>
    );
}