import { useTrendingList } from "@/hooks/useTrendingList"
import { IoMdArrowDropdown } from "react-icons/io";
import { useDarkMode } from '@/context/DarkModeContext';
import { useState } from "react";
import TvShowCard from "../TvShowCard";

const TrendingTv = () => {
    const { trendingData } = useTrendingList("tv")
     // @ts-expect-error: TS1234 because the library definition is wrong
    const { isDarkMode } = useDarkMode();
    const [expand, setExpand] = useState(false)
  
    return (
      <div className={`px-6 pt-8 pb-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1
            className="text-2xl md:text-3xl font-bold flex items-center gap-2 cursor-pointer group mb-6"
            onClick={() => setExpand(!expand)}
          >
            <span className="text-green-500">Trending TV Shows</span>
            <IoMdArrowDropdown
              className={`text-green-500 transition-transform duration-300 group-hover:text-green-600 ${expand ? 'rotate-180' : 'rotate-0'}`}
            />
          </h1>

          {/* TV Show Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(expand ? trendingData : trendingData.slice(0, 10)).map((tv) => (
               // @ts-expect-error: TS1234 because the library definition is wrong
              <TvShowCard key={tv.id} tvShowResult={tv} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default TrendingTv
