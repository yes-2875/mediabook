import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar({ font1, font2 }) {
    return (
        <nav className={`${styles.Navbar} ${font1.variable} ${font2.variable}`}>
            <Link href="/" className={styles.Link}>Home</Link>
        </nav>
    );
}