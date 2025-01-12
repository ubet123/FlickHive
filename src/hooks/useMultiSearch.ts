import { SearchResultContext } from "@/context/searchResult.context"
import apiClient from "@/services/api-client"

import { useContext, useEffect } from "react"





export const useMultiSearch =(input:string)=>{
    // @ts-expect-error: TS1234 because the library definition is wrong
    const {setSearchData} =useContext(SearchResultContext)
    const fetchSearch= async ()=>{
        const res= await apiClient.get("/search/multi",{
            params:{
                query: input,
            },
        })

        setSearchData(res.data.results)
    }

    useEffect(()=>{
        fetchSearch()
    },[input])
}