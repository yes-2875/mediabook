'use client';

import { useState, useCallback } from "react";
import MovieList from "@/components/MovieList";
import { fetchFromTMDB } from "@/lib/tmdb";
import styles from "@/styles/Home.module.css";

export default function HomeContent({ trending, fetchError }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const runSearch = useCallback(async () => {
    const q = query.trim();
    if (!q) {
      setSearchResults(null);
      setSearchError(null);
      return;
    }
    setSearchLoading(true);
    setSearchError(null);
    try {
      const data = await fetchFromTMDB(`/search/movie?query=${encodeURIComponent(q)}`);
      setSearchResults(data.results || []);
    } catch (e) {
      setSearchError(e.message || "Search failed");
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, [query]);

  const showSearch = searchResults !== null;
  const trendingList = trending ?? [];
  const trendingEmpty = !fetchError && trendingList.length === 0;

  return (
    <>
      {fetchError && (
        <p className={styles.apiError} role="alert">
          {fetchError}
        </p>
      )}
      <section className={styles.searchSection}>
        <label htmlFor="movie-search" className={styles.searchLabel}>
          Search movies
        </label>
        <div className={styles.searchRow}>
          <input
            id="movie-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runSearch()}
            className={styles.searchInput}
            placeholder="Title…"
          />
          <button type="button" className={styles.searchButton} onClick={runSearch} disabled={searchLoading}>
            {searchLoading ? "Searching…" : "Search"}
          </button>
          {showSearch && (
            <button
              type="button"
              className={styles.searchClear}
              onClick={() => {
                setSearchResults(null);
                setSearchError(null);
              }}
            >
              Show trending
            </button>
          )}
        </div>
        {searchError && (
          <p className={styles.apiError} role="alert">
            {searchError}
          </p>
        )}
      </section>

      {showSearch ? (
        <>
          <h2>Search results</h2>
          {searchLoading ? (
            <p className={styles.resultsLoading} aria-live="polite">
              Loading…
            </p>
          ) : searchError ? null : searchResults.length === 0 ? (
            <p>No results.</p>
          ) : (
            <MovieList movies={searchResults} />
          )}
        </>
      ) : (
        <>
          <h2>Trending this week</h2>
          {trendingEmpty ? (
            <p>No trending movies right now.</p>
          ) : (
            <MovieList movies={trendingList} />
          )}
        </>
      )}
    </>
  );
}
