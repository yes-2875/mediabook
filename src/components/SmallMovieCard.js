import styles from '@/styles/SmallMovieCard.module.css';

export default function SmallMovieCard({ movie, fa }) {
    return (
        <div className={styles.SmallMovieCard}>
            <img className={styles.SmallMoviePoster} src={movie.poster}></img>
            <h2>{movie}</h2>
            <h3>{}</h3>
        </div>
    );
}