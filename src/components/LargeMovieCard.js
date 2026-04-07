import styles from '@/styles/LargeMovieCard.module.css';

export default function LargeMovieCard({ movie, isFavourite, setFavourite}) {
    return (
        <div className={styles.LargeMovieCard}>
            <img className={styles.LargeMoviePoster} src={movie.Poster}></img>
            <div className={styles.Content}>
                <h1>{movie.Title}</h1>
                <h2>{movie.Year} · {movie.Rated} · {movie.Runtime}</h2>
                <h3>{movie.Genre} · Rating: {movie.imdbRating} · {movie.imdbVotes} votes</h3>
                <p>{movie.Plot}</p>
                <h3>Awards: {movie.Awards}</h3>
                <h3>Actors: {movie.Actors}</h3>
                <button className={styles.FavouritesButton} onClick={setFavourite}>
                    {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                </button>
            </div>
        </div>
    );
}