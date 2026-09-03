import { useDarkMode } from "@/context/DarkModeContext";
import MovieCard from "./MovieCard";
import { useFavorites } from "@/context/FavoriteContext";
import Footer from "./Footer";
import TvShowCard from "./TvShowCard";
import { BiCameraMovie } from "react-icons/bi";
import { MdLiveTv, MdLocalMovies } from "react-icons/md";

const FavouritesList = () => {
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { favoriteItems } = useFavorites();

  const favoriteMovies = favoriteItems.filter((item) => item.media_type === 'movie');
  const favoriteTvShows = favoriteItems.filter((item) => item.media_type === 'tv');

  return (
    <>
      <div className={`min-h-screen px-6 pt-8 pb-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-800"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-red-500">Favourites</span>
            </h1>
            <label className="inline-flex items-center relative cursor-pointer">
              <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-orange-400 peer-checked:after:bg-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
              <svg
                height="0"
                width="100"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
              >
                <path
                  d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                ></path>
              </svg>
              <svg
                height="512"
                width="512"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
              >
                <path
                  d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                ></path>
              </svg>
            </label>
          </div>

          {/* Favorite Movies Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BiCameraMovie className="text-2xl text-blue-500" /> <span>Movies</span>
              {favoriteMovies.length > 0 && (
                <span className={`text-sm font-normal px-3 py-0.5 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                  {favoriteMovies.length}
                </span>
              )}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {favoriteMovies.length > 0 ? (
                favoriteMovies.map((movie) => (
                  <MovieCard key={movie.id} movieResult={movie} />
                ))
              ) : (
                <div className={`col-span-full flex flex-col items-center justify-center py-16 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                  <MdLocalMovies className="text-4xl text-blue-500 mb-3" />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No favorite movies yet. Start exploring!</p>
                </div>
              )}
            </div>
          </div>

          {/* Favorite TV Shows Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MdLiveTv className="text-2xl text-blue-500" /> <span>TV Shows</span>
              {favoriteTvShows.length > 0 && (
                <span className={`text-sm font-normal px-3 py-0.5 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                  {favoriteTvShows.length}
                </span>
              )}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {favoriteTvShows.length > 0 ? (
                favoriteTvShows.map((tvShow) => (
                  <TvShowCard key={tvShow.id} tvShowResult={tvShow} />
                ))
              ) : (
                <div className={`col-span-full flex flex-col items-center justify-center py-16 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                  <MdLiveTv className="text-4xl text-blue-500 mb-3" />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No favorite TV shows yet. Start exploring!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavouritesList;
