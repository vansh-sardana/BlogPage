import './App.css'
import React, { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import Home from './Pages/Home'
import TagPage from './Pages/TagPage'

const App = () => {
  const { fetchData } = useContext(AppContext);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!location.pathname.includes("blog")) {
      const page = searchParams.get("page") ?? 1;
      if (location.pathname.includes("categories")) {
        const category = location.pathname.split("/").at(-1).replace("-", " ");
        fetchData(page, null, category);
      }
      else if (location.pathname.includes("tags")) {
        const tag = location.pathname.split("/").at(-1).replace("-", " ");
        fetchData(page, tag);
      }
      else {
        fetchData(page);
      }
    }
  }, [location.pathname, searchParams]);
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
      <Route path='*' element={
        <div className='flex justify-center items-center flex-col h-[100vh]'>
          <div>404 Not Found</div>
        </div>
      } />
    </Routes>
  )
}

export default App
