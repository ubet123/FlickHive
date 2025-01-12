import { useTrendingList } from "@/hooks/useTrendingList"
import { IoMdArrowDropdown } from "react-icons/io";
import { useDarkMode } from '@/context/DarkModeContext';
import { useState } from "react";
import TvShowCard from "../TvShowCard";

const TrendingTv = () => {
    const {trendingData} = useTrendingList("tv")
     // @ts-expect-error: TS1234 because the library definition is wrong
    const { isDarkMode } = useDarkMode();
    const [expand , setExpand]=useState(false)
  
    return (
      <div className={`p-3  ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-black'}`}>
          <div>
              <div className="hover:text-blue-500">
              <h1 className="text-3xl font-semibold p-5 py-8 flex items-center cursor-pointer  " onClick={()=>(setExpand(!expand))}>Trending TvShows <IoMdArrowDropdown  className={`cursor-pointer transition-transform duration-300 ${expand ? 'rotate-180' : 'rotate-0'}`}/></h1>
              </div>
              
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-3 overflow-x-hidden">
                  { expand && trendingData.map((tv)=>(
                     // @ts-expect-error: TS1234 because the library definition is wrong
                        <div key={tv.id}>
                          <TvShowCard tvShowResult={tv}/>
                        </div>
                  ))}
  
  { !expand && trendingData.slice(0,8).map((tv)=>(
     // @ts-expect-error: TS1234 because the library definition is wrong
                        <div key={tv.id}>
                          <TvShowCard tvShowResult={tv}/>
                        </div>
                  ))}
              </div>
          </div>
      </div>
    )
}

export default TrendingTv
