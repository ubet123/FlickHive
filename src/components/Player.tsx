import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router";


import { useDarkMode } from "@/context/DarkModeContext";
import Footer from "./Footer";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });


 
  // Use the dynamic 'id' from the URL
  const { id } = useParams()
console.log('Params id',id)
// @ts-expect-error: TS1234 because the library definition is wrong
const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=13688332598c340abd73366a7cd6f6d7&language=en-US`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data only if 'id' is available
    if (id) {
      fetchData();
    }
  }, [id]);  // Dependency array updated to 'id' from URL params

  return (
    <>
    <div className={`relative min-h-screen ${isDarkMode? 'bg-gray-900 text-white' : 'bg-blue-50 text-black'} bg-gray-100`}>
      {/* Back Arrow */}
      <Link to={"/"}>
        <div className="absolute top-4 left-4 text-4xl cursor-pointer hover:text-blue-500">
          <IoMdArrowRoundBack />
        </div>
      </Link>

      {/* Video Player */}
      <div className="flex justify-center items-center w-full h-full pt-10">
        {apiData.key ? (
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="Trailer"
            allowFullScreen
            className="w-[90%] h-[500px] max-w-[800px] rounded-md shadow-lg"
          ></iframe>
        ) : (
          /* Loading Indicator */
          <div className="mt-32">
            <button className="inline-block rounded-full bg-green-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0" type="button">
              <div
                role="status"
                className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              Loading
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Player;
