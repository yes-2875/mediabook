import styles from '@/styles/SmallMovieCard.module.css';
import Link from 'next/link';
import { posterUrl } from '@/lib/tmdb';

function releaseYear(releaseDate) {
    if (!releaseDate) return "—";
    return releaseDate.slice(0, 4);
}

function formatRating(voteAverage) {
    if (voteAverage == null || Number.isNaN(Number(voteAverage))) return "—";
    return `${Number(voteAverage).toFixed(1)} / 10`;
}

export default function SmallMovieCard({ movie, isFavourite, setFavourite}) {
    const src = posterUrl(movie.poster_path);
    return (
        <div className={styles.SmallMovieCard}>
            {src ? (
                <img className={styles.SmallMoviePoster} src={src} alt={movie.title || "Poster"} />
            ) : (
                <div className={styles.SmallMoviePoster} role="img" aria-label="No poster" />
            )}
            <h3>{movie.title}</h3>
            <p>{releaseYear(movie.release_date)}</p>
            <p className={styles.Rating}>Rating: {formatRating(movie.vote_average)}</p>
            
            <button className={styles.FavouritesButton} onClick={setFavourite}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
            <Link href={`/movie/${movie.id}`} className={styles.ViewDetails}>View Details</Link>
        </div>
    );
}