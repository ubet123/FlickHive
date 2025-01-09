import { Route,Routes } from "react-router"
import MovieList from "@/components/MovieList"
import TvShowList from "@/components/TvShowList"
const AllRoutes = () => {
  return (
   <Routes>
{/*<Route path="/" element=}/>*/}
<Route path='/movies' element={<MovieList/>} />
<Route path='/tvshows' element={<TvShowList/>} />
   </Routes>
  )
}

export default AllRoutes