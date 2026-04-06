'use client';
import { useState, useEffect } from 'react';

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
    <div style={{ padding: '20px' }}>
      <h1>My Favorites</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addFavorite()}
          placeholder="Add a favorite..."
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <button onClick={addFavorite} style={{ padding: '8px 16px' }}>
          Add
        </button>
      </div>

      <div>
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id} style={{ marginBottom: '10px' }}>
                {fav.title}
                <button
                  onClick={() => removeFavorite(fav.id)}
                  style={{ marginLeft: '10px' }}
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