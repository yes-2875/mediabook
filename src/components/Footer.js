import styles from '@/styles/Footer.module.css';

export default function Footer({ font1, font2 }) {
    return (
        <footer className={`${styles.Footer} ${font1.variable} ${font2.variable}`}>
            <p>Movie database is provided courtesy of Themoviedb.org. This product uses the TMDB API but is not certified or endorsed by TMDB.<br></br>
            Themoviedb.org does not claim ownership of any images or data in the API.
            </p>
        </footer>
    );
}