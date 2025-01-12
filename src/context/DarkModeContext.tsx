

import { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for dark mode
const DarkModeContext = createContext();

// Create a custom hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

// Provider component to wrap your app with dark mode state
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage if available
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};
