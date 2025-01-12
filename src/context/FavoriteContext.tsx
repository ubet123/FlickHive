import React, { createContext, useContext, useState, useEffect } from 'react';

// Interface for Favorite Movie/TV show
interface FavoriteContextType {
  favorites: number[]; // Store the list of favorite IDs
  toggleFavorite: (id: number) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
};

export const FavoriteProvider: React.FC = ({ children }) => {
  // Load favorites from localStorage initially
  const storedFavorites = JSON.parse(localStorage.getItem("favoritesLocal") || "[]");
  const [favorites, setFavorites] = useState<number[]>(storedFavorites);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favoritesLocal", JSON.stringify(favorites));
  }, [favorites]); // Runs whenever favorites change

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id) // Remove if already a favorite
        : [...prevFavorites, id] // Add if not a favorite
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
