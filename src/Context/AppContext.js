import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading]= useState(true);
    const [currPg, setCurrPg]= useState(1);
    const [totalPg, setTotalPg]= useState(null);
    const [posts, setPosts]= useState([]);

    async function fetchData(page= 1){
        setLoading(true);
        const url= `${baseUrl}?page=${page}`;
        try{
            const res= await fetch(url);
            const data= await res.json();
            setCurrPg(data?.page);
            setPosts(data?.posts);
            setTotalPg(data?.totalPages);
            // console.log(data);
        }
        catch(e){
            console.log(e);
            setCurrPg(0);
            setTotalPg(0);
            setPosts([]);
        }
        setLoading(false);
    }

    function changeHandler(page){
        setCurrPg(page);
        fetchData(page);
    }

    const value= {
        loading, setLoading, currPg, setCurrPg, totalPg, setTotalPg, posts, setPosts, fetchData, changeHandler
    }
    return (<AppContext.Provider value= {value}>
        {children}
    </AppContext.Provider>);
}
