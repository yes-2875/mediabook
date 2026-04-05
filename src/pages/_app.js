import styles from "@/styles/Home.module.css";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
