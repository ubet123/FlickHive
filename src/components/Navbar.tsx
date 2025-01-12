import { BiCameraMovie } from "react-icons/bi";
import { Input } from "./ui/input";
import { Link, useNavigate, useLocation } from "react-router";
import { CiHeart } from "react-icons/ci";
import Genres from "./Genres";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext } from "react";
import { SearchResultContext } from "@/context/searchResult.context";
import { useDarkMode } from "@/context/DarkModeContext";
import { AiFillHeart } from "react-icons/ai";


const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const { searchText, setSearchText } = useContext(SearchResultContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);
    if (e.target.value.length === 0) {
      navigate(`/`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${e.target.value}`);
  };

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-500 font-bold' : ''; // Highlight active link
  };

  return (
    <>
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} pt-6`}>
        {/* Navbar container */}
        <div className={`${isDarkMode ? 'text-white' : 'text-black'} flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl py-3 `}>
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 cursor-pointer rubik-vinyl">
              FlickHive
            </h1>
            <BiCameraMovie className="text-blue-500 sm:text-3xl md:text-4xl lg:text-4xl" />
          </div>

          <div className="flex gap-3 items-center">
            <form onSubmit={handleSubmit}>
              <Input
                value={searchText}
                onChange={handleChange}
                placeholder="Search"
                className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
              />
            </form>
            <div className="md:block sm:hidden hidden">
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-1">
                  <Genres />
                  <IoMdArrowDropdown className="cursor-pointer" />
                </div>
                <Link to={'/movies'}>
                  <div className={`hover:text-blue-500 ${isActive('/movies')}`}>Movies</div>
                </Link>
                <Link to={'/tvshows'}>
                  <div className={`hover:text-blue-500 ${isActive('/tvshows')}`}>TvShows</div>
                </Link>
                <Link to={'/favorites'}>
                <AiFillHeart title="Favourites" className={`text-3xl cursor-pointer hover:text-blue-500 ${isActive('/favorites')}`} />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
