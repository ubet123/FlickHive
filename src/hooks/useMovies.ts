
//api key=13688332598c340abd73366a7cd6f6d7

import apiClient from "@/services/api-client"
import { useEffect, useState } from "react";


export interface MovieResult{
    adult: boolean;
    id: number;
    original_language: string;
    original_title:string;
    title:string;
    backdrop_path:string;
    poster_path:string;
    overview:string;
    name?:string;

}

const useMovieList=(genres?:number | null)=>{

    const [movieLists,setMovieLists]=useState<MovieResult[]>()
    const [loading, setLoading] = useState<boolean>(true);
    const fetchMovieList =async ()=>{
        try {
         const res=   await apiClient.get("/discover/movie",
            {params:{
            with_genres:genres,
            },
        }
         
         );

         setMovieLists(res.data.results)
         setLoading(false);
        // console.log(res.data.results);
        } catch (err) {
            console.error("Error fetching movies:", err);
           
            setLoading(false);
          }
    };

    useEffect(()=>{
        fetchMovieList();
    },[genres]);

    return {movieLists};
};

export default useMovieList