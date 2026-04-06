import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <>
    <Navbar font1={geistSans} font2={geistMono}/>
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Component {...pageProps} />
    </div>
    <Footer font1={geistSans} font2={geistMono}/>
    </>
  );
}
