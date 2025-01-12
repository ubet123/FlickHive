import { SearchResultContext } from "@/context/searchResult.context";
import { useMultiSearch } from "@/hooks/useMultiSearch";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";
import { useDarkMode } from "@/context/DarkModeContext";

const SearchList = () => {
  const { searchData, searchText } = useContext(SearchResultContext);
const { isDarkMode, toggleDarkMode } = useDarkMode();
  useMultiSearch(searchText);

  return (
    <>
      <div className={`p-3  pt-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-black'}`}>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-3">
    
        {searchData.map((data) => (
          <div key={data.id}>
            {data.media_type === "movie" ? (
              <MovieCard movieResult={data} />
            ) : (
              <TvShowCard tvShowResult={data} />
            )}
            </div>
         
        ))}
        </div>
      </div>
    </>
  );
};

export default SearchList;
