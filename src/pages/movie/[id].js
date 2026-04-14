'use client';
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import { useFavorites } from "@/context/FavoritesContext";
import LargeMovieCard from "@/components/LargeMovieCard";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { fetchFromTMDB } from "@/lib/tmdb";

function pickTrailerKey(videosPayload) {
  const results = videosPayload?.results ?? [];
  const trailers = results.filter(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );
  const official = trailers.find((t) => t.official);
  const chosen = official ?? trailers[0];
  return chosen?.key ?? null;
}

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { favorites, addfavorite, removefavorite } = useFavorites();

  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const numericId = useMemo(() => {
    if (!id || Array.isArray(id)) return null;
    const n = Number(id);
    return Number.isFinite(n) ? n : null;
  }, [id]);

  useEffect(() => {
    if (!router.isReady || numericId == null) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const [detail, videos] = await Promise.all([
          fetchFromTMDB(`/movie/${numericId}`),
          fetchFromTMDB(`/movie/${numericId}/videos`),
        ]);
        if (cancelled) return;
        setMovie(detail);
        setTrailerKey(pickTrailerKey(videos));
      } catch (e) {
        if (!cancelled) {
          setError(e?.message ?? "Failed to load movie.");
          setMovie(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [router.isReady, numericId]);

  const isFav =
    movie != null && favorites.some((f) => f.id === movie.id);

  if (!router.isReady || id === undefined) {
    return <p className={styles.main}>Loading…</p>;
  }

  if (numericId == null) {
    return (
      <main className={styles.main}>
        <p>Invalid movie id.</p>
      </main>
    );
  }

  if (loading) {
    return (
      <main className={styles.main}>
        <p>Loading…</p>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <main className={styles.main}>
        <p role="alert">{error ?? "Movie not found."}</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{movie.title} · Mediabook</title>
        <meta name="description" content={movie.overview?.slice(0, 160) ?? ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LargeMovieCard
          movie={movie}
          trailerKey={trailerKey}
          isFavourite={isFav}
          setFavourite={() =>
            isFav ? removefavorite(movie.id) : addfavorite(movie)
          }
        />
      </main>
    </>
  );
}
