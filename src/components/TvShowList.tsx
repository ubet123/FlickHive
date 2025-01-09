import useTvShowList from '@/hooks/useTvShowList'

import TvShowCard from './TvShowCard';

const TvShowList = () => {
  const {tvShows}= useTvShowList();
  return (
    <div className="p-3 mb-4">
    <h1 className="text-4xl font-semibold p-5 px-8">Tv Shows</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-3 overflow-x-hidden">
    {tvShows?.map((tvShow)=>(
       <div key={tvShow.id}>
        <TvShowCard tvShowResult={tvShow}/>
       </div>
    ))}
   </div>
   </div>
  )
}

export default TvShowList