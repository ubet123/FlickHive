import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Interface for a stored favorite item
export interface FavoriteItem {
  id: number;
  media_type: 'movie' | 'tv';
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
  original_language?: string;
  original_title?: string;
  backdrop_path?: string;
  adult?: boolean;
}

// Interface for Favorite Movie/TV show
interface FavoriteContextType {
  favorites: number[];
  favoriteItems: FavoriteItem[];
  toggleFavorite: (id: number, item?: FavoriteItem) => void;
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
  const storedFavoriteItems = (() => {
    try {
      return JSON.parse(localStorage.getItem("favoriteItemsLocal") || "[]");
    } catch {
      return [];
    }
  })();

  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(storedFavoriteItems);

  // Derive the list of favorite IDs from the stored items
  const favorites = favoriteItems.map((item: FavoriteItem) => item.id);

  useEffect(() => {
    localStorage.setItem("favoriteItemsLocal", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const toggleFavorite = (id: number, item?: FavoriteItem) => {
    setFavoriteItems((prevItems) => {
      const exists = prevItems.some((fav) => fav.id === id);
      if (exists) {
        return prevItems.filter((fav) => fav.id !== id);
      } else if (item) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, favoriteItems, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
