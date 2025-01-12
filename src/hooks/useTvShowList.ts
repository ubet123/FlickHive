import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface TvResult {
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

const useTvShowList = () => {
  const [tvShows, setTvShows] = useState<TvResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const fetchTvShowList = async () => {
    try {
      setLoading(true); // Start loading
      const res = await apiClient.get("/discover/tv");
      setTvShows(res.data.results);
      console.log(res.data.results);
      setLoading(false); // End loading when data is fetched
    } catch (error) {
      console.error("Error fetching TV shows:", error);
      setLoading(false); // End loading if there's an error
    }
  };

  useEffect(() => {
    fetchTvShowList();
  }, []);

  return { tvShows, loading }; // Return loading state as well
};

export default useTvShowList;
