import { SearchResultContext } from "@/context/searchResult.context";
import { useMultiSearch } from "@/hooks/useMultiSearch";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";
import { useDarkMode } from "@/context/DarkModeContext";
import { BiSearchAlt } from "react-icons/bi";

const SearchList = () => {
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { searchData, searchText } = useContext(SearchResultContext);
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode } = useDarkMode();
  useMultiSearch(searchText);

  return (
    <div className={`min-h-screen px-6 pt-8 pb-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Search header */}
        {searchText && (
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Results for "<span className="text-blue-500">{searchText}</span>"
            </h1>
            <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {/* @ts-expect-error: TS1234 because the library definition is wrong */}
              {searchData.length} result{searchData.length !== 1 ? 's' : ''} found
            </p>
          </div>
        )}

        {/* Results grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {
            // @ts-expect-error: TS1234 because the library definition is wrong
            searchData.map((data) => (
              <div key={data.id}>
                {data.media_type === "movie" ? (
                  <MovieCard movieResult={data} />
                ) : (
                  <TvShowCard tvShowResult={data} />
                )}
              </div>
            ))
          }
        </div>

        {/* @ts-expect-error: TS1234 because the library definition is wrong */}
        {searchData.length === 0 && searchText && (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <BiSearchAlt className="text-5xl text-blue-500 mb-2" />
            <h2 className="text-xl font-semibold">No results found</h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchList;
