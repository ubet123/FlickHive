import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router";
import { useDarkMode } from "@/context/DarkModeContext";
import { BiCameraMovie } from "react-icons/bi";
import Footer from "./Footer";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=13688332598c340abd73366a7cd6f6d7&language=en-US`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'} transition-colors duration-300`}>
        {/* Header bar with back button and title */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <Link to={"/"}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md transition-all duration-300 hover:-translate-x-1 group`}>
              <IoMdArrowRoundBack className="text-xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="text-sm font-medium">Back to Home</span>
            </div>
          </Link>
        </div>

        {/* Video Player Section */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-col items-center">
            {isLoading ? (
              /* Themed loading spinner */
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <div className="loader-spinner"></div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Loading trailer...</p>
              </div>
            ) : apiData.key ? (
              <div className="w-full max-w-4xl">
                {/* Video title */}
                {apiData.name && (
                  <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    {apiData.name}
                  </h1>
                )}

                {/* Video container with aspect ratio */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${apiData.key}`}
                    title={apiData.name || "Trailer"}
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>

                {/* Video metadata */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                  {apiData.type && (
                    <span className="px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-full">
                      {apiData.type}
                    </span>
                  )}
                  {apiData.published_at && (
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Published: {new Date(apiData.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              /* No trailer found */
              <div className="flex flex-col items-center justify-center py-32 gap-3">
                <BiCameraMovie className="text-5xl text-blue-500 mb-2" />
                <h2 className="text-xl font-semibold">No Trailer Available</h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>We couldn't find a trailer for this title.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
