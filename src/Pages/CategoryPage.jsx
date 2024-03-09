import React from 'react'
import { useLocation } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';
import BackButton from '../Components/BackButton';

const CategoryPage = () => {
  const location= useLocation();
  const tag= location.pathname.split("/").at(-1).replace("-", " ");
  return (

    <div className='flex flex-col items-center min-h-screen max-w-screen relative overflow-x-hidden'>
      <header className='border w-full text-center p-4 shadow-md sticky top-0 bg-white'>
        <h2 className='text-3xl font-bold'>CODEHELP BLOGS</h2>
      </header>
      <div className=' mt-6 w-11/12 max-w-[672px]'>
        <BackButton/> <span className='font-bold text-xl ml-2'> Blogs on </span> <span className='underline font-bold text-xl'>{`${tag}`}</span>
      </div>
      <Blogs />
      <Pagination/>
    </div>

  )
}

export default CategoryPage
