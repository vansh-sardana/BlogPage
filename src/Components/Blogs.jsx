import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Card from './Card';

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    loading ? 
      <div className='grow relative'>
        <div className='spinner absolute top-[35%]'  />
      </div>
      :
    <div className=" max-w-[672px] py-8 flex flex-col gap-y-7 items-center mb-20">
      {
          (
            posts.length === 0 ? (<div>No Blogs Found</div>) :
              (
                
                posts.map((post) =>
                (
                  
                  <Card key={post?.id} post={post}/>
                ))
              )


          )
      }
    </div>
  )
}


export default Blogs
