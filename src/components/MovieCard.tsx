import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites } from "@/context/FavoriteContext"; // Import context
import { MovieResult } from "@/hooks/useMovies";

import { Link } from "react-router";

interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const { favorites, toggleFavorite } = useFavorites(); 

  // Check if the current movie is in favorites
  const isFavorite = favorites.includes(movieResult.id); 

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center mt-8 mb-2 bg-gray-100 dark:bg-gray-900">
        <div className="group relative w-50 h-96 bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
            alt="Movie Poster Loading"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div
            onClick={() => toggleFavorite(movieResult.id)} 
            className="absolute top-3 right-3 z-10"
          >
            {isFavorite ? (
              <AiFillHeart
                title="Added to Favorites"
                className="text-2xl rounded-full cursor-pointer opacity-0 group-hover:opacity-100 text-red-500"
              />
            ) : (
              <AiOutlineHeart
                title="Add to Favorites"
                className="text-2xl rounded-full cursor-pointer opacity-0 group-hover:opacity-100 text-white hover:text-red-500"
              />
            )}
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-xl text-center max-w-72 font-semibold mb-2 ">{movieResult.title}</h2>
            <p className="text-white text-sm text-center px-4 max-h-20 overflow-y-hidden">{movieResult.overview}</p>
           <Link to={`/player/${movieResult.id}`}>
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded shadow">
              Watch Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="max-w-60 text-center">{movieResult.title ? movieResult.title : movieResult.name}</h1>
    </div>
  );
};

export default MovieCard;
