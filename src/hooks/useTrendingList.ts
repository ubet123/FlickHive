import apiClient from "@/services/api-client"
import { useEffect, useState } from "react"





export const useTrendingList =  (trending:string ="movie")=>{


    const [trendingData,setTrendingData]=useState([])

    const fetchTrending = async ()=>{
        try {
            const res = await apiClient.get(`trending/${trending}/day`)
            setTrendingData(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchTrending()
    },[])

    return {trendingData,setTrendingData}



}