import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { GenresProvider } from './context/genres.context.tsx'
import { SearchProvider } from './context/searchResult.context.tsx'

import { DarkModeProvider } from './context/DarkModeContext.tsx'
import { FavoriteProvider } from './context/FavoriteContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <FavoriteProvider>
    <DarkModeProvider>
    <SearchProvider>
    <GenresProvider>
    <App />
    </GenresProvider>
    </SearchProvider>
    </DarkModeProvider>
    </FavoriteProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
