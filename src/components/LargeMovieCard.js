import styles from '@/styles/LargeMovieCard.module.css';
import { posterUrl } from '@/lib/tmdb';

function releaseYear(releaseDate) {
    if (!releaseDate) return "—";
    return releaseDate.slice(0, 4);
}

function formatRuntime(minutes) {
    if (!minutes) return "—";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h === 0) return `${m} min`;
    return `${h}h ${m}m`;
}

export default function LargeMovieCard({
    movie,
    isFavourite,
    setFavourite,
    trailerKey = null,
}) {
    const src = posterUrl(movie.poster_path);
    const genreLine = (movie.genres || []).map((g) => g.name).join(", ") || "—";

    return (
        <div className={styles.LargeMovieCard}>
            {src ? (
                <img className={styles.LargeMoviePoster} src={src} alt={movie.title || "Poster"} />
            ) : (
                <div className={styles.LargeMoviePoster} role="img" aria-label="No poster" />
            )}
            <div className={styles.Content}>
                <h1>{movie.title}</h1>
                <h2>
                    {releaseYear(movie.release_date)} · {formatRuntime(movie.runtime)} · {genreLine}
                </h2>
                <h3>
                    Rating: {movie.vote_average?.toFixed(1) ?? "—"} / 10 · {movie.vote_count?.toLocaleString?.() ?? movie.vote_count ?? "—"} votes
                </h3>
                <p>{movie.overview || "No overview available."}</p>
                {trailerKey && (
                    <div className={styles.Trailer}>
                        <h3>Trailer</h3>
                        <iframe
                            title="Trailer"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${trailerKey}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
                <button className={styles.FavouritesButton} onClick={setFavourite}>
                    {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                </button>
            </div>
        </div>
    );
}
