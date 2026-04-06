'use client'
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    {key: 1, href: "/", name: "Home"},
    {key: 2, href: "/favorite", name: "Favorite"},
];

export default function Navbar({ font1, font2 }) {
    const pathName = usePathname();
    
    const linkJsx = links.map(link => {
      return <Link key={link.key} href={link.href}
        className={clsx(styles.Link, { [styles.current]: pathName === link.href })}>
        {link.name}
      </Link>;
    });
    
    return (
        <nav className={`${styles.Navbar} ${font1.variable} ${font2.variable}`}>
            <img src='logo_long.svg' className='logo'></img>
            {linkJsx}
        </nav>
    );
}