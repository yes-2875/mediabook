import styles from '@/styles/Footer.module.css';

export default function Footer({ font1, font2 }) {
    return (
        <footer className={`${styles.Footer} ${font1.variable} ${font2.variable}`}>
            <p>Movie database is provided courtesy of OMDbapi.com.</p>
        </footer>
    );
}