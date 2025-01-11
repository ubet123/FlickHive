import { AiOutlineHeart } from "react-icons/ai"
import { TvResult } from "@/hooks/useTvShowList";


interface Props {
  tvShowResult: TvResult;
}

const TvShowCard = ({tvShowResult}:Props) => {
if(!tvShowResult){
  return(
    <>
    <h1>No Search Results Found</h1>
    </>
  )
}

  return (
     <>
        <div className="flex flex-col  items-center">
        <div className="flex items-center justify-center mt-8 mb-2 bg-gray-100 dark:bg-gray-900">
          <div className="group relative w-50 h-96 bg-gray-800 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer">
           
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
              alt="TvShow Poster Loading..."
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
    
            
            <div className="absolute top-3 right-3 z-10">
              <AiOutlineHeart title="Add to Favourties" className="text-white text-2xl cursor-pointer hover:text-red-500 transition-colors duration-300 opacity-0 group-hover:opacity-100" />
            </div>
    
            
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-semibold mb-2 text-center max-w-72">{tvShowResult.name}</h2>
              <p className="text-white text-sm text-center px-4 max-h-20 overflow-y-hidden">{tvShowResult.overview}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded shadow">
                Watch Now
              </button>
            </div>
          </div>
          
        </div>
        <h1 className="text-center">{tvShowResult.title? tvShowResult.title :tvShowResult.name}</h1>
        </div>
        
        </>
  )
}

export default TvShowCard