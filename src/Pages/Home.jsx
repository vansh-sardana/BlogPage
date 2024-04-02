import React from 'react'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

const Home = () => {
  return (
    <div className='flex flex-col items-center min-h-screen max-w-screen relative overflow-x-hidden'>
      <header className='border w-full text-center p-4 shadow-md sticky top-0 bg-white'>
        <h2 className='text-3xl font-bold'>CODEWELL BLOGS</h2>
      </header>
      <Blogs />
      <Pagination/>
    </div>
  )
}

export default Home
