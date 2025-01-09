import apiClient from "@/services/api-client"
import { useEffect,useState } from "react";


export interface TvResult{
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



const useTvShowList= ()=>{

    const [tvShows, setTvShows] = useState()

    const fetchTvShowList = async()=>{
        try {
            const res= await apiClient.get('/discover/tv');
            setTvShows(res.data.results);
            console.log(res.data.results);
        } catch (error) {
    }
   
        }

        useEffect(()=>{
            fetchTvShowList();
        },[]);

        return {tvShows}
}

export default useTvShowList;