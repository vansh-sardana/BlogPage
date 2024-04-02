import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const { currPg, changeHandler, totalPg, posts } = useContext(AppContext);
  return (
    <div className="w-full p-4 shadow-md bg-white border-2 fixed bottom-0">
      {
        posts.length !== 0 &&
        <div className='flex flex-col w-11/12 max-w-[672px]  mx-auto items-center'>

          <div className='flex flex-row justify-between w-full max-w-[672px] mx-auto items-center'>
            <div className='flex flex-row gap-4'>

              {
                currPg > 1 &&
                <button onClick={() => changeHandler(currPg - 1)} className='border-2 border-opacity-40 border-gray-400 rounded-md bg-white px-4 py-1'>Previous</button>
              }
              {
                currPg < totalPg &&
                <button onClick={() => changeHandler(currPg + 1)} className='border-2 border-opacity-40 border-gray-400 rounded-md bg-white px-4 py-1'>Next</button>
              }
            </div>
            <div className='font-bold text-sm w-fit'>
              Page {currPg} of {totalPg}
            </div>
          </div>
          <footer className='font-bold text-sm items-center'>Copyright © 2021. All Right Reserved by CodeWell Blogs .</footer>
        </div>
      }
    </div>
  )
}

export default Pagination
