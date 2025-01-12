import useMovieList from "@/hooks/useMovies";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/context/genres.context";
import { useDarkMode } from "@/context/DarkModeContext"; // Import the dark mode context hook
import Footer from "./Footer";

const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieLists , loading } = useMovieList(genres);
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use dark mode context

  

  if(loading){
    return(
    <>
    
    <div className="flex justify-center items-center mt-0 h-screen">
  <button className="inline-block w-60 h-20 rounded-full bg-green-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0" type="button">
    <div
      role="status"
      className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
    Loading
  </button>
</div>


    
    </>)
  }

  return (
    <>
    <div className={`p-3  pt-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-black'}`}>
      <div className="flex items-center justify-between px-8">
        <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Movies</h1>
        
        {/* Dark mode toggle */}
        <label className="inline-flex items-center relative cursor-pointer">
          <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-3 overflow-x-hidden">
        {movieLists?.map((movieList) => (
          <div key={movieList.id}>
            <MovieCard movieResult={movieList} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MovieList;
