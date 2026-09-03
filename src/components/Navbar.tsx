import { BiCameraMovie } from "react-icons/bi";
import { Input } from "./ui/input";
import { Link, useNavigate, useLocation } from "react-router";
import { useContext, useState } from "react";
import { SearchResultContext } from "@/context/searchResult.context";
import { useDarkMode } from "@/context/DarkModeContext";
import { AiFillHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
 // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();
 // @ts-expect-error: TS1234 because the library definition is wrong
  const { searchText, setSearchText } = useContext(SearchResultContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);
    if (e.target.value.length === 0) {
      navigate(`/`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     // @ts-expect-error: TS1234 because the library definition is wrong
    navigate(`/search/${e.target.value}`);
  };

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`sticky top-0 z-50 ${isDarkMode ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800" : "bg-white/95 backdrop-blur-md border-b border-gray-100"} transition-colors duration-300`}>
      {/* Navbar container */}
      <div
        className={`${isDarkMode ? "text-white" : "text-gray-800"} flex justify-between items-center max-w-7xl mx-auto px-6 py-4 text-lg`}
      >
        {/* Logo Section */}
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-blue-500 rubik-vinyl group-hover:text-blue-600 transition-colors duration-300">
            FlickHive
          </h1>
          <BiCameraMovie className="text-blue-500 sm:text-3xl md:text-4xl group-hover:text-blue-600 transition-colors duration-300" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="sm:flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl p-2 rounded-lg hover:bg-gray-200/20 transition-colors duration-200">
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Search and Menu Items */}
        <div className="hidden md:flex gap-6 items-center">
          <form onSubmit={handleSubmit}>
            <Input
              value={searchText}
              onChange={handleChange}
              placeholder="Search movies & shows..."
              className={`rounded-full px-4 w-64 ${isDarkMode ? "border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400" : "border-gray-300 bg-gray-50 placeholder:text-gray-400"} focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300`}
            />
          </form>
          <div className="flex gap-5 items-center">
            <Link to={"/movies"}>
              <div className={`relative py-1 transition-colors duration-200 hover:text-blue-500 ${isActive("/movies") ? "text-blue-500 font-bold" : ""}`}>
                Movies
                {isActive("/movies") && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />}
              </div>
            </Link>
            <Link to={"/tvshows"}>
              <div className={`relative py-1 transition-colors duration-200 hover:text-blue-500 ${isActive("/tvshows") ? "text-blue-500 font-bold" : ""}`}>
                TvShows
                {isActive("/tvshows") && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />}
              </div>
            </Link>
            <Link to={"/favorites"}>
              <AiFillHeart
                title="Favourites"
                className={`text-2xl cursor-pointer transition-all duration-200 hover:text-red-500 hover:scale-110 ${isActive("/favorites") ? "text-red-500" : ""}`}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className={`${isDarkMode ? "bg-gray-900 text-white border-t border-gray-800" : "bg-white text-gray-800 border-t border-gray-100"} px-6 py-4 space-y-4`}>
          <form onSubmit={handleSubmit}>
            <Input
              value={searchText}
              onChange={handleChange}
              placeholder="Search movies & shows..."
              className={`rounded-full w-full ${isDarkMode ? "border-gray-600 bg-gray-800/50 text-white placeholder:text-gray-400" : "border-gray-300 bg-gray-50"}`}
            />
          </form>
          <div className="flex flex-col gap-3">
            <Link to={"/movies"} onClick={() => setMenuOpen(false)}>
              <div className={`py-2 hover:text-blue-500 transition-colors duration-200 ${isActive("/movies") ? "text-blue-500 font-bold" : ""}`}>
                Movies
              </div>
            </Link>
            <Link to={"/tvshows"} onClick={() => setMenuOpen(false)}>
              <div className={`py-2 hover:text-blue-500 transition-colors duration-200 ${isActive("/tvshows") ? "text-blue-500 font-bold" : ""}`}>
                TvShows
              </div>
            </Link>
            <Link to={"/favorites"} onClick={() => setMenuOpen(false)}>
              <div className="flex items-center gap-2 py-2 hover:text-red-500 transition-colors duration-200">
                <AiFillHeart
                  title="Favourites"
                  className={`text-2xl ${isActive("/favorites") ? "text-red-500" : ""}`}
                />
                <span>Favourites</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
