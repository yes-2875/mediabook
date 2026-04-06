import SmallMovieCard from "./SmallMovieCard";
import styles from '@/styles/MovieList.module.css';

export default function MovieList({ movies }) {
    const setFavourite = function() {
        
    }
    
    const listItems = movies.map(movie => {
        return <SmallMovieCard key={movies.findIndex((item) => item.imdbID === movie.imdbID)} movie={movie} isFavourite={false} setFavourite={setFavourite}/>
    });
    
    return (
        <div className={styles.MovieList}>
            {listItems}
        </div>
    );
}