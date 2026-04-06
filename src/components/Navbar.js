'use client'
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    {key: 1, href: "/"},
    {key: 2, href: "/"},
];

export default function Navbar({ font1, font2 }) {
    const pathName = usePathname();
    return (
        <nav className={`${styles.Navbar} ${font1.variable} ${font2.variable}`}>
            {links.map((link) => {
                <Link key={link.key} href={link.href}
                className={clsx(`${styles.Link}`, {'current': pathName === link.href})}>Home</Link>
            })}
        </nav>
    );
}