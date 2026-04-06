'use client';
import { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const [title, setTitle] = useState('');

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = () => {
    if (title.trim() !== '') {
      const newFav = { id: Date.now(), title };
      setFavorites([...favorites, newFav]);
      setTitle('');
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className={styles.intro}>
      <h1>My Favorites</h1>
      
      <div style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '440px' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addFavorite()}
            placeholder="Add a favorite..."
            style={{
              padding: '10px 16px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid var(--button-secondary-border)',
              flex: 1,
              backgroundColor: 'var(--background)',
              color: 'var(--text-primary)',
            }}
          />
          <button
            onClick={addFavorite}
            style={{
              padding: '10px 24px',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '8px',
              border: '1px solid var(--button-secondary-border)',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: '0.2s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--button-secondary-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Add
          </button>
        </div>

        <div style={{ width: '100%', maxWidth: '440px' }}>
          {favorites.length === 0 ? (
            <p>No favorites yet! Add one to get started.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: '12px', display: 'flex', flexDirection: 'column' }}>
              {favorites.map((fav) => (
                <li
                  key={fav.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--button-secondary-border)',
                    backgroundColor: 'var(--background)',
                  }}
                >
                  <span style={{ color: 'var(--text-primary)', fontSize: '16px' }}>
                    {fav.title}
                  </span>
                  <button
                    onClick={() => removeFavorite(fav.id)}
                    style={{
                      padding: '6px 12px',
                      fontSize: '12px',
                      borderRadius: '6px',
                      border: '1px solid var(--button-secondary-border)',
                      backgroundColor: 'transparent',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: '0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--button-secondary-hover)';
                      e.target.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
}