import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface MovieResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

const useMovieList = (genres?: number | null) => {
  const [movieLists, setMovieLists] = useState<MovieResult[]>();
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const fetchMovieList = async () => {
    try {
      setLoading(true); // Set loading to true before the fetch starts
      const res = await apiClient.get("/discover/movie", {
        params: {
          with_genres: genres,
        },
      });
      setMovieLists(res.data.results);
      setLoading(false); // Set loading to false once the data is fetched
    } catch (err) {
      console.error("Error fetching movies:", err);
      setLoading(false); // Ensure loading is set to false if there's an error
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [genres]);

  return { movieLists, loading }; // Return loading along with movie lists
};

export default useMovieList;
