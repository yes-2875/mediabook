'use client'
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { useFavorites } from "@/context/FavoritesContext";

export default function Navbar({ font1, font2 }) {
    const pathName = usePathname();
    const { favorites } = useFavorites();   

    return (
        <nav className={`${styles.Navbar} ${font1.variable} ${font2.variable}`}>
            <img src='logo_long.svg' className='logo' />
            <Link href="/" className={clsx(styles.Link, { [styles.current]: pathName === "/" })} > Home </Link>
            <Link href="/favorite" className={clsx(styles.Link, { [styles.current]: pathName === "/favorite" })} > Favourites ({favorites.length}) </Link>
        </nav>
    );
}
