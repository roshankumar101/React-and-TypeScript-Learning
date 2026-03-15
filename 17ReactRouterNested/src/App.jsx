import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import Men from './pages/men'
import Women from './pages/Women'
import Kids from './pages/kids'
import Page404 from './pages/Page404'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen w-full text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />}/>
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>
        </Route>

        <Route path='/courses/:courseId' element={<CourseDetails />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App