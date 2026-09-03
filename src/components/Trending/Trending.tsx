import { useDarkMode } from '@/context/DarkModeContext'
import Footer from '../Footer'
import TrendingMovie from './TrendingMovie'
import TrendingTv from './TrendingTv'

const Trending = () => {
   // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'} transition-colors duration-300`}>
      <TrendingMovie />
      <TrendingTv />
      <Footer />
    </div>
  )
}

export default Trending