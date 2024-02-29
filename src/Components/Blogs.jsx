import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className=" w-11/12 max-w-[672px] py-8 flex flex-col gap-y-7 justify-center items-center grow">
      {
        loading ? <div className='spinner relative -top-[60px]'  /> :
          (
            posts.length === 0 ? (<div>No Blogs Found</div>) :
              (
                
                posts.map((post) =>
                (
                  <div key={post?.id} className='flex flex-col gap-y-2'>
                    <div className='text-[14px] flex flex-col leading-[25 px] gap-y-1'>
                      <h2 className='font-bold text-lg'>{post?.title}</h2>
                      <p>By <span className='italic '>{post?.author}</span> on <span className='underline font-bold'>{post?.category}</span></p>
                      <p>Posted On {post?.date}</p>
                    </div>
                    <p>{post?.content}</p>
                    <div>
                      <div className='flex gap-x-2 text-xs'>

                      {post?.tags.map((tag, index) => {
                        return <span className='text-blue-600 underline font-bold' key={index}>#{tag}</span>
                      })}
                      </div>
                    </div>

                  </div>
                ))
              )


          )
      }
    </div>
  )
}


export default Blogs
