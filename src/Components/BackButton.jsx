import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate= useNavigate();
  return (
    
    <button onClick={()=> navigate(-1)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
    
  )
}

export default BackButton
