import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Interface for Favorite Movie/TV show
interface FavoriteContextType {
  favorites: number[];
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

// Props for FavoriteProvider
interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const storedFavorites = (() => {
    try {
      return JSON.parse(localStorage.getItem("favoritesLocal") || "[]");
    } catch {
      return [];
    }
  })();

  const [favorites, setFavorites] = useState<number[]>(storedFavorites);

  useEffect(() => {
    localStorage.setItem("favoritesLocal", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
