import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import Card from '../Components/Card';
import BackButton from '../Components/BackButton';

const BlogPage = () => {
  const [blog, setBlog]= useState(null);
  const [relatedBlogs, setRelatedBlogs]= useState([]);
  const location= useLocation();
  const blogId= location.pathname.split("/").at(-1);
  const {loading, setLoading} = useContext(AppContext);
  const baseUrl= "https://codehelp-apis.vercel.app/api/get-blog";

  async function fetchData(){
    setLoading(true);

    const url= `${baseUrl}?blogId=${blogId}`;
    console.log(url);
    try{
      const res= await fetch(url);
      const data= await res.json();
      console.log("Data fetched: ");
      console.log(data);
      setBlog(data?.blog);
      setRelatedBlogs(data?.relatedBlogs);
    }
    catch(error){
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    if(blogId){
      fetchData();
    }
  }, [location.pathname]);

  return (
    
    <div className='flex flex-col items-center min-h-screen max-w-screen relative overflow-x-hidden'>
      <header className='border w-full text-center p-4 shadow-md sticky top-0 bg-white'>
        <h2 className='text-3xl font-bold'>CODEHELP BLOGS</h2>
      </header>
      {
      loading ? 
      <div className='grow relative'>
        <div className='spinner absolute top-[35%]'  />
      </div>
      :
      <div>
      <div className=' my-6 max-w-[672px]'>
        <BackButton/>
      </div>
      

      <div className="max-w-[672px] flex flex-col justify-center items-center grow">
        <Card post={blog}/>
      </div>

        <div className="max-w-[672px] py-8 flex flex-col gap-y-7 justify-center grow">
          <h2 className='text-3xl font-bold'>Related Blogs</h2>
          {

            relatedBlogs.map((rBlog)=>(
              <Card post={rBlog} key={rBlog?.id}/>
              ))
          }
        </div>
        </div>
      }
    </div>
  )
}

export default BlogPage
