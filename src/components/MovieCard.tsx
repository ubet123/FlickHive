import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites, FavoriteItem } from "@/context/FavoriteContext";
import { MovieResult } from "@/hooks/useMovies";
import { Link } from "react-router";

interface Props {
  movieResult: MovieResult | FavoriteItem;
}

const MovieCard = ({ movieResult }: Props) => {
  const { favorites, toggleFavorite } = useFavorites();

  // Check if the current movie is in favorites
  const isFavorite = favorites.includes(movieResult.id);

  return (
    <div className="flex flex-col items-center px-2">
      <div className="group relative w-full max-w-[200px] aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
          alt={movieResult.title || "Movie Poster"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Favorite button — always visible with backdrop */}
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const item: FavoriteItem = {
              id: movieResult.id,
              media_type: 'movie',
              title: movieResult.title,
              name: movieResult.name,
              poster_path: movieResult.poster_path,
              overview: movieResult.overview,
              original_language: movieResult.original_language,
              original_title: movieResult.original_title,
              backdrop_path: movieResult.backdrop_path,
              adult: movieResult.adult,
            };
            toggleFavorite(movieResult.id, item);
          }}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
        >
          {isFavorite ? (
            <AiFillHeart
              title="Added to Favorites"
              className="text-xl text-red-500 transition-transform duration-200 hover:scale-110"
            />
          ) : (
            <AiOutlineHeart
              title="Add to Favorites"
              className="text-xl text-white hover:text-red-400 transition-colors duration-200"
            />
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-white text-base text-center font-semibold mb-1 line-clamp-2">{movieResult.title}</h2>
          <p className="text-gray-300 text-xs text-center line-clamp-3 mb-3">{movieResult.overview}</p>
          <Link to={`/player/${movieResult.id}`}>
            <button className="px-5 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg transition-all duration-300">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
      <h1 className="mt-3 mb-4 max-w-[200px] text-sm text-center font-medium line-clamp-1">{movieResult.title ? movieResult.title : movieResult.name}</h1>
    </div>
  );
};

export default MovieCard;
