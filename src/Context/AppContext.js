import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading]= useState(true);
    const [currPg, setCurrPg]= useState(1);
    const [totalPg, setTotalPg]= useState(null);
    const [posts, setPosts]= useState([]);
    const navigate= useNavigate();

    async function fetchData(page, tag, category){
        setLoading(true);
        let url= `${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`;
        }
        try{
            const res= await fetch(url);
            const data= await res.json();
            if(!data.posts || data.posts.length===0){
                throw new Error("Unable to fetch data");
            }
            console.log("Data fetched: ");
            console.log(data);
            setCurrPg(data?.page);
            setPosts(data?.posts);
            setTotalPg(data?.totalPages);
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
        navigate({search: `page=${page}`});
    }

    const value= {
        loading, setLoading, currPg, setCurrPg, totalPg, setTotalPg, posts, setPosts, fetchData, changeHandler
    }
    return (<AppContext.Provider value= {value}>
        {children}
    </AppContext.Provider>);
}
